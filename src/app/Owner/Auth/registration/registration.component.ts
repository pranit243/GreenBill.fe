import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../../../core/services/owner/registration-service.service';
import { OwnerRegistrationRequest } from '../../../common/interface/request/OwnerRegistrationRequest';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-registration',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(
    private registrationService: RegistrationService
  ) {}

  owner = {
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit(form: any) {

    if (form.invalid) {
      return;
    }

    // Form model -> API request model
    const registrationModel: OwnerRegistrationRequest = {
      email: this.owner.email,
      phoneNumber: this.owner.mobile,
      password: this.owner.password,
      roleName: 'Owner'
    };

    console.log('Registration Request:', registrationModel);

    this.registrationService.register(registrationModel).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
      },

      error: (error) => {
        console.error('Registration failed:', error);
      }
    });
  }
}
