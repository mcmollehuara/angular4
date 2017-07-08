import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot  } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    routing: Router;

    constructor(private router: Router) {        
        this.routing = router;
    }

    canActivate(route: Object, state: RouterStateSnapshot) {
       return true;
    }
}