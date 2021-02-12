export class Larticulos {
    constructor(
        public idarticulo: number, 
        public nombrearticulo: string, 
        public descripcionarticulo:string,
    
    ){}
}

export class Linciso {
    constructor(
        public idinciso: number, 
        public nombreincisocorto: string,
        public descripcioninciso: string,
        public idarticulo: number,

    ){}
}

export class Lcausal {
    constructor(
        public idcausal: number, 
        public nombrecausalorto: string, 
        public descripcioncausal: string, 
        public idinciso: number,
   
    ){}
}

