import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DatabaseService } from './services/database.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;


  constructor(private db: DatabaseService) {
    // this.items = db.collection('items').valueChanges();
  }

  // search() {
  //   this.db.col$('items', ref => this.querys(ref, true)).subscribe(response => console.log(response));
  // }

  // querys(ref, value: boolean) {
  //   var user = firebase.auth().currentUser;
  //   if (user) {
  //     if (value)
  //       return ref.where('id', '==', user.uid);
  //     else
  //       return ref.where('name', '==', 'Test 2');
  //   } else {
  //     return ref.where('name', '==', 'Test 2');
  //   }
  // }

  delete(){
    this.db.delete('items/W9He020gfHLtidH3F1s8')
    .then(() => console.log('Eliminado'))
    .catch(err => console.log(err))
  }

}
