import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{

  @Input() nombre: string=''
  @Input() sliderSize: string=''


  constructor(){}

  ngOnInit(): void {
    
  }
}
