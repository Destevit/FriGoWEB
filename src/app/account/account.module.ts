import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './account.service';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [ChangePasswordComponent, RegisterComponent, LoginComponent],
  providers: [AccountService]
})
export class AccountModule { }
