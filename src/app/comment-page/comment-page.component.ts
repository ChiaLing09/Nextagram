import { Component, OnInit } from '@angular/core';
import { NextagramService } from '../nextagram.service';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {

  constructor(private nextagramService: NextagramService) { }
  items: string[] = []


  ngOnInit() {
    this.nextagramService.getItems().subscribe(items => {
      this.items = items
    })
  }

  addTodos() {
    this.nextagramService.change()
  }

}
