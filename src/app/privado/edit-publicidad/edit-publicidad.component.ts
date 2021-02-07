import { PostPublicidad } from './../../core/empleos';
import { Publicidad } from './../../core/empleos';
import { EmpleosService } from './../../services/publicidad/empleos.service';

import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-publicidad',
  templateUrl: './edit-publicidad.component.html',
  styleUrls: ['./edit-publicidad.component.css']
})
export class EditPublicidadComponent implements OnInit {


  formGestionPublicidad: FormGroup;

  file = new FormControl('')
  file_data: any = ''
  imageSrc: string;
  imageSrc_2: string;
  titulo: string;
  imagenTitulo: string;
  imagenUrl: string = null;
  mostrarPublicidad: boolean;
  mostrarFormPublicidad: boolean;
  baseUrl = environment.baseUrl + '/Upload/';


  // public publicidades: Publicidad = new Publicidad("1", "1",1);

 

  public publicidadModel: PostPublicidad = new PostPublicidad("", "", "", "", "", "", "", "", "");


  constructor(
    private http: HttpClient,
    private ruta: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private empleoService: EmpleosService
  ) {
    // this.seteaBloques();
    this.createForm();
  }


  ngOnInit(): void {
    this.titulo = "Editar Publicidad";
    this.imagenTitulo = "https://www.sgtpropiedades.cl/wp-content/uploads/2018/09/publicagratis.jpg";

    let idpublicidad = this.ruta.snapshot.paramMap.get("id");
    this.empleoService.getEmpleo(idpublicidad)
    .subscribe((publicidadModel: PostPublicidad) => this.publicidadModel = publicidadModel)
  }


  createForm() {
    this.formGestionPublicidad = this.fb.group({
      rutEmpresa: ['', Validators.required],
      nomEmpresa: ['', Validators.required],
      nomContacto: ['', Validators.required],
      telefonoContacto: ['', Validators.required],
      fecIniPub: ['', Validators.required],
      fecTerPub: ['', Validators.required],
      email: ['', Validators.required],
      imagenUrl: ['', Validators.required],
      descPublicidad: ['', Validators.required]
    })
  }

  onSubmit() {

    console.log(this.publicidadModel.imagenUrl);

    this.empleoService.updatePublicidad(this.publicidadModel).subscribe(() => {
      this.volver();
    });

    // console.log(this.publicidadModel);
    // this.empleoService.addEmpleo(this.publicidadModel).subscribe(() => {
    //   this.router.navigate(['/accesoAdmin/GestionarPublicidad/1']);
    // })
  }

  volver() {
    this.router.navigate(['/accesoAdmin/GestionarPublicidad/2']);
  }


  editar() {
  }


  fileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        // this.myForm.patchValue({
        //   fileSource: reader.result
        // });
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
    this.http.post(this.baseUrl + 'upload.php', this.file_data, {
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
            this.imagenUrl = '';
          }
        }
      });
  }


}

