import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncriptarService {

  textoEncriptado: string;
  password: string;

  constructor() { }


  encriptarDatos(texto: string) {

    this.password = "funa";
    return CryptoJS.AES.encrypt(texto.trim(), this.password.trim()).toString();

    // console.log("ESTA ENCRIPTANDO");
    // console.log(this.textoEncriptado);

  }

  
  desencriptarDatos(texto: string) {

    this.password = "funa";
    return CryptoJS.AES.decrypt(texto.trim(), this.password.trim()).toString(CryptoJS.enc.Utf8);

    // console.log("ESTA ENCRIPTANDO");
    // console.log(this.textoEncriptado);

  }
}
