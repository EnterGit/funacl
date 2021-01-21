import { Injectable } from '@angular/core';
import {CountryI,CityI} from  '../../core/empresa/model.interface';

import { retry } from 'rxjs/operators';


@Injectable()
export class DataService {
private countries: CountryI[]=[
  {
    id:159,
    name:'Articulo 159'
  },
  {
    id:160,
    name:'Articulo 160'
  },
  {
    id:161,
    name:'Articulo 161'
  },
  {
    id:163,
    name:'Articulo 163 bis'
  }
];
private  cities: CityI[]=[
  {
    id:1,
   countryId:159,
    name:'Mutuo acuerdo de las partes',
    
  },
  {
    id:2,
   countryId:159,
    name:' Renuncia del trabajador',
    
  },
  {
    id:3,
   countryId:159,
    name:'Muerte del trabajador',
    
  }
  ,
  {
    id:4,
   countryId:159,
    name:' Vencimiento del contrato',
    
  },
  {
    id:5,
   countryId:159,
    name:'Conclusión del trabajo o servicio',
    
  },
  {
    id:6,
   countryId:159,
    name:'Caso fortuito o fuerza mayo',
    
  },


  {
    id:7,
   countryId:160,
    name:'conductas indebidas grave',
    
  }
  ,
  {
    id:8,
   countryId:160,
    name:'Negociaciones prohibidas ',
    
  },
  {
    id:9,
   countryId:160,
    name:'No concurrencia del trabajador ',
    
  },
  {
    id:10,
   countryId:160,
    name:'Abandono del trabajo',
    
  },
  {
    id:11,
    countryId:160,
    name:' Actos, omisiones o imprudencias temerarias',
  },
  {
    id:12,
    countryId:160,
    name:' El perjuicio material causado intencionalmente',
  },
  {
    id:13,
    countryId:160,
    name:'Incumplimiento grave de las obligaciones',
  },

  {
    id:14,
   countryId:161,
    name:'necesidades de la empresa',
    
  },
  {
    id:15,
    countryId:163,
    name:' haber sido sometido el empleador, mediante resolución judicia',
  },
  
  
];

getCountries():CountryI[]{
  return this.countries;
}
getCities():CityI[]{
  return this.cities;
}

  constructor() { }
}
