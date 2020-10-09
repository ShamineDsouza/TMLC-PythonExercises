import { Component } from '@angular/core';

//import { import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'] ,
}
)

export class PropertyCardComponent  {
 Property : any = {
    "Id" : 1,
    "Name": "Birla",
    "Type" : "House",
    "Price": 12000

  }
}
