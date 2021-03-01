import { IngempresaService } from './../../../services/admin/Ingempresa/ingempresa.service';
import { PerfilEmpresa, ExisteRutEmpresa } from './../../../core/admin/perfilempresa';
import { Component, OnInit, Input } from '@angular/core';
// import { AuthService } from '../core/auth.service'

import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ConexionService } from './../../../services/conexion.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';


declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public perfilempresaModel: PerfilEmpresa = new PerfilEmpresa("", "", "", "", "", "", "", "", "", "");
  public listadoEmpresa: PerfilEmpresa[] = [new PerfilEmpresa("", "", "", "", "", "", "", "", "", "")];

  public exiteRutEmpresa: ExisteRutEmpresa = new ExisteRutEmpresa("", "");

  formRegEmpresa: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  titulo: string;
  imagen: string;
  curso: string;

  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;

  listarRegistro: boolean;
  mostrarFormEmpleo: boolean;

  rutBuscar: string;

  item: any = {
    name: '',
    id: ''
  }

  eliminaEmpresa: any = {
    idEmpresa: ''
  }

  constructor(
    // public authService: AuthService,
    public http: HttpClient,
    private ruta: ActivatedRoute,
    private ingempresaService: IngempresaService,
    private router: Router,
    private fb: FormBuilder,
    private service: ConexionService,
    private afsAuth: AngularFireAuth
  ) {

    this.titulo = "Formulario de Registro Empresa";
    this.imagen = "https://media.istockphoto.com/vectors/online-registration-form-vector-id1199278357";
    this.curso = "OS-10";

    this.createForm();
  }


  ngOnInit(): void {

    $(document).ready(function () {
      $("input#rutEmpresa").rut({}).on('rutInvalido', function () {
        $(".rutErrorEmp").addClass("alert alert-danger")
        $(".rutErrorEmp").text("Rut inválido");
        $('input#rutEmpresa').val("");

      }).on('rutValido', function () {
        $(".rutErrorEmp").removeClass("alert alert-danger ")
        $(".rutErrorEmp").empty();
      });

      $("input#rutRepresentante").rut({ formatOn: 'keyup', validateOn: 'keyup' }).on('rutInvalido', function () {
        $(".rutErrorRep").addClass("alert alert-danger")
        $(".rutErrorRep").text("Rut inválido");
      }).on('rutValido', function () {
        $(".rutErrorRep").removeClass("alert alert-danger ")
        $(".rutErrorRep").empty();
      });
    })

    this.seteaBloques();
    // this.validaRut();

  }

  createForm() {
    this.formRegEmpresa = this.fb.group({
      rutEmpresa: ['', Validators.required],
      rutEmpresa2: ['', Validators.required],
      nomEmpresa: ['', Validators.required],
      rutRepresentante: ['', Validators.required],
      nomRepresentante: ['', Validators.required],
      dirEmpresa: ['', Validators.required],
      telEmpresa: ['', Validators.required],
      passEmpresa: ['', Validators.required],
      passEmpresa1: ['', Validators.required],
      emailEmpresa: ['', Validators.required]
      // password: ['', Validators.required],
      // idUsuario: [''],
      // name: [''],
      // direccion: [''],
      // nombre: ['']
    });
  }


  onSubmit() {
    if (this.formRegEmpresa.valid) {
      this.perfilempresaModel.passEmpresa = 'holahola';

      this.ingempresaService.addEmpresa(this.perfilempresaModel).subscribe(event => {
        if (event.type === HttpEventType.Response) {
          console.log("With Parsed JSON :", event.body);
          if (event.body['resultado'] === false) {
            alert("ERROR INGRESO");
          }
        }
        this.router.navigate(['/accesoAdmin/RegistrarEmpresa']);
        // this.formRegEmpresa.reset();
      })
    }
    else {
      alert("FAVOR COMPLETAR TODOS LOS CAMPOS ")
    }
  }


  validaRut(rut) {
    return this.ingempresaService.verificaRutEmpresa(rut).subscribe((exiteRutEmpresa: ExisteRutEmpresa) => {
      this.exiteRutEmpresa = exiteRutEmpresa

      console.log(exiteRutEmpresa.existeRut);
      console.log(exiteRutEmpresa.rutEmpresa);

      if (exiteRutEmpresa.existeRut === "0") {

      } else {
        alert("RUT YA EXISTE EN EL SISTEMA");
        this.perfilempresaModel.rutEmpresa = null;
      }
    })
  }



  listadoEmpresas() {
    return this.ingempresaService.listadoEmpresa().subscribe((listadoEmpresa: PerfilEmpresa[]) => this.listadoEmpresa = listadoEmpresa);
  }


  deleteEmpresa(Item) {
    this.ingempresaService
      .deleteEmpresa(Item)
      .subscribe(() => {
        this.listadoEmpresas();
      });

    // console.log("REGISTRO ELIMINADO " + Item);
  }

  editarEmpresa(idEmpresa) {
    this.eliminaEmpresa = idEmpresa;
    console.log(this.eliminaEmpresa);
  }



  onLogout() {
    this.afsAuth.auth.signOut();
  }


  seteaBloques() {
    this.ruta.params.subscribe(params => {
      switch (params['id']) {
        case '1': {
          this.listarRegistro = false;
          this.mostrarFormEmpleo = true;
          break;
        }
        case '2': {
          this.listarRegistro = true;
          this.mostrarFormEmpleo = false;
          this.listadoEmpresas();
          break;
        }
        default: {
          this.router.navigate(['/accesoAdmin']);
          break;
        }
      }
    })
  }

}