import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { baseUrl } from 'src/app/shared/constants/api.constants';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({
  providedIn: 'root',
})
export class AdviceResolver implements Resolve<boolean> {
  constructor(private dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.dataService.get(baseUrl);
  }
}
