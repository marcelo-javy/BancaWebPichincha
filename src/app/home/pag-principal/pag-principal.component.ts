import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.component.html',
  styleUrls: ['./pag-principal.component.scss']
})
export class PagPrincipalComponent implements OnInit {
  nstr: string = 'Hola';
  constructor() { }

  ngOnInit(): void {
  }

  onClickCard(){
    console.log("Click desde principal")
  }

}
