// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-quiz',
//   templateUrl: './quiz.component.html',
//   styleUrl: './quiz.component.css'
// })
// export class QuizComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  template: `
    <h2>{{ quizTitle }}</h2>
    <div *ngIf="currentQuestion < questions.length">
      <h3>Question {{ currentQuestion + 1 }}: {{ questions[currentQuestion].question }}</h3>
      <ul>
        <li *ngFor="let option of questions[currentQuestion].options">
          <button (click)="submitAnswer(option.isCorrect)">{{ option.answer }}</button>
        </li>
      </ul>
    </div>
    <div *ngIf="currentQuestion >= questions.length">
      <h3>Quiz Completed!</h3>
      <button (click)="viewResult()">View Result</button>
    </div>
  `
})
export class QuizComponent implements OnInit {
  quizTitle: string = '';
  currentQuestion: number = 0;
  score: number = 0;

  questions = [
    {
      question: 'What is Angular?',
      options: [
        { answer: 'A framework', isCorrect: true },
        { answer: 'A library', isCorrect: false },
        { answer: 'A database', isCorrect: false }
      ]
    },
    {
      question: 'What language does Angular use?',
      options: [
        { answer: 'TypeScript', isCorrect: true },
        { answer: 'Python', isCorrect: false },
        { answer: 'Java', isCorrect: false }
      ]
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const quizId = this.route.snapshot.paramMap.get('id');
    this.quizTitle = quizId === '1' ? 'Angular Basics' : 'JavaScript Fundamentals';
  }

  submitAnswer(isCorrect: boolean) {
    if (isCorrect) {
      this.score++;
    }
    this.currentQuestion++;
  }

  viewResult() {
    this.router.navigate(['/result', this.score]);
  }
}

