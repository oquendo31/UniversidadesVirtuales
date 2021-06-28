import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Uni Nacional ', weight: 5805078, symbol: 'Cra 80 Nro 79-65'},
  {position: 2, name: 'Uni.Antioquia', weight: 4569874, symbol: 'Cra 80 Nro 79-65'},
  {position: 3, name: 'Esumer', weight: 6547895, symbol: 'Cra 80 Nro 79-65'},
  {position: 4, name: 'Poli', weight: 4444447, symbol: 'Cra 80 Nro 79-65'},
  {position: 5, name: 'Cesde', weight: 5689857, symbol: 'Cra 80 Nro 79-65'},
  {position: 6, name: 'Luis Amigó', weight: 5478521, symbol: 'Cra 80 Nro 79-65'},
  {position: 7, name: 'Tecnologico', weight: 6584758, symbol: 'Cra 80 Nro 79-65'},
  {position: 8, name: 'Itm', weight: 5478547, symbol: 'Cra 80 Nro 79-65'},
  {position: 9, name: 'Minuto de Dios', weight: 1547854, symbol: 'Cra 80 Nro 79-65'},
  {position: 10, name: 'Bolivariana', weight: 5145684, symbol: 'Cra 80 Nro 79-65'},
];

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
