import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const getNameUrl = 'https://tranquil-beach-87956.herokuapp.com/api/v1/users'

@Injectable({
  providedIn: 'root'
})
export class NextagramService {

  constructor(private http: HttpClient) { }

  getNames() {
    return this.http.get(getNameUrl)
  }

  getSpecificNames(id) {
    return this.http.get(getNameUrl + `/${id}`)
  }
}
