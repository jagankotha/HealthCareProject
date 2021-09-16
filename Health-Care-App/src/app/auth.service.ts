import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  canActivate(): boolean{
    return confirm("can i enter in to the component");
  }
  canDeactivate():boolean{
    return confirm("can i exit the component");
  }
  canActivateChild():boolean{
    return confirm("can you enter into the child compponent");
  }

}
