import { Injectable } from "@angular/core";
import { Headers } from "@angular/http";
import { ApiService } from "../core/api.service";
import { UserService } from "../core/user.service";
import { LoginModel } from "../shared/models/account/login.model";
import { RegisterModel } from "../shared/models/account/register.model";
import { ChangePasswordModel } from "../shared/models/account/change-password.model";
import { LoggedInResponse } from "../shared/models/account/logged-in.response";
import { Observable } from "rxjs/Observable";
import { endpoints } from "../shared/endpoints";

@Injectable()
export class AccountService {

  constructor(
    private api: ApiService,
    private userService: UserService
  ) { }

  login(loginModel: LoginModel): Observable<LoggedInResponse> {
    return this.api.post(
      endpoints.login,
      `username=${loginModel.username}&password=${loginModel.password}&grant_type=password`,
      new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
    ).do((res) => this.userService.onLoggedIn(res));
  }

  register(registerModel: RegisterModel): Observable<any> {
    return this.api.post(
      endpoints.register,
      registerModel
    );
  }

  changePass(changePasswordModel: ChangePasswordModel): Observable<any> {
    return this.api.post(
        endpoints.changePass,
        changePasswordModel
    );
  }

  logout() {
    return this.userService.logout();
  }
}
