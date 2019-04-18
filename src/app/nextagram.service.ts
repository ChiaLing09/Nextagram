import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const getNameUrl = 'https://insta.nextacademy.com/api/v1/users'
const getImage = 'https://insta.nextacademy.com/api/v1/images?userId'

@Injectable({
  providedIn: 'root'
})
export class NextagramService {

  constructor(private http: HttpClient) { }

  getNames() {
    return this.http.get(getNameUrl)
  }

  getSpecificNames(id) {
    return this.http.get(getImage + `/${id}`)
  }
}
