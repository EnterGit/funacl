import { ApiService } from './services/login/api.service';
import { UserService } from './core/user.service';
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router, Params } from '@angular/router';
import { ApiuserService } from './services/apiuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;

  title = 'demo131';
  users: any[] = [];

  loginbtn: boolean;
  logoutbtn: boolean;


  constructor(
    protected apiuserService: ApiuserService,
    private router: Router
  ) { }

  ngOnInit() {

  }

}

