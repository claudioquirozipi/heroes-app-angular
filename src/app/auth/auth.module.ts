import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
