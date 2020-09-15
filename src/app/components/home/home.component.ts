import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category:string;
  categories = [
    {name: "Toy"},
    {name: "Working"},
    {name: "Herding"},
    {name: "Hound"},
    {name: "Terrier"},
    {name: "Sporting"},
    {name: "Non-Sporting"},
  ];


  constructor( private _ds: DogService) { 
  }

  ngOnInit(): void {
   this.category = this.categories[ Math.floor(( Math.random() * 7 ))].name;
  }

}
