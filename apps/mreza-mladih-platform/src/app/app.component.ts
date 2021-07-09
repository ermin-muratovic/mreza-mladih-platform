import { Component } from '@angular/core';
import {Dzemat, Message, Member} from '@mreza-mladih-platform/api-interfaces';
import {ApiService} from "./_services/api-service/api.service";

@Component({
  selector: 'mreza-mladih-platform-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public number;
  public dzemat: Dzemat;

  // public hello$ = this.http.get<Message>('/api/hello');

  public nameInput;

  constructor(private apiService: ApiService) {
    this.number = 0;
    this.dzemat = {
      name: "Dzemat Hamm",
      members: [],
    };
  }

  inc() {
    this.number++;
  }

  addMember() {
    this.apiService.addMember({ name: this.nameInput })
      .subscribe(data => {
        console.log("data", data);
        this.dzemat.members.push({
          id: this.dzemat.members.length,
          name: this.nameInput
        });
        this.nameInput = null;
      });
  }
}
