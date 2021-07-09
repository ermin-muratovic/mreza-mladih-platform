import {Component, OnInit} from '@angular/core';
import {ApiService} from "../_services/api-service/api.service";

@Component({
  selector: 'mreza-mladih-platform-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public mode = false;
  public member = {
    firstname: "",
    lastname: "",
    email: ""
  };

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.mode = !this.mode;
  }

  register(): void {
    let newMember = {
      name: this.member.firstname+" "+this.member.lastname+" "+this.member.email
    };
    this.apiService.addMember(newMember)
      .subscribe((response) => {
        console.log("register.response", response);
        // TODO: redirect to "myDzemat"
      });
  }

}
