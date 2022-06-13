import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customers } from 'src/app/utils/models/customers.interface';
import { DefaultResponse } from 'src/app/utils/models/deafult-response.interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customers[] = []; 

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {

    this.customerService.getAllCustomers().subscribe((_res:DefaultResponse<Customers[]>)=>{
      this.customers = _res.data;
    });

  }

}
