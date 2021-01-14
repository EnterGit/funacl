export class Empleo {
    constructor(
        public empresa: string,
        public cargo: string,
        public detalle: string,
        public fecInicio : string,
        public fecTermino : string,
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