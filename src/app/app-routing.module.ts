import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileCustomerComponent } from './pages/profile-customer/profile-customer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path:'sign-in', component: SignInComponent },
  { path:'sign-up', component: SignUpComponent },
  { path:'sign-up', component: SignUpComponent },
  { path:'customers', component: CustomersComponent },
  { path:'profile-customer', component: ProfileCustomerComponent },
  { path:'users', component: UsersComponent },
  { path:'users', component: UsersComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
