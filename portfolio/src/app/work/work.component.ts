import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit{

  soapboxURL: string = '../../assets/images/soapbox.png';
  projects: Object[];

  constructor() { 
    this.projects = [
      {
        title: "Soapbox",
        info: "Create and share posts on this social media application. Follow users that make content you enjoy. Posts can be created with searchable tags to find similar content.",
        url: "../../assets/images/soapbox.png",
        gif: "../../assets/images/soapbox.gif"
      },
      {
        title: "Weather Dashboard",
        info: "",
        url:"",
        gif:""
      }
    ]
  }

  ngOnInit() {}
}
