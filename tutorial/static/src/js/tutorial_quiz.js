odoo.define('tutorial.ClientAction', function (require) {
    const DINOSAUR_QUIZ = [
        {
            question: "Which is the best dinosaur?",
            choices: {
                a: "tyrannosaurus",
                b: "diplodocus",
                c: "ankylosaurus",
                d: "iguanodon"
            },
            answer: "d"
        },  {
            question: "Which of these animals is not a dinosaur?",
            choices: {
                a: "a triceratops",
                b: "a cow"
            },
            answer: "b"
        },
    ];
    const COLOR_QUIZ = [
        {
            question: "What is your favorite color?",
            choices: {
                a: "red",
                b: "blue",
                c: "green",
            },
            answer: "c"
        },
        {
            question: "How many colors are there?",
            choices: {
                a: "a lot",
                b: "100",
                c: "over 9000",
            },
            answer: "c"
        },
        {
            question: "3 How many colors are there?",
            choices: {
                a: "a lot",
                b: "100",
                c: "over 9000",
            },
            answer: "c"
        }
    ];
    const QUIZZES = {  
        dinosaurs: DINOSAUR_QUIZ,
        colors: COLOR_QUIZ,
    };
    let result = []

    // We use the require() to import the widgets we need for our own widget.
    const AbstractAction = require('web.AbstractAction');
    const Widget = require('web.Widget');
    const core = require('web.core');

    const QuizAction = AbstractAction.extend({
        template: "tutorial.ClientAction",
        custom_events: {
            quiz_selected: "selectQuiz",
            quiz_next_page: "nextPage",
            resume_page: "resumePage",
            // quiz_completed: "quizCompleted",
            back_to_selection: "backToSelection",
        },
        start() {
            const quizSelection = new QuizSelection(this);
            quizSelection.appendTo(this.$el);
        },
        selectQuiz(ev) {
            console.log(ev.data.quiz)
            const quizWidget = new Quiz(this, ev.data.quiz, 0);
            // add Quiz widget to DOM
            quizWidget.appendTo(this.$el);
            // remove previous QuizSelection widget
            ev.target.destroy();
        },
        nextPage(ev) {
            const quizWidget = new Quiz(this, ev.data.quizName, ev.data.count);
            quizWidget.appendTo(this.$el);
            ev.target.destroy();
        },
        resumePage(ev) {
            console.log('Answers....',  ev.data.result)
            const resumeWidget = new Resume(this, ev.data.quizName, ev.data.count, ev.data.result);
            resumeWidget.appendTo(this.$el);
            ev.target.destroy();
        },
        backToSelection(ev) {
            const quizSelection = new QuizSelection(this);
            quizSelection.appendTo(this.$el);
            result = []
            ev.target.destroy();
        },
    });

    const QuizSelection = Widget.extend({
        template: "tutorial.QuizSelection",
        events: {
            "click button": "selectQuiz",
        },
        quizzes: Object.keys(QUIZZES),
        selectQuiz(ev) {
            const quiz = ev.target.dataset.quiz;
            this.trigger_up("quiz_selected", { quiz })
        }
    });

    const Quiz = Widget.extend({
        template: "tutorial.Quiz",
        events: {
            "click button": "selectChoice",
        },
        init(parent, quizName, current) {
            this._super(parent);
            // here we have the widget "static" state:
            this.quizName = quizName;
            this.questions = QUIZZES[quizName];
            // and here the widget "running" state:
            this.current = current; // index of current question
            this.answers = []; // list of user answers
        },
        selectChoice(ev) {
            result.push(ev.target.dataset.choice);
            const total_questions = this.questions.length;
            const count = this.current + 1;
            const quizName = this.quizName
            // const answers = result
            console.log(ev.target)
            if (count >= total_questions) {
                console.log('Go to resume page')
                this.trigger_up("resume_page", { count, quizName, result })
            } else {
                this.trigger_up("quiz_next_page", { count, quizName })
            }
        }
    });

    const Resume = Widget.extend({
        template: "tutorial.Resume",
        events: {
            "click button": "actionButton",
        },
        init(parent, quizName, current, answers) {
            this._super(parent);
            this.quizName = quizName;
            this.questions = QUIZZES[quizName];
            this.current_index = current;
            this.answers = answers;
        },
        actionButton(ev) {
            this.trigger_up("back_to_selection")
        }
    });

    // Adds it to the registry so that the action is loaded by Odoo
    core.action_registry.add('tutorial.quiz', QuizAction);
}); 