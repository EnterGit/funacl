export class Lcursos {
    constructor(
        public idcurso: number, 
        public nombrecurso: string, 
        public descripcioncurso: string, 
    ){}
}

export class Lcargo {
    constructor(
        public idcargo: number, 
        public nombrecargo: string,
        public descripcioncargo: string, 
    ){}
}

export class Lturnos {
    constructor(
        public idturno: number, 
        public nombreturno: string,
        public descripcionturno: string, 
    ){}
}

export class LSexo {
    constructor(
        public idSexo: number, 
        public nombreSezo: string,
        public descripcionturno: string, 
    ){}
}