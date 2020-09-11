export class FirebaseUserModel {
    image: string;
    name: string;
    provider: string;
    direccion: string;
    empresa: string;
    uid: string;

  
    constructor(){
      this.image = "";
      this.name = "";
      this.provider = "";
      this.direccion = "";
      this.empresa = "";
      this.uid = "";
    }
  }