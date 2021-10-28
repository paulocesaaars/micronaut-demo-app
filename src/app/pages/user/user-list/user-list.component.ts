import { UserInfoDto } from './../../../services/dtos/user-info-dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';

const ELEMENT_DATA: UserInfoDto[] = [
  { id: '1', nome: 'Paulo Cesar de Souza', email: 'paulocesaaars@gmail.com' },
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'email', 'acoes'];
  users: UserInfoDto[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  remove(id: string) {
    this.userService.delete(id).subscribe(
      (response) => {
        alert("Usuario deletado com sucesso.");
        this.getUsers();
      },
      (error) => {
        alert("Houve um problema ao deletar o usuário");
        console.error(error);
      }
    );
  }
}
