import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProfileCustomerComponent } from './pages/profile-customer/profile-customer.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    CustomersComponent,
    ProfileCustomerComponent,
    SignUpComponent,
    ProfileUserComponent,
    UsersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
