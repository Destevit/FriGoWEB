import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../account.service";
import { RegisterModel } from "../../shared/models/account/register.model";
import { NotifierService } from "../../core/notifier.service";

@Component({
  selector: 'fg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerModel: RegisterModel = new RegisterModel();

  constructor(
    private accountService: AccountService,
    private notifier: NotifierService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    this.notifier.clearAll();

    this.accountService
      .register(this.registerModel)
      .subscribe(() => {
        this.notifier.success("Zarejestrowano!");
        this.router.navigate(['/account/login']);
      }, (error) => {
        this.notifier.error(error);
      });
  }
}
