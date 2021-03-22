import { ListEmpleos } from './../../../core/admin/empleos';
import { Globals } from './../../../globals';
import { ApiService } from './../../../services/login/api.service';
import { PubempleosService } from './../../../services/admin/pubempleos/pubempleos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Lparametros } from '../../../core/parametros/parametros';
import { Lregiones, Lcomuna } from '../../../core/parametros/regiones.model';
import { LisregionesService } from '../../../services/parametros/lisregiones.service';

@Component({
  selector: 'app-edit-empleo',
  templateUrl: './edit-empleo.component.html',
  styleUrls: ['./edit-empleo.component.css']
})
export class EditEmpleoComponent implements OnInit {

  submitted = false;
  formGestionaEmpleos: FormGroup;
  titulo: string;
  imagenTitulo: string;
  grupoParametros: number;

  public regionesModel: Lregiones[] = [new Lregiones(0, "prueba")];
  public comunaModel: Lcomuna[] = [new Lcomuna(0, "")];
  public parametroModel: Lparametros[] = [new Lparametros(0, "", 0)];
  public parametroTipoContrato: Lparametros[] = [new Lparametros(0, "", 0)];
  public parametroTurnos: Lparametros[] = [new Lparametros(0, "", 0)];
  
  public empleosModel: ListEmpleos = new ListEmpleos("", "", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "", "");

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private regionService: LisregionesService,
    private pubEmpleosService: PubempleosService,
    public apiservice: ApiService,
    public global: Globals,
    private ruta: ActivatedRoute,
    private cdRef:ChangeDetectorRef
  ) { 
    this.creaFormEmpleo();
  }

  ngAfterViewChecked()
{
  console.log( "! changement !" );
  
  this.cdRef.detectChanges();

  console.log(this.cdRef);
}

  ngOnInit(): void {
    this.titulo = "Editar Empleo";
    this.imagenTitulo = "https://pyme.emol.com/wp-content/uploads/2020/06/apoyo-al-empleo.jpg";
    this.obtenerRegiones();
    this.obtenerEduacacion();
    this.obtenerTipoContrato();
    this.obtenerTurnos();

    let idEmpleo = this.ruta.snapshot.paramMap.get("idEmpleo");
    this.pubEmpleosService.getOneEmpleo(idEmpleo)
    .subscribe((empleosModel: ListEmpleos) => {
      this.empleosModel = empleosModel

      this.onChangeComuna(this.empleosModel.region);
    })

 
  }

  creaFormEmpleo() {
    this.formGestionaEmpleos = this.fb.group({
      cargoEmpleo: ['', Validators.required],
      profesion: ['', Validators.required],
      vacantes: ['', Validators.required],
      empresa: ['', Validators.required],
      region: ['', Validators.required],
      comuna: ['', Validators.required],
      direccion: ['', Validators.required],
      fecPostulacion: ['', Validators.required],
      jornada: ['', Validators.required],
      sueldo: ['', Validators.required],
      educacion: ['', Validators.required],
      experiencia: ['', Validators.required],
      tipoContrato: ['', Validators.required],
      descEmpleo: ['', Validators.required]
    })
  }

  obtenerRegiones() {
    return this.regionService.getRegiones().subscribe((regionesModel: Lregiones[]) => this.regionesModel = regionesModel);
  }

  onChangeComuna(value) {
    return this.regionService.getComunas(value).subscribe((comunaModel: Lcomuna[]) => this.comunaModel = comunaModel);
  }

  obtenerEduacacion() {
    this.grupoParametros = 1;
    return this.regionService.getParametros(this.grupoParametros).subscribe((parametroModel: Lparametros[]) => this.parametroModel = parametroModel);
  }

  obtenerTipoContrato() {
    this.grupoParametros = 2;
    return this.regionService.getParametros(this.grupoParametros).subscribe((parametroTipoContrato: Lparametros[]) => this.parametroTipoContrato = parametroTipoContrato);
  }

  obtenerTurnos() {
    this.grupoParametros = 3;
    return this.regionService.getParametros(this.grupoParametros).subscribe((parametroTurnos: Lparametros[]) => this.parametroTurnos = parametroTurnos);
  }

  onSubmit() {

    console.log(this.formGestionaEmpleos);
    console.log(this.empleosModel);

    this.submitted = true;

    if (this.formGestionaEmpleos.valid) {
      this.pubEmpleosService.updateEmpleo(this.empleosModel).subscribe(() => {
        this.router.navigate(['/accesoAdmin/GestionarEmpleo/2']);
        this.formGestionaEmpleos.reset();
      })
    } else {
      alert("FAVOR COMPLETAR TODOS LOS CAMPOS ")
    }
  }

  volver() {
    this.router.navigate(['/accesoAdmin/GestionarEmpleo/2']);
  }

}
