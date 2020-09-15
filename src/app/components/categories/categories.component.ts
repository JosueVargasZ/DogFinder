import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {name: "Toy"},
    {name: "Working"},
    {name: "Herding"},
    {name: "Hound"},
    {name: "Terrier"},
    {name: "Sporting"},
    {name: "Non-Sporting"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
