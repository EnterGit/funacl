import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogoconfirmacion',
  templateUrl: './dialogoconfirmacion.component.html',
  styleUrls: ['./dialogoconfirmacion.component.css']
})
export class DialogoconfirmacionComponent implements OnInit {


  constructor(
    public dialogo: MatDialogRef<DialogoconfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }

  ngOnInit(): void {
  }

}
