import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = window.location.protocol + "//api." + window.location.hostname + "/api";
  }

  public getData() {
    return this.http.get(`${this.apiUrl}/hello`);
  }

  public getMembers() {
    return this.http.get(`${this.apiUrl}/member`);
  }

  public addMember(member) {
    return this.http.post(`${this.apiUrl}/register`, { name: member.name });
  }
}
