export class Empleo {
    constructor(
        public empresa: string,
        public cargo: string,
        public detalle: string,
        public fecInicio: string,
        public fecTermino: string,
        public idEmpleo?: number,
    ) { }

}

export class Publicidad {
    constructor(
        public nomEmpresa: string,
        public imagenUrl: string,
        public idpublicidad?: number,
    ) { }
}


export class PostPublicidad {
    constructor(
        public rutEmpresa: string,
        public nomEmpresa: string,
        public nomContacto: string,
        public telefonoContacto: string,
        public fecIniPub: string,
        public fecTerPub: string,
        public email: string,
        public imagenUrl: string,
        public descPublicidad: string,
        public idpublicidad?: number,
    ){}
}


export class ListPublicidad {
    constructor(
        public rutEmpresa: string,
        public nomEmpresa: string,
        public nomContacto: string,
        public telefonoContacto: string,
        public fecIniPub: string,
        public fecTerPub: string,
        public email: string,
        public imagenUrl: string,
        public descPublicidad: string,
        public idpublicidad?: number,
    ){}
}


export class PostEmpleos {
    constructor(
      public cargoEmpleo: string,
      public profesion: string,
      public vacantes: string,
      public empresa: string,
      public region: string,
      public comuna: string,
      public direccion: string,
      public fecPostulacion: string,
      public jornada: string,
      public sueldo: string,
      public educacion: string,
      public experiencia: string,
      public tipoContrato: string,
      public descEmpleo: string,
      public idEmpleo?: string
    ){ }
}