import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss'],
})
export class UserNewComponent implements OnInit {
  form: FormGroup = new FormGroup({
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

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  save() {
		if (this.form.valid) {
			let user = Object.assign({}, this.form.value);

			this.userService.post(user).subscribe(
				response => {
					this.router.navigate(["/user"])
				},
				error => {
					alert("Houve um problema ao adicionar o usuário");
					console.error(error)
				}
			)
		}
  }
}
