import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { CustomValidators } from '../../../services/validacoes/custom-validators';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

private usuario: AbstractControl;
    private senha: AbstractControl;
    loginForm: FormGroup;

    constructor(
        private _router: Router,
        public fb: FormBuilder) {

        this.loginForm = fb.group({
            'usuario': [
                '',
                Validators.compose([Validators.required, CustomValidators.usernameValidator])
            ],

            'senha': [
                '',
                Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16),
                CustomValidators.passwordValidator, CustomValidators.noEmptyWhiteSpace])
            ]
        });

        this.usuario = this.loginForm.controls['usuario'];
        this.senha = this.loginForm.controls['senha'];

    }

    login(form: any) {
        console.log("Usuário: " + form.usuario + "  Senha: " + form.senha);
        window.location.href = "/admin/home";
    }

}
