// CEFR English Test Application
// Adaptive test logic with EmailJS integration

class CEFRTest {
    constructor() {
        this.currentScreen = 'welcome';
        this.currentLevel = 'A2'; // Starting level
        this.currentQuestionIndex = 0;
        this.totalQuestions = 20;
        this.questionsAsked = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = [];
        this.usedQuestions = new Set();
        this.levelProgression = [];
        this.selectedAnswer = null;
        this.testStartTime = null;
        
        // CEFR levels in order
        this.levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        this.levelIndex = 1; // Starting at A2 (index 1)
        
        this.initializeEmailJS();
        this.bindEvents();
        this.updateProgress();
    }

    initializeEmailJS() {
        // TODO: Replace with your EmailJS configuration
        // Get your keys from: https://www.emailjs.com/
        
        // SERVICE_ID: Your EmailJS service ID (e.g., 'service_xxxxxxx')
        this.emailJSServiceId = 'service_j3awk3k'; // Replace with your service ID
        
        // TEMPLATE_ID: Your EmailJS template ID (e.g., 'template_xxxxxxx')
        this.emailJSTemplateId = 'template_4i5u9pk'; // Replace with your template ID
        
        // PUBLIC_KEY: Your EmailJS public key (e.g., 'xxxxxxxxxxxxxxx')
        this.emailJSPublicKey = 'gvuXhLBLf6F2vkCxF'; // Replace with your public key
        
        // Initialize EmailJS with your public key
        emailjs.init(this.emailJSPublicKey);
        
        console.log('EmailJS initialized. Please configure your service ID, template ID, and public key.');
    }

    bindEvents() {
        // Welcome screen
        document.getElementById('start-test-btn').addEventListener('click', () => {
            this.startTest();
        });

        // Test screen
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Results screen
        document.getElementById('results-form').addEventListener('submit', (e) => {
            this.handleFormSubmission(e);
        });

        document.getElementById('retake-test-btn').addEventListener('click', () => {
            this.restartTest();
        });

        // Success screen
        document.getElementById('new-test-btn').addEventListener('click', () => {
            this.restartTest();
        });
    }

    startTest() {
        this.testStartTime = new Date();
        this.showScreen('test');
        this.loadNextQuestion();
    }

    loadNextQuestion() {
        if (this.questionsAsked >= this.totalQuestions) {
            this.finishTest();
            return;
        }

        const availableQuestions = questionsDatabase[this.currentLevel].filter(
            (_, index) => !this.usedQuestions.has(`${this.currentLevel}-${index}`)
        );

        if (availableQuestions.length === 0) {
            // If no more questions at current level, finish the test
            this.finishTest();
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const question = availableQuestions[randomIndex];
        
        // Find the original index to mark as used
        const originalIndex = questionsDatabase[this.currentLevel].indexOf(question);
        this.usedQuestions.add(`${this.currentLevel}-${originalIndex}`);

        this.currentQuestion = question;
        this.displayQuestion(question);
        this.updateProgress();
        this.selectedAnswer = null;
        document.getElementById('next-btn').disabled = true;
    }

    displayQuestion(question) {
        document.getElementById('question-text').textContent = question.question;
        document.getElementById('current-level').textContent = this.currentLevel;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(index, optionElement));
            optionsContainer.appendChild(optionElement);
        });
    }

    selectOption(index, element) {
        // Remove previous selections
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });

        element.classList.add('selected');
        this.selectedAnswer = index;
        document.getElementById('next-btn').disabled = false;
    }

    nextQuestion() {
        if (this.selectedAnswer === null) return;

        const isCorrect = this.selectedAnswer === this.currentQuestion.correct;
        
        if (isCorrect) {
            this.correctAnswers++;
        } else {
            this.wrongAnswers.push({
                question: this.currentQuestion.question,
                userAnswer: this.currentQuestion.options[this.selectedAnswer],
                correctAnswer: this.currentQuestion.options[this.currentQuestion.correct],
                explanation: this.currentQuestion.explanation,
                topic: this.currentQuestion.topic,
                level: this.currentLevel
            });
        }

        this.questionsAsked++;
        this.levelProgression.push({
            level: this.currentLevel,
            correct: isCorrect,
            questionNumber: this.questionsAsked
        });

        // Show correct answer briefly
        this.showAnswerFeedback(isCorrect);

        // Adjust level based on performance
        setTimeout(() => {
            this.adjustLevel(isCorrect);
            this.loadNextQuestion();
        }, 1500);
    }

    showAnswerFeedback(isCorrect) {
        const options = document.querySelectorAll('.option');
        options[this.currentQuestion.correct].classList.add('correct');
        
        if (!isCorrect) {
            options[this.selectedAnswer].classList.add('incorrect');
        }

        document.getElementById('next-btn').disabled = true;
    }

    adjustLevel(isCorrect) {
        if (isCorrect && this.levelIndex < this.levels.length - 1) {
            this.levelIndex++;
        } else if (!isCorrect && this.levelIndex > 0) {
            this.levelIndex--;
        }
        
        this.currentLevel = this.levels[this.levelIndex];
    }

    finishTest() {
        const finalLevel = this.calculateFinalLevel();
        this.displayResults(finalLevel);
        this.showScreen('results');
    }

    calculateFinalLevel() {
        // Calculate final level based on performance across different levels
        const levelCounts = {};
        this.levels.forEach(level => levelCounts[level] = { correct: 0, total: 0 });

        this.levelProgression.forEach(item => {
            levelCounts[item.level].total++;
            if (item.correct) {
                levelCounts[item.level].correct++;
            }
        });

        // Find the highest level where user got at least 50% correct with minimum questions
        for (let i = this.levels.length - 1; i >= 0; i--) {
            const level = this.levels[i];
            const stats = levelCounts[level];
            if (stats.total >= 2 && stats.correct / stats.total >= 0.5) {
                return level;
            }
        }

        // Fallback to A1 if no level meets criteria
        return 'A1';
    }

    displayResults(finalLevel) {
        const levelInfo = levelDescriptions[finalLevel];
        
        document.getElementById('final-level').textContent = finalLevel;
        document.getElementById('level-description').textContent = levelInfo.description;

        // Score summary
        const accuracy = Math.round((this.correctAnswers / this.questionsAsked) * 100);
        document.getElementById('score-summary').innerHTML = `
            <p><strong>Domande Risposte:</strong> ${this.questionsAsked} / ${this.totalQuestions}</p>
            <p><strong>Risposte Corrette:</strong> ${this.correctAnswers}</p>
            <p><strong>Precisione:</strong> ${accuracy}%</p>
            <p><strong>Livello Finale:</strong> ${finalLevel} - ${levelInfo.name}</p>
        `;

        // Improvement suggestions
        this.displayImprovementSuggestions(finalLevel);
    }

    displayImprovementSuggestions(finalLevel) {
        const container = document.getElementById('improvement-suggestions');
        const levelInfo = levelDescriptions[finalLevel];
        
        let html = '<h4>Prossimi Passi per Migliorare:</h4><ul>';
        levelInfo.nextSteps.forEach(step => {
            html += `<li>${step}</li>`;
        });
        html += '</ul>';

        if (this.wrongAnswers.length > 0) {
            html += '<h4>Aree su cui Concentrarsi:</h4><ul>';
            const topics = [...new Set(this.wrongAnswers.map(q => q.topic))];
            topics.forEach(topic => {
                if (improvementSuggestions[topic]) {
                    html += `<li>${improvementSuggestions[topic]}</li>`;
                }
            });
            html += '</ul>';
        }

        container.innerHTML = html;
    }

    async handleFormSubmission(e) {
        e.preventDefault();
        
        const name = document.getElementById('user-name').value;
        const email = document.getElementById('user-email').value;
        
        if (!name || !email) {
            alert('Per favore compila tutti i campi.');
            return;
        }

        this.showLoading(true);

        try {
            await this.sendResultsEmail(name, email);
            this.showScreen('success');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Spiacenti, si è verificato un errore nell\'invio dei risultati. Riprova.');
        } finally {
            this.showLoading(false);
        }
    }

    async sendResultsEmail(name, email) {
        const finalLevel = this.calculateFinalLevel();
        const levelInfo = levelDescriptions[finalLevel];
        const accuracy = Math.round((this.correctAnswers / this.questionsAsked) * 100);
        
        // Prepare wrong answers details
        let wrongAnswersText = '';
        if (this.wrongAnswers.length > 0) {
            wrongAnswersText = this.wrongAnswers.map((qa, index) => {
                return `${index + 1}. ${qa.question}
Your answer: ${qa.userAnswer}
Correct answer: ${qa.correctAnswer}
Explanation: ${qa.explanation}
Topic: ${qa.topic}
Level: ${qa.level}`;
            }).join('\n\n');
        } else {
            wrongAnswersText = 'Congratulations! You answered all questions correctly.';
        }

        // Prepare improvement suggestions
        const suggestions = levelInfo.nextSteps.join('\n• ');
        
        const templateParams = {
            to_name: name,
            to_email: email,
            user_level: `${finalLevel} - ${levelInfo.name}`,
            level_description: levelInfo.description,
            total_questions: this.questionsAsked,
            correct_answers: this.correctAnswers,
            accuracy: accuracy,
            wrong_answers: wrongAnswersText,
            suggestions: `• ${suggestions}`,
            test_date: new Date().toLocaleDateString()
        };

        // Send email using EmailJS
        const response = await emailjs.send(
            this.emailJSServiceId,
            this.emailJSTemplateId,
            templateParams
        );

        if (response.status !== 200) {
            throw new Error('Email sending failed');
        }

        return response;
    }

    showLoading(show) {
        const overlay = document.getElementById('loading-overlay');
        if (show) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    }

    showScreen(screenName) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(`${screenName}-screen`).classList.add('active');
        this.currentScreen = screenName;
    }

    updateProgress() {
        const progress = (this.questionsAsked / this.totalQuestions) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('question-counter').textContent = 
            `Domanda ${this.questionsAsked + 1} di ${this.totalQuestions}`;
    }

    restartTest() {
        // Reset all test data
        this.currentLevel = 'A2';
        this.levelIndex = 1;
        this.currentQuestionIndex = 0;
        this.questionsAsked = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = [];
        this.usedQuestions.clear();
        this.levelProgression = [];
        this.selectedAnswer = null;
        this.testStartTime = null;

        // Reset form
        document.getElementById('results-form').reset();

        // Show welcome screen
        this.showScreen('welcome');
        this.updateProgress();
    }
}

// Initialize the test when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CEFRTest();
});

// EmailJS Template Configuration Guide
/*
To set up EmailJS, you need to:

1. Go to https://www.emailjs.com/ and create an account
2. Create a new service (Gmail, Outlook, etc.)
3. Create a new email template with these variables:
   - {{to_name}} - Recipient's name
   - {{to_email}} - Recipient's email
   - {{user_level}} - Test result level
   - {{level_description}} - Level description
   - {{total_questions}} - Number of questions answered
   - {{correct_answers}} - Number of correct answers
   - {{accuracy}} - Accuracy percentage
   - {{wrong_answers}} - Details of wrong answers
   - {{suggestions}} - Improvement suggestions
   - {{test_date}} - Date of test

Example Email Template:
Subject: Your CEFR English Test Results

Dear {{to_name}},

Thank you for taking our CEFR English Level Test!

## Your Results
- **Level:** {{user_level}}
- **Description:** {{level_description}}
- **Questions Answered:** {{total_questions}}
- **Correct Answers:** {{correct_answers}}
- **Accuracy:** {{accuracy}}%
- **Test Date:** {{test_date}}

## Wrong Answers Review
{{wrong_answers}}

## Suggestions for Improvement
{{suggestions}}

Best regards,
English Learning Team

4. Replace the configuration variables in the initializeEmailJS() method:
   - YOUR_SERVICE_ID with your service ID
   - YOUR_TEMPLATE_ID with your template ID  
   - YOUR_PUBLIC_KEY with your public key
*/
