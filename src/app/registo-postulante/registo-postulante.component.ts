import { PostulantesService } from './../services/admin/postulantes/postulantes.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Lparametros } from './../core/parametros/parametros';
import { PostulantesModel, ExisteRutPostulante } from './../core/publico/postulantes.model';
import { Lregiones, Lcomuna } from './../core/parametros/regiones.model';
import { LisregionesService } from './../services/parametros/lisregiones.service';


import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RutService } from 'rut-chileno';

import { confirmedValidator } from './../confirmed.validator'
import { EncriptarService } from './../services/seguridad/encriptar.service';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-registo-postulante',
  templateUrl: './registo-postulante.component.html',
  styleUrls: ['./registo-postulante.component.css']
})
export class RegistoPostulanteComponent implements OnInit {

  titulo: string;
  imagen: string;
  curso: string;

  formRegPostulantes: FormGroup;
  grupoParametros: number;

  public regionesModel: Lregiones[] = [new Lregiones(0, "prueba")];
  public comunaModel: Lcomuna[] = [new Lcomuna(0, "")];

  public postulanteModel: PostulantesModel = new PostulantesModel("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
  public parametroNacionalidad: Lparametros[] = [new Lparametros(0, "", 0)];
  public parametroEstadoCivil: Lparametros[] = [new Lparametros(0, "", 0)];
  public exiteRutPostulante: ExisteRutPostulante = new ExisteRutPostulante("", "");


  constructor(
    private http: HttpClient,
    private ruta: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private regionService: LisregionesService,
    private rutService: RutService,
    private encriptar: EncriptarService,
    private postulanteService: PostulantesService

  ) {
    this.titulo = "Formulario de Registro Postulante";
    this.imagen = "https://media.istockphoto.com/vectors/online-registration-form-vector-id1199278357";
    this.curso = "OS-10";

    this.creaFormPostulantes();
  }

  ngOnInit(): void {

    $(document).ready(function () {
      $("input#rut").rut({ validateOn: 'blur' }).on('rutInvalido', function () {
        $(".rutError").addClass("alert alert-danger")
        $(".rutError").text("Rut inválido");
        $('input#rut').val("");

      }).on('rutValido', function () {
        $(".rutError").removeClass("alert alert-danger ")
        $(".rutError").empty();
      });

      $('#mostrar').click(function () {
        //Comprobamos que la cadena NO esté vacía.
        if ($(this).hasClass('mdi-eye') && ($("#passEmpresa").val() != "")) {
          $('#passEmpresa').removeAttr('type');
          $('#mostrar').addClass('mdi-eye-off').removeClass('mdi-eye');
          $('.pwdtxt').html("Ocultar contraseña");
        }
        else {
          $('#passEmpresa').attr('type', 'password');
          $('#mostrar').addClass('mdi-eye').removeClass('mdi-eye-off');
          $('.pwdtxt').html("Mostrar contraseña");
        }
      });

    })

    this.obtenerRegiones();
    this.obtenerNacionalidad();
    this.obtenerEstadoCivil();


  }

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  creaFormPostulantes() {
    this.formRegPostulantes = this.fb.group({
      rut: ['', [Validators.required, Validators.minLength(7)]],
      nombre: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      region: ['', [Validators.required]],
      comuna: ['', [Validators.required]],
      calle: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      depto: [''],
      passEmpresa: ['', [Validators.required]],
      passEmpresa1: ['', [Validators.required]],


      // educacion: ['', [Validators.required]],
      // cursoAcreditacion: ['', [Validators.required]],
      // fechaAcreditacion: ['', [Validators.required]],
      // nivelComputacion: ['', [Validators.required]],
      // turnos: ['', [Validators.required]],
      // experiencia: ['', [Validators.required]],

    },
      {
        validator: confirmedValidator('passEmpresa', 'passEmpresa1')
      }
    );
  }

  obtenerRegiones() {
    return this.regionService.getRegiones().subscribe((regionesModel: Lregiones[]) => this.regionesModel = regionesModel);
  }

  onChangeComuna(value) {
    return this.regionService.getComunas(value).subscribe((comunaModel: Lcomuna[]) => this.comunaModel = comunaModel);
  }

  obtenerNacionalidad() {
    this.grupoParametros = 9;
    return this.regionService.getParametros(this.grupoParametros).subscribe((parametroNacionalidad: Lparametros[]) => this.parametroNacionalidad = parametroNacionalidad);
  }

  obtenerEstadoCivil() {
    this.grupoParametros = 8;
    return this.regionService.getParametros(this.grupoParametros).subscribe((parametroEstadoCivil: Lparametros[]) => this.parametroEstadoCivil = parametroEstadoCivil);
  }

  onSubmit() {
    console.log(this.formRegPostulantes);
    console.log(this.postulanteModel);
    // this.publicidadModel.rutEmpresa = String(this.rutService.getRutChile(2, this.publicidadModel.rutEmpresa));
    // console.log(this.publicidadModel.rutEmpresa);
    if (this.formRegPostulantes.valid) {
      console.log(this.encriptar.encriptarDatos(this.postulanteModel.passEmpresa));
     
      this.postulanteModel.passEmpresa = this.encriptar.encriptarDatos(this.postulanteModel.passEmpresa);
      this.postulanteModel.rut = String(this.rutService.getRutChile(2, this.postulanteModel.rut));

      this.postulanteService.addPostulantes(this.postulanteModel).subscribe(event => {
        if (event.type === HttpEventType.Response) {
          console.log("With Parsed JSON :", event.body);
          if (event.body['resultado'] === false) {
            alert("ERROR INGRESO");
          }
        }
        this.router.navigate(['/registroPostulante']);
        this.formRegPostulantes.reset();
      })
    } else {
      alert("FAVOR COMPLETAR TODOS LOS CAMPOS ")
    }
  }

  validaRut(rut) {
    rut = String(this.rutService.getRutChile(2, rut));

    return this.postulanteService.verificaRutPostulante(rut).subscribe((exiteRutPostulante: ExisteRutPostulante) => {
      this.exiteRutPostulante = exiteRutPostulante
      console.log(exiteRutPostulante.existeRut);
      console.log(exiteRutPostulante.rutPostulante);

      if (exiteRutPostulante.rutPostulante) {
        alert("USUARIO YA EXISTE EN EL SISTEMA");
        this.postulanteModel.rut = null;
      }
    })
  }

}
