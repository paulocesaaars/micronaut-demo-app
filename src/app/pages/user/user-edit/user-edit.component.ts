import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';
import { UserInfoDto } from 'src/app/services/dtos/user-info-dto';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  userPutDto?: UserInfoDto;

  form: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.userPutDto = this.route.snapshot.data['user'];
  }

  ngOnInit(): void {
    console.log(this.userPutDto?.nome);
    this.form.patchValue({
      id: this.userPutDto?.id ?? '',
      nome: this.userPutDto?.nome ?? '',
      email: this.userPutDto?.email ?? '',
    });
  }

  save() {
    if (this.form.valid) {
      let user = Object.assign({}, this.form.value);

      this.userService.put(user).subscribe(
        (response) => {
          this.router.navigate(['/user']);
        },
        (error) => {
          alert('Houve um problema ao atualizar o usuário');
          console.error(error);
        }
      );
    }
  }
}
