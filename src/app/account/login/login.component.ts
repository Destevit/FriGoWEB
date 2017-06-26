import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../account.service";
import { LoginModel } from "../../shared/models/account/login.model";
import { NotifierService } from "../../core/notifier.service";

@Component({
  selector: 'fg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel = new LoginModel();

  constructor(
    private accountService: AccountService,
    private notifier: NotifierService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.notifier.clearAll();

    this.accountService
      .login(this.loginModel)
      .subscribe(() => {
        this.notifier.success("Zalogowano!");
        this.router.navigate(['/fridge']);
      }, (error) => {
        this.notifier.error(error);
      });
  }
}
