import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { TablesReducer, TablesState } from 'nerdsweb-common';
import { CmmUtilsStateModel } from 'nerdsweb-common';
import { UtilsReducer } from 'nerdsweb-common';
import { environment } from 'src/environments/environment';
import { ModulesReducer, ModulesState } from './module.reducers';

export interface AppState {
  CmmTable: TablesState;
  Modules: ModulesState;
  CmmUtils: CmmUtilsStateModel
}

// Esto es lo mismo que estaba en el app module solo que ahora en una variable
export const reducers: ActionReducerMap<AppState, any> = {
  CmmTable: TablesReducer,
  Modules: ModulesReducer,
  CmmUtils: UtilsReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
