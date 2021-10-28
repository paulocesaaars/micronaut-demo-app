import { UserInfoDto } from './../services/dtos/user-info-dto';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/userService';

@Injectable()
export class UserResolve implements Resolve<UserInfoDto> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.userService.get(route.params['id']);
    }
}
