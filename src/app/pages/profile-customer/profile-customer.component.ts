import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/utils/models/customer.interface';
import { DefaultResponse } from 'src/app/utils/models/deafult-response.interface';
import { UpdateCustomer } from 'src/app/utils/models/update-customer.interface';


@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrls: ['./profile-customer.component.css']
})
export class ProfileCustomerComponent implements OnInit {

  customer!: Customer;

  customerForm = this.builder.group({
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

  id_customer!: string | null;

  updatedCustomer!: UpdateCustomer;

  constructor(
    private customersService: CustomerService,
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

    this.id_customer = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {

    this.customersService.getCustomer(this.id_customer).subscribe((_res: DefaultResponse<Customer>) => {

      this.customer = _res.data;

      this.changeFormControlValues();

    });

  }

  changeFormControlValues(): void {

    this.customerForm.get('Id_Customer')?.patchValue(this.customer.Id_Customer.toString());
    this.customerForm.get('Complete_Name')?.patchValue(this.customer.Complete_Name);
    this.customerForm.get('Address')?.patchValue(this.customer.Address_Customer);
    this.customerForm.get('Contract_Date')?.patchValue(this.customer.Contract_Date);
    this.customerForm.get('Name_Plan')?.patchValue(this.customer.Name_Plan);
    this.customerForm.get('Price')?.patchValue('$' + this.customer.Price.toString());
    this.customerForm.get('Id_Celphone_Plan')?.patchValue(this.validatePlan());
    this.customerForm.get('DUI')?.patchValue(this.customer.Documents.DUI);
    this.customerForm.get('NIT')?.patchValue(this.customer.Documents.NIT);
    this.customerForm.get('AFP')?.patchValue(this.customer.Documents.AFP);
    this.customerForm.get('ISSS')?.patchValue(this.customer.Documents.ISSS);

  }



  validatePlan(): string {

    const plan = this.customerForm.get('Name_Plan')?.value;
    let planOption!: string;

    if (plan === 'Unlimited') {
      planOption = '1';
    }

    if (plan === 'Hostpot') {
      planOption = '2';
    }

    if (plan === 'Premium') {
      planOption = '3';
    }

    if (plan === 'Basic') {
      planOption = '4';
    }

    return planOption;
  }

  onSelectPlan(value: any) {

    if (value.target.value == 1) {
      this.customerForm.get('Price')?.patchValue('$30.50');
    }
    if (value.target.value == 2) {
      this.customerForm.get('Price')?.patchValue('$25.50');
    }
    if (value.target.value == 3) {
      this.customerForm.get('Price')?.patchValue('$20.50');
    }
    if (value.target.value == 4) {
      this.customerForm.get('Price')?.patchValue('$16.50');
    }

  }

  updateCustomer(): void {

    this.updatedCustomer = {
      Id_Customer: this.customerForm.get('Id_Customer')?.value,
      Complete_Name: this.customerForm.get('Complete_Name')?.value,
      Contract_Date: this.customerForm.get('Contract_Date')?.value,
      Address_Customer: this.customerForm.get('Address')?.value,
      Id_Celphone_Plan: this.customerForm.get('Id_Celphone_Plan')?.value,
      Documents: {
        DUI: this.customerForm.get('DUI')?.value,
        NIT: this.customerForm.get('NIT')?.value,
        AFP: this.customerForm.get('AFP')?.value,
        ISSS: this.customerForm.get('ISSS')?.value
      }
    }

    this.customersService.updateCustomer(this.updatedCustomer).subscribe((_res) => {
      if (_res.status === 200) {
        this.router.navigate(['/customers']);
      }
    })

  }

  deleteCustomer(): void {
    const idCustomer = this.customer.Id_Customer;

    this.customersService.deleteCustomer(idCustomer).subscribe((_res) => {
      if (_res.status === 200) {
        this.router.navigate(['/customers']);
      }
    });
  }


}
