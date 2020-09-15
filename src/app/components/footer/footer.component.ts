import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year:number;
  designed:string;

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.designed = 'Designed by Josue Vargas';
  }

}
