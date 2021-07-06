import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mreza-mladih-platform-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mode = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.mode = !this.mode;
  }

}
