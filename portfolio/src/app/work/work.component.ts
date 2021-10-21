import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  soapboxURL: string = '../../assets/images/soapbox.png';
  currentURL:string = ""

  changeURL(url:string){
    this.soapboxURL = url
    console.log('url change')
  };

  resetSoapbox(){
    this.soapboxURL = '../../assets/images/soapbox.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
