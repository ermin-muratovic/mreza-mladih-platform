import {Component, OnInit} from '@angular/core';
import {ApiService} from "../_services/api-service/api.service";
import {Member} from "@mreza-mladih-platform/api-interfaces";

@Component({
  selector: 'mreza-mladih-platform-my-dzemat',
  templateUrl: './my-dzemat.component.html',
  styleUrls: ['./my-dzemat.component.scss']
})
export class MyDzematComponent implements OnInit {

  public members: Member[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getMembers()
      .subscribe((members: Member[]) => {
        this.members = members;
      });
  }

}
