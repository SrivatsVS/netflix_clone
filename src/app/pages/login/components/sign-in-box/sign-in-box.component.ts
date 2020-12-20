import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-box',
  templateUrl: './sign-in-box.component.html',
  styleUrls: ['./sign-in-box.component.css']
})
export class SignInBoxComponent implements OnInit {
  userName = '';
  password = '';
  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }

  loginFunction()
  {
    if(this.userName== 'srivats' && this.password=='pass'){
      
      this._Router.navigateByUrl('/movies');
    }
    else
    {
      alert('login not successfull');
    }
  }

}
