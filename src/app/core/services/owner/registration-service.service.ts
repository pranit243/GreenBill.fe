import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment.development';
import { OwnerRegistrationRequest } from '../../../common/interface/request/OwnerRegistrationRequest';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private http = inject(HttpClient);

  constructor() { }

  private readonly apiUrl =
    `${environment.api.auth}/Auth/register`;

    register(data: OwnerRegistrationRequest) {
      return this.http.post(
        this.apiUrl,
        data
      );
    }
}
