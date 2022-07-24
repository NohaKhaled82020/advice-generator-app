import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { baseUrl } from 'src/app/shared/constants/api.constants';
import { DataService } from 'src/app/shared/services/data.service';
import { IAdvice } from '../IAdvice.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  advice!: IAdvice;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(
        tap((res: any) => {
          this.advice = res.advises.slip;
        })
      )
      .toPromise();
  }

  getAdvice() {
    this.dataService
      .get(baseUrl)
      .pipe(
        tap((res: any) => {
          this.advice = res.slip;
        })
      )
      .toPromise();
  }
}
