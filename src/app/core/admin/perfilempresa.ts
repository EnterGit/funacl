export class PerfilEmpresa {
    constructor(
        public rutEmpresa: string, 
        public nomEmpresa: string, 
        public rutRepresentante: string, 
        public nomRepresentante: string, 
        public dirEmpresa: string, 
        public telEmpresa: string, 
        public emailEmpresa: string, 
        public passEmpresa: string, 
        public estEmpresa: string,
        public idEmpresa?: string,
    ){}
}

export class ExisteRutEmpresa{
    constructor(
        public existeRut: string,
        public rutEmpresa: string,
    ){}
}