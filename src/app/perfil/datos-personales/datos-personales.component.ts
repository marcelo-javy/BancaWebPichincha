import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit {

  nombre: String = 'Marcelo Javier Tapia Nicolalde'
  dateNow = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
