import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SignUpClientComponent } from './sign-up-client.component';
import { SignUpSupplierComponent } from './sign-up-supplier.component';
import { PersonalDataFormComponent } from './personal-data-form/personal-data-form.component';
import { BankAccountDetailsFormComponent } from './bank-account-details-form/bank-account-details-form.component';
import { UserDataFormComponent } from './user-data-form/user-data-form.component';
import { UserTypeButtonComponent } from './user-type-button/user-type-button.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        SignUpComponent,
        SignUpClientComponent,
        SignUpSupplierComponent,
        PersonalDataFormComponent,
        BankAccountDetailsFormComponent,
        UserDataFormComponent,
        UserTypeButtonComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});