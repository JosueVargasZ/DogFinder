import { Component, OnInit } from '@angular/core';

import { DogService } from '../../services/dog.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliderJump    :number = 4;
  sliderPosition:number;
  sliderStop    :number;
  images        :object[] =[{src: '../../../assets/img/doggy.jpg'},
                     {src: '../../../assets/img/doggy2.jpg'},
                     {src: '../../../assets/img/doggy3.jpg'},
                     {src: '../../../assets/img/doggy4.jpg'},
                     {src: '../../../assets/img/doggy5.jpg'},
                     {src: '../../../assets/img/doggy6.jpg'},
                     {src: '../../../assets/img/doggy7.jpg'}
                    ]; 

  constructor( private _dogService: DogService ) {
    this.sliderPosition = 0;
    this.sliderStop = this.sliderJump;
   }

  ngOnInit(): void {
  }

  prev(){
    if(this.sliderPosition === 0){
      return;
    }
    this.sliderPosition--;
    this.sliderStop = this.sliderPosition + this.sliderJump;
  }


  next(){
    if( (this.sliderPosition + this.sliderJump) === this.images.length ){
      return;
    }
    this.sliderPosition++;
    this.sliderStop = this.sliderPosition + this.sliderJump;
  }

}
