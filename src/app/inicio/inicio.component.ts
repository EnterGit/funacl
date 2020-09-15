import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private db: AngularFirestore) { 
    // this.items = db.collection('items').valueChanges();
  }

  ngOnInit(): void {
    // this.db.collection('items').valueChanges()
    // .subscribe(val => console.log(val));
    // this.db.collection('items',ref => ref.where('name','==','test2')).subscribe(Response => console.log(Response));


  }

}
