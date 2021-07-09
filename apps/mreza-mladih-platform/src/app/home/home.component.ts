import { Component, OnInit } from '@angular/core';
import {ApiService} from "../_services/api-service/api.service";

@Component({
  selector: 'mreza-mladih-platform-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public message;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData()
      .subscribe((response) => {
        this.message = response.message;
      });
  }

}
