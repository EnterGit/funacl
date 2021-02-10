import { Component, OnInit } from '@angular/core';
import { CountryI, CityI } from '../../../core/empresa/model.interface';
import { registroempleado } from '../../../core/empresa/registroempleado';
import { RegistroempleadoService } from '../../../services/empresa/registroempleado/registroempleado.service';
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
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogoconfirmacionComponent } from '../../../dialogoconfirmacion/dialogoconfirmacion.component';

@Component({
  selector: 'app-referirempleado',
  templateUrl: './referirempleado.component.html',
  styleUrls: ['./referirempleado.component.css']
})
export class ReferirempleadoComponent implements OnInit {

  public empleadoModel: registroempleado = new registroempleado('', '', '', '', '', '', '', '', '', '', '', "", "");

  formReferido: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: RegistroempleadoService,
    private snackBar: MatSnackBar,
    private dialogo: MatDialog
  ) {
    this.crearForm();
  }



  ngOnInit(): void { }

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
      recomienda: ['', [Validators.required]],
    })
  }

  onSubmit() {
    console.log(this.empleadoModel);
    //this.service.addEvaluacionEmpleado(this.empleadoModel).subscribe();
    this.service.addEvaluacionEmpleado(this.empleadoModel).subscribe(() => {
      this.snackBar.open('Evaluacion Guardada Correctamente', undefined, {
        duration: 1500,
      });
      //this.router.navigate(['/mascotas']);
    });

    // this.dialogo.open(DialogoconfirmacionComponent, {
    // data: `¿Realmente quieres eliminar ?`,
    // });
  }
}
