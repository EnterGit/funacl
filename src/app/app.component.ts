import { UserService } from './core/user.service';
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DatabaseService } from './services/database.service';
import * as firebase from 'firebase/app';

import { ApiuserService } from './services/apiuser.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;

  title = 'demo131';
  users: any[] = [];


  constructor(
    private db: DatabaseService,
    protected ApiuserService: ApiuserService
    ) {
   
  }

ngOnInit() {
  this.ApiuserService.getUsers()
  .subscribe(
    (data) => {
      console.log(data)
      console.log('22222');
      this.users = data['autos'];
    },
    (error) => {
      console.log(error);
    }
  )
}


  delete(){
    this.db.delete('items/W9He020gfHLtidH3F1s8')
    .then(() => console.log('Eliminado'))
    .catch(err => console.log(err))
  }

  getRut(rut: string): void {
    console.log(rut);
  }



}
