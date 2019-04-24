import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'

const getNameUrl = 'https://insta.nextacademy.com/api/v1/users'
const getImage = 'https://insta.nextacademy.com/api/v1/images?userId='
const baseUrl = 'https://insta.nextacademy.com/api/v1'

@Injectable({
  providedIn: 'root'
})
export class NextagramService {
  items = new BehaviorSubject<string[]>([document.getElementById('commentBox').innerText])

  constructor(private http: HttpClient) { }

  getNames() {
    return this.http.get(getNameUrl)
  }

  getSpecificNames(id) {
    return this.http.get(getImage + `${id}`)
  }

  submitSignUp(data: Object) {
    //this.http.post(`${baseUrl}/users`, data).subscribe(response => {
    console.log(data)
    //})
  }

  getItems() {
    return this.items
  }

  change() {
    const updatedItems = this.items.getValue()
    updatedItems.push(document.getElementById('commentBox').innerText)
    this.items.next(updatedItems)
  }
}
