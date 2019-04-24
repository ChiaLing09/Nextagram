import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NextagramService } from '../nextagram.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  images
  count = 0

  constructor(private route: ActivatedRoute, private nextagramService: NextagramService) { }

  ngOnInit() {
    this.nextagramService.getSpecificNames(
      this.route.snapshot.params.id).subscribe(response => {
        this.images = response
      })
  }

  countString
  clickCount() {
    this.count++
    console.log(this.count)
    document.getElementById('likeCount').innerText = this.count.toString()
  }

}
