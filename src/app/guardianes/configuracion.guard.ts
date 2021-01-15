import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfiguracionServicio } from '../servicios/configuracion.service';

@Injectable()
export class ConfiguracionGuard implements CanActivate{
    constructor(
      private router: Router,
      private configuracionSerivicio: ConfiguracionServicio
    ){}

    canActivate(): Observable<boolean>{
      return this.configuracionSerivicio.getConfiguracion().pipe(
        map( configuracion => {
          if (configuracion.permitirRegistro){
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        })
      );
    }

}
