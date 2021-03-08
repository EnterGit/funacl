export class PostulantesModel {
   constructor(
      public rut: string,
      public sexo: string,
      public nombreCompleto: string,
      public fechaNacimiento: string,
      public calle: string,
      public numero: string,
      public depto: string,
      public region: string,
      public comuna: string,
      public telefono: string,
      public celular: string,
      public educacion: string,
      public cursoAcreditacion: string,
      public fechaAcreditacion: string,
      public experiencia: string,
      public especialidad: string,
      public nivelComputacion: string,
      public turnos: string,
      public passEmpresa: string,
      public nacionalidad: string,
      public estadoCivil: string,
      public email: string

   ) {}
}


export class ExisteRutPostulante{
   constructor(
       public existeRut: string,
       public rutPostulante: string,
   ){}
}

