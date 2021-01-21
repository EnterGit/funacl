export class registroempleado {
    rut: string;
    nombreCompleto: string;
    rutEmpresa: string;
    nombreEmpresa: string;
    fechaIngreso: string;
    fechaFin: string;
    idArticulo: string;
    nombreArticulo: string;
    idInciso: string;
    nombreInciso: string;
    observacion: string;
    autorizacion: boolean;
    recomienda: boolean;
   
    constructor(){
      this.rut = "";
      this.nombreCompleto = "";
      this.rutEmpresa="";
      this.nombreEmpresa ="";
      this.fechaIngreso = "";
      this.fechaFin="";
      this.idArticulo = "";
      this.nombreArticulo = "";
      this.idInciso = "";
      this.nombreInciso = "";
      this.observacion = "";
      this.autorizacion = false;
      this.recomienda = false;
}
}
