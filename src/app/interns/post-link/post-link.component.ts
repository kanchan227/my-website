import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-link',
  templateUrl: './post-link.component.html',
  styleUrls: ['./post-link.component.css']
})
export class PostLinkComponent{

  constructor() { }

  @Input()
  Post: any=[];
}
