import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customers } from 'src/app/utils/models/customers.interface';
import { DefaultResponse } from 'src/app/utils/models/deafult-response.interface';
import { NewCustomer } from 'src/app/utils/models/save-customer.interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customers[] = [];
  customersArray: Customers[] = [];

  searchWord!: string;

  newCustomer!: NewCustomer;

  newCustomerForm = this.builder.group({
    Id_Customer: this.builder.control('', Validators.required),
    Complete_Name: this.builder.control('', Validators.required),
    Address: this.builder.control('', Validators.required),
    Contract_Date: this.builder.control('', Validators.required),
    Name_Plan: this.builder.control('', Validators.required),
    Id_Celphone_Plan: this.builder.control('', Validators.required),
    Price: this.builder.control({ value: '', disabled: true }, Validators.required),
    DUI: this.builder.control('', Validators.required),
    NIT: this.builder.control('', Validators.required),
    AFP: this.builder.control('', Validators.required),
    ISSS: this.builder.control('', Validators.required)
  });


  @ViewChild('closeModal') public closeModal!: ElementRef;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private builder: FormBuilder) { }

  ngOnInit(): void {

    this.getCustomersData();

  }

  getCustomersData(): void {
    this.customerService.getAllCustomers().subscribe((_res: DefaultResponse<Customers[]>) => {
      this.customers = _res.data;
      this.customersArray = _res.data;
    });
  }

  onSelectPlan(value: any) {

    if (value.target.value == 1) {
      this.newCustomerForm.get('Price')?.patchValue('$30.50');
    }
    if (value.target.value == 2) {
      this.newCustomerForm.get('Price')?.patchValue('$25.50');
    }
    if (value.target.value == 3) {
      this.newCustomerForm.get('Price')?.patchValue('$20.50');
    }
    if (value.target.value == 4) {
      this.newCustomerForm.get('Price')?.patchValue('$16.50');
    }

  }


  createCustomer(): void {

    this.newCustomer = {
      Complete_Name: this.newCustomerForm.get('Complete_Name')?.value,
      Contract_Date: this.newCustomerForm.get('Contract_Date')?.value,
      Address_Customer: this.newCustomerForm.get('Address')?.value,
      Id_Celphone_Plan: this.newCustomerForm.get('Id_Celphone_Plan')?.value,
      Documents: {
        DUI: this.newCustomerForm.get('DUI')?.value,
        NIT: this.newCustomerForm.get('NIT')?.value,
        AFP: this.newCustomerForm.get('AFP')?.value,
        ISSS: this.newCustomerForm.get('ISSS')?.value
      }
    }


    this.customerService.createCustomer(this.newCustomer).subscribe((_res) => {
      if (_res.status === 200) {
        alert("User created successfully");

        this.getCustomersData();

        this.closeModal.nativeElement.click();

      }
    })

  }

  onSearchCustomer(): void {

    this.customers = this.customersArray;

    this.customers = this.customers.filter((item) => (

      item.Address_Customer.includes(this.searchWord) || item.Complete_Name.includes(this.searchWord) || item.Contract_Date.includes(this.searchWord)

    ));

  }

}
