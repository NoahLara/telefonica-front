import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from '../utils/models/customers.interface';
import { Customer } from '../utils/models/customer.interface';
import { endpoints } from '../utils/endpoints';
import { DefaultResponse } from '../utils/models/deafult-response.interface';
import { UpdateCustomer } from '../utils/models/update-customer.interface';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  public getAllCustomers(): Observable<DefaultResponse<Customers[]>> {
    return this.http.get<DefaultResponse<Customers[]>>(endpoints.customers);
  }

  public getCustomer(id_customer: string | null): Observable<DefaultResponse<Customer>> {
    return this.http.get<DefaultResponse<Customer>>(endpoints.customers + `/${id_customer}`);
  }

  public updateCustomer(updatedCustomer: UpdateCustomer): Observable<DefaultResponse<JSON>> {
    return this.http.put<DefaultResponse<JSON>>(endpoints.customers + `/${updatedCustomer.Id_Customer}`, updatedCustomer);
  }

  public deleteCustomer(idCustomer: string | null | number): Observable<DefaultResponse<JSON>>{
    return this.http.delete<DefaultResponse<JSON>>(endpoints.customers + `/${idCustomer}`);
  }



}
