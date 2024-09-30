//  import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class homeComponent {

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <h2>Available Quizzes</h2>
    <ul>
      <li *ngFor="let quiz of quizzes">
       <button> <a (click)="startQuiz(quiz.id)">{{ quiz.title }}</a></button>
      </li>
    </ul>
  `
})
export class HomeComponent {
  quizzes = [
    { id: 1, title: 'Angular Basics' },
    { id: 2, title: 'JavaScript Fundamentals' }
  ];

  constructor(private router: Router) {}

  startQuiz(id: number) {
    this.router.navigate(['/quiz', id]);
  }
}
