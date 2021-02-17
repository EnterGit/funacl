import { Component, OnInit } from '@angular/core';
import { CountryI, CityI } from '../../../core/empresa/model.interface';
import { HttpClient } from '@angular/common/http';


import { DataService } from '../../../services/empresa/articulo/data.service.service';

import { Router } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBellSlash, faHandPaper, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt, faTh, faCalendar, faCalendarAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import * as $ from 'jquery';
import { FormsModule } from '@angular/forms';
//Modeo
import { Larticulos, Linciso, Lcausal } from './../../../core/empresa/comboempresa.model';
import { registroempleado } from '../../../core/empresa/registroempleado';
//Servicio
import { RegistroempleadoService } from '../../../services/empresa/registroempleado/registroempleado.service';
import { ComboempresaService } from '../../../services/parametros/comboempresa.service';
//Material
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { DialogoconfirmacionComponent } from '../../../dialogoconfirmacion/dialogoconfirmacion.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



@Component({
  selector: 'app-referirempleado',
  templateUrl: './referirempleado.component.html',
  styleUrls: ['./referirempleado.component.css']
})
export class ReferirempleadoComponent implements OnInit {



  //Articulos e Incisos
  public articulomodel: Larticulos[] = [new Larticulos(0, "prueba", "aaiiiii articulo")];
  public incisomodel: Linciso[] = [new Linciso(0, "prueba", "iiii", 0)];
  opcion1 = true;
  valor1 = null;

  public empleadoModel: registroempleado = new registroempleado('', '', '', '', '', '', '', '', '', '', '', "", "");

  formReferido: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: RegistroempleadoService,
    private articuloService: ComboempresaService,
    //Material
    private snackBar: MatSnackBar,
    private dialogo: MatDialog,
    private router: Router,
  ) {
    this.crearForm();
  }


  ngOnInit(): void {

    this.ListarArticulos();
  }


  crearForm() {
    this.formReferido = this.fb.group({
      rutempleado: ['', [Validators.required]],
      nombreempleado: ['', [Validators.required]],
      rutempresa: ['', [Validators.required]],
      nombreempresa: ['', [Validators.required]],
      fechaingreso: ['', [Validators.required]],
      fechatermino: ['', [Validators.required]],
      idarticulo: ['', [Validators.required]],
      nombrearticulo: ['', [Validators.required]],
      idinciso: ['', [Validators.required]],
      nombreinciso: ['', [Validators.required]],
      Observacion: ['', [Validators.required]],
      autorizacion: ['', [Validators.required]],
      recomienda: ['', [Validators.required]]
    })
  }


  ListarArticulos() {
    return this.articuloService.getListaArticulos().subscribe((articulomodel: Larticulos[]) => this.articulomodel = articulomodel);
  }

  onChangeinciso(value) {

    return this.articuloService.getListaIncisos(value).subscribe((incisomodel: Linciso[]) => this.incisomodel = incisomodel);
  }



  onSubmit() {
    console.log(this.empleadoModel);
    //this.service.addEvaluacionEmpleado(this.empleadoModel).subscribe();
    this.service.addEvaluacionEmpleado(this.empleadoModel).subscribe(() => {
      this.snackBar.open('Evaluacion Guardada Correctamente', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/accesoEmpresa/consultarempleado']);
      this.formReferido.reset();

    });


    // this.dialogo.open(DialogoconfirmacionComponent, {
    // data: `¿Realmente quieres eliminar ?`,
    // });
  }
}
