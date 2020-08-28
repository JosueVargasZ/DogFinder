import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _ds: DogService) { 
    // this._ds.getBreeds().subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
