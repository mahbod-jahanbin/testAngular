import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  get userName(): FormControl {
    return this.form.get('userName') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    if (!this.form.valid) {
      alert('همه اطلاعات را وارد نمایید');
      return;
    }
    let body = {
      Username: this.form.value.userName,
      Password: this.form.value.password,
      Serial: 'mahbod',
      Token: '',
      SkipItem: '0',
      TakeItem: '0',
      AppId: 25,
      AppVersion: '8.0.0.7',
      WebServicePassword:
        'yFflGosUVRE6Yaz704JHtmvso5X2b8DPBIuMb1ImscWsHMzPLbncAefWA6O2tbut6mq47cRNgGopcvffdHr/LJEiuXcl1cRcXh53w8Sx/7xpIVvbBaxOFp3HnWluS054',
    };

    this.apiService.post('InternalApp/UserLogin', body).subscribe({
      next: (response) => {
        debugger;
      },
      error: (error) => {
        debugger;
      },
    });
  }
}
