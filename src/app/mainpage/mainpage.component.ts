import { Component, OnInit } from '@angular/core';
import { NextagramService } from '../nextagram.service'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  ids = []

  constructor(private nextagramService: NextagramService) { }

  ngOnInit() {
    this.getNames()
  }

  getNames() {
    this.nextagramService.getNames().subscribe(response => {
      this.ids = response.results.map(result => result.id)
    })
  }

}
