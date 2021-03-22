import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-cifrar',
  templateUrl: './cifrar.component.html',
  styleUrls: ['./cifrar.component.css']
})
export class CifrarComponent implements OnInit {


  enctexto: string;
  destexto: string;
  encPass: string;
  desPass: string;
  textoEncriptado: string;
  textoDesencriptado: string;

  constructor() { }

  convertirTexto(conversion: string) {

    if (conversion === 'encriptar') {
      this.textoEncriptado = CryptoJS.AES.encrypt(this.enctexto.trim(), this.encPass.trim()).toString();
    } else {
      this.textoDesencriptado = CryptoJS.AES.decrypt(this.destexto.trim(), this.desPass.trim()).toString(CryptoJS.enc.Utf8);
    }

    console.log(this.textoEncriptado);
    console.log(this.textoDesencriptado);
  }


  convertirTexto2(texto: string, password: string) {

    this.textoEncriptado = CryptoJS.AES.encrypt(texto.trim(), password.trim()).toString();

    console.log("ESTA ENCRIPTANDO");
    console.log(this.textoEncriptado);

  }

  ngOnInit(): void {
    this.convertirTexto;

  }

}
