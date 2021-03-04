import { Component, OnInit, Input } from '@angular/core';
import { PerfilEmpresa, ExisteRutEmpresa } from './../../../core/admin/perfilempresa';

import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ConexionService } from './../../../services/conexion.service';
import { IngempresaService } from './../../../services/admin/Ingempresa/ingempresa.service';

import { faCoffee, faTrash, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { RutService } from 'rut-chileno'

import * as $ from 'jquery';


declare var $: any;
declare var jQuery: any;


@Component({
  selector: 'app-edit-registro',
  templateUrl: './edit-registro.component.html',
  styleUrls: ['./edit-registro.component.css']
})
export class EditRegistroComponent implements OnInit {

  submitted = false;
  titulo: string;
  imagen: string;
  curso: string;

  public perfilempresaModel: PerfilEmpresa = new PerfilEmpresa("", "", "", "", "", "", "", "", "", "");
  public exiteRutEmpresa: ExisteRutEmpresa = new ExisteRutEmpresa("", "");
  formRegEmpresa: FormGroup;

  constructor(
    public http: HttpClient,
    private ruta: ActivatedRoute,
    private ingempresaService: IngempresaService,
    private router: Router,
    private fb: FormBuilder,
    private rutService: RutService
  ) {
    this.createForm();
  }

  ngOnInit(): void {

    this.titulo = "Editar Registro Empresa";
    this.imagen = "https://media.istockphoto.com/vectors/online-registration-form-vector-id1199278357";

    $("input#rutEmpresa").rut({ validateOn: 'blur' }).on('rutInvalido', function () {
      $(".rutErrorEmp").addClass("alert alert-danger")
      $(".rutErrorEmp").text("Rut inválido");
      $('input#rutEmpresa').val("");

    }).on('rutValido', function () {
      $(".rutErrorEmp").removeClass("alert alert-danger ")
      $(".rutErrorEmp").empty();
    });

    $("input#rutRepresentante").rut({ validateOn: 'blur' }).on('rutInvalido', function () {
      $(".rutErrorRep").addClass("alert alert-danger")
      $(".rutErrorRep").text("Rut inválido");
    }).on('rutValido', function () {
      $(".rutErrorRep").removeClass("alert alert-danger ")
      $(".rutErrorRep").empty();
    });


    let idRegistro = this.ruta.snapshot.paramMap.get("idRegistro");
    console.log(idRegistro)
    this.ingempresaService.getEmpresa(idRegistro)
      .subscribe((perfilempresaModel: PerfilEmpresa) => this.perfilempresaModel = perfilempresaModel)
  }


  createForm() {
    this.formRegEmpresa = this.fb.group({
      rutEmpresa: ['', Validators.required],
      nomEmpresa: ['', Validators.required],
      rutRepresentante: ['', Validators.required],
      nomRepresentante: ['', Validators.required],
      dirEmpresa: ['', Validators.required],
      telEmpresa: ['', Validators.required],
      passEmpresa: ['', Validators.required],
      passEmpresa1: ['', Validators.required],
      emailEmpresa: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formRegEmpresa);

    this.submitted = true;

    if (this.formRegEmpresa.valid) {
      this.perfilempresaModel.rutEmpresa = String(this.rutService.getRutChile(2, this.perfilempresaModel.rutEmpresa));
      this.perfilempresaModel.rutRepresentante = String(this.rutService.getRutChile(2, this.perfilempresaModel.rutRepresentante));

      this.ingempresaService.updateEmpresa(this.perfilempresaModel).subscribe(() => {
        this.volver();
      });

    } else {
      alert("FAVOR COMPLETAR TODOS LOS CAMPOS ");
      return;
    }
  }

  volver() {
    this.router.navigate(['/accesoAdmin/RegistrarEmpresa/2']);
  }

  validaRut(rut) {
    return this.ingempresaService.verificaRutEmpresa(rut).subscribe((exiteRutEmpresa: ExisteRutEmpresa) => {
      this.exiteRutEmpresa = exiteRutEmpresa
      // console.log(exiteRutEmpresa.existeRut);
      // console.log(exiteRutEmpresa.rutEmpresa);
      if (exiteRutEmpresa.rutEmpresa) {
        alert("USUARIO YA EXISTE EN EL SISTEMA");
        this.perfilempresaModel.rutEmpresa = null;
      }
    })
  }


}
