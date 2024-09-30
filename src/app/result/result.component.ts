// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-result',
//   templateUrl: './result.component.html',
//   styleUrl: './result.component.css'
// })
// export class ResultComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  template: `
    <h2>Your Quiz Result</h2>
    <p>Your score is: {{ score }} / 2</p>
   <button> <a routerLink="/">Go back to Home</a></button>
  `
})
export class ResultComponent implements OnInit {
  score: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.score = +this.route.snapshot.paramMap.get('score')!;
  }
}

