import { Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector:'login',
    templateUrl:'./login.html',
    styleUrls:['./login.css']
})
export class LoginComponent{

    constructor(private _router:Router){}

    logar(){
        this._router.navigate(['admin']);
    }
}