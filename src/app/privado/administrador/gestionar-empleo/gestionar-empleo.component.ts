import { Globals } from './../../../globals';
import { ApiService } from './../../../services/login/api.service';
import { PubempleosService } from '../../../services/admin/pubempleos/pubempleos.service';
import { Lparametros } from '../../../core/parametros/parametros';
import { PostEmpleos } from '../../../core/admin/empleos';
import { Lregiones, Lcomuna } from '../../../core/parametros/regiones.model';
import { LisregionesService } from '../../../services/parametros/lisregiones.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faCoffee, faTrash, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gestionar-empleo',
  templateUrl: './gestionar-empleo.component.html',
  styleUrls: ['./gestionar-empleo.component.css']
})
export class GestionarEmpleoComponent implements OnInit {

  titulo: string;
  imagenTitulo: string;
  curso: string;
  formGestionaEmpleos: FormGroup;

  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;

  grupoParametros: number;

  listarRegistro: boolean;
  mostrarFormEmpleo: boolean;

  public regionesModel: Lregiones[] = [new Lregiones(0, "prueba")];
  public comunaModel: Lcomuna[] = [new Lcomuna(0, "")];
  public parametroModel: Lparametros[] = [new Lparametros(0, "", 0)];
  public parametroTipoContrato: Lparametros[] = [new Lparametros(0, "", 0)];
  public parametroTurnos: Lparametros[] = [new Lparametros(0, "", 0)];
  
  public empleosModel: PostEmpleos = new PostEmpleos("", "", "", "", "", "", "", "", "", "", "", "", "", "");
  public listadoEmpleo: PostEmpleos[] = [new PostEmpleos("", "", "", "", "", "", "", "", "", "", "", "", "", "")];



  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private regionService: LisregionesService,
    private pubEmpleosService: PubempleosService,
    public apiservice: ApiService,
    public global: Globals,
    private ruta: ActivatedRoute
  ) {
    this.creaFormEmpleo();

  }

  ngOnInit(): void {
    this.titulo = "Gestión Empleo";
    this.imagenTitulo = "https://pyme.emol.com/wp-content/uploads/2020/06/apoyo-al-empleo.jpg";
    this.curso = "OS-10";
    this.obtenerRegiones();
    this.obtenerEduacacion();
    this.obtenerTipoContrato();
    this.obtenerTurnos();

    this.seteaBloques();

    console.log("PRUEBAAA");
    console.log(this.global.perfil);
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
    if (this.formGestionaEmpleos.valid) {
      this.pubEmpleosService.addEmpleos(this.empleosModel).subscribe(() => {
        this.router.navigate(['/accesoAdmin/GestionarEmpleo']);
        // this.formGestionaEmpleos.reset();
      })
    } else {
      alert("FAVOR COMPLETAR TODOS LOS CAMPOS ")
    }
  }


  listadoEmpleos() {
    return this.pubEmpleosService.listadoEmpleos().subscribe((listadoEmpleo: PostEmpleos[]) => {
      this.listadoEmpleo = listadoEmpleo

    });
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
          this.listadoEmpleos();
          break;
        }
        default: {
          this.router.navigate(['/accesoAdmin']);
          break;
        }
      }
    })
  }

  private nombreUsuario(nameuser: string): void {

    console.log("PASO2");
    console.log(nameuser);

  }

}


