import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let password = group.get('password');
    let confirmPassword = group.get('confirmPassword');
    const error = { notmatched: true };
    const isValid = password?.value === confirmPassword?.value;
    if (!isValid) {
      confirmPassword?.setErrors(error);
    }
    return isValid ? null : error;
  };

  userForm = this.formBuilder.group(
    {
      userName: ['Alban', [Validators.required, Validators.minLength(3)]],
      email: ['alban@gmail.com', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$'
          ),
        ],
      ],
      confirmPassword: ['', Validators.required],
    },
    { validators: this.checkPasswords }
  );

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.userForm.value);
  }

  getErrors(): string {
    return '';
  }
}
