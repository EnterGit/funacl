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
        public empresa: string,
        public imagenUrl: string,
        public idpublicidad?: number,
    ) { }
}


export class PostPublicidad {
    constructor(
        public rutEmpresa: string,
        public NombreEmpresa: string,
        public nomContacto: string,
        public telefonoContacto: string,
        public fecIniPub: string,
        public fecTerPub: string,
        public email: string,
        public subirArchivo: string,
        public descPublicidad: string
    ){}
}

