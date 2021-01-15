import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private authService: AngularFireAuth){}

  // tslint:disable-next-line: typedef
  login(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.authService.signInWithEmailAndPassword(email, password)
      .then(datos => resolve(datos),
            error => reject(error)
      );
    });
  }

  // tslint:disable-next-line: typedef
  getAuth(){
    return this.authService.authState.pipe(
      map(auth => auth)
    );
  }

  // tslint:disable-next-line: typedef
  logout(){
    this.authService.signOut();
  }

  // tslint:disable-next-line: typedef
  registrarse(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.authService.createUserWithEmailAndPassword(email, password)
        .then(datos => resolve(datos),
        error => reject(error));
    });
  }

}
