import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  // Le formulaire
  public userForm: FormGroup;

  // Création d'un control perso
  public birthdateCtrl: FormControl;

  // Les controles sur les champs retournent
  // Null si le controle est bon -> pas d'erreur
  // S'il y a une erreur, un objet boolean avec le nom de l'erreur (pour pouvoir la tester dans le html)
  static isOldEnough(control: FormControl) {
    const birthdate = new Date(control.value);
    birthdate.setFullYear(birthdate.getFullYear() + 18);
    return birthdate < new Date() ? null : { tooYoung: true };
  }

  constructor(formBuilder: FormBuilder) {
    // Création du controler perso avec le test sur la date de naissance
    this.birthdateCtrl = formBuilder.control('', [
      Validators.required,
      UserFormComponent.isOldEnough
    ]);

    // Création du groupe de formulaire avec les composants
    this.userForm = formBuilder.group({
      name: formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      birthdate: this.birthdateCtrl
    });
  }

  ngOnInit() {
  }

  public submit() {
    console.log(this.userForm.value.name);
  }
}
