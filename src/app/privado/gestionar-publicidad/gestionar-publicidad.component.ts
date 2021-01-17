import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { onErrorResumeNext } from 'rxjs/operators';
import { onErrorResumeNextStatic } from 'rxjs/internal/operators/onErrorResumeNext';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-gestionar-publicidad',
  templateUrl: './gestionar-publicidad.component.html',
  styleUrls: ['./gestionar-publicidad.component.css']
})
export class GestionarPublicidadComponent implements OnInit {

  archivoSeleccionado: File = null;
  file = new FormControl('')
  file_data: any = ''
  imageSrc: string;

  titulo: string;
  imagenTitulo: string;
  curso: string;
  message: string;
  subirArchivo: string = null;

  stringifiedData: any;
  parsedJson: any;

  ip = "http://localhost:8080/funaWS/Upload/"

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) {
    this.titulo = "Publicar Anuncio";
    this.imagenTitulo = "https://www.sgtpropiedades.cl/wp-content/uploads/2018/09/publicagratis.jpg";
    this.curso = "OS-10";
  }


  ngOnInit(): void {
  }


  fileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.myForm.patchValue({
          fileSource: reader.result
        });
      }
    }


    const fileList: FileList = event.target.files;
    //check whether file is selected or not
    if (fileList.length > 0) {

      const file = fileList[0];
      //get file information such as name, size and type
      console.log('finfo', file.name, file.size, file.type);
      //max file size is 4 mb
      if ((file.size / 1048576) <= 4) {
        let formData = new FormData();
        let info = { id: 2, name: 'raja' }
        formData.append('file', file, file.name);
        formData.append('id', '2');
        formData.append('tz', new Date().toISOString())
        formData.append('update', '2')
        formData.append('info', JSON.stringify(info))
        this.file_data = formData

      } else {
        //this.snackBar.open('File size exceeds 4 MB. Please choose less than 4 MB','',{duration: 2000});
      }

    }
  }

  uploadFile() {

    console.log(this.file_data);
    this.http.post(this.ip + 'upload.php', this.file_data, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log("Progreso :" + (event.loaded / event.total) * 100 + "%");
        }
        else if (event.type === HttpEventType.Response) {
          console.log(event)
          console.log("With Parsed JSON :", event.body);

          console.log(event.body['message']);
          alert(event.body['message']);

          if (event.body['status'] == 0) {
            this.imageSrc = '';
            this.subirArchivo = '';
          }
        }
      });
  }


}
