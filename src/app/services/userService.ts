import { UserInfoDto } from './dtos/user-info-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { UserDto } from './dtos/user-dto';

@Injectable()
export class UserService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getAll(
    name: string = '',
    take: number = 1000,
    skip: number = 0
  ): Observable<UserInfoDto[]> {
    return this.http.get<UserInfoDto[]>(
      this.ApiUrlV1 + 'usuario');
  }

  get(userId: string): Observable<UserInfoDto> {
    return this.http.get<UserInfoDto>(
      this.ApiUrlV1 + 'usuario/' + userId,
    );
  }

  post(user: UserDto): Observable<any> {
    return this.http
      .post(this.ApiUrlV1 + 'usuario', user, super.getAuthHeaderJson())
      .pipe(map(super.extractData), catchError(super.serviceError));
  }

  put(user: UserInfoDto): Observable<any> {
    return this.http
      .put(this.ApiUrlV1 + 'usuario/' + user.id, user, super.getAuthHeaderJson())
      .pipe(map(super.extractData), catchError(super.serviceError));
  }

  delete(userId: string): Observable<any> {
    return this.http
      .delete(this.ApiUrlV1 + 'usuario/' + userId, super.getAuthHeaderJson())
      .pipe(map(super.extractData), catchError(super.serviceError));
  }
}
