import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 
  @Input() loveIt: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: Date;
  constructor() { }

  ngOnInit() {
    this.loveIt = 0;
    this.postCreatedAt = new Date();
 
  }
  onLoveIt() {
    this.loveIt++;

  }
  onDontLoveIt() {
    this.loveIt--;

  }
  getColor() {
      if(this.loveIt >= 0) {
        return 'green';
      } else if(this.loveIt < 0) {
        return 'red';
      }
  }
}
