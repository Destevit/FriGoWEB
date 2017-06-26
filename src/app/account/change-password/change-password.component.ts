import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../account.service";
import { ChangePasswordModel } from "../../shared/models/account/change-password.model";
import { NotifierService } from "../../core/notifier.service";

@Component({
  selector: 'fg-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordModel: ChangePasswordModel = new ChangePasswordModel();

  constructor(
      private accountService: AccountService,
      private notifier: NotifierService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  changePass() {
    this.notifier.clearAll();

    this.accountService
      .changePass(this.changePasswordModel)
      .subscribe(() => {
        this.changePasswordModel = new ChangePasswordModel();
        this.notifier.success("Zmieniono hasło!");
      }, (error) => {
        this.notifier.error(error);
      });
  }

  logout() {
    this.accountService
      .logout();

    this.notifier.success('Zostałeś wylogowany!');
    this.router.navigate(['/']);
  }

}
