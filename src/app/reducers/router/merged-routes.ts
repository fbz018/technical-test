import { Params, Data } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface MergedRoutes {
    url: string;
  queryParams: Params;
  params: Params;
  data: Data;
}

export type MergedRouteReducerState = RouterReducerState<MergedRoutes>;