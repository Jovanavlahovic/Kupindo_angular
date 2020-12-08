import { Component, Input, OnInit } from '@angular/core';
import { Auction } from 'front-end-start/src/app/auctions/model/auction';

@Component({
  selector: 'app-lista-oglasa',
  templateUrl: './lista-oglasa.component.html',
  styleUrls: ['./lista-oglasa.component.css']
})
export class ListaOglasaComponent implements OnInit {
@Input() auctions: Auction[];

  constructor() { }

  ngOnInit(): void {
  }

}
