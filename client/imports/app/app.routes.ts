import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';
import { UtdsListComponent } from './parties/utds-list.component';
import { UtdDetailsComponent } from './parties/utd-details.component';
import {SignupComponent} from "./auth/signup.component";
import {RecoverComponent} from "./auth/recover.component";
import {LoginComponent} from "./auth/login.component.web";

export const routes: Route[] = [
  { path: '', component: UtdsListComponent },
  { path: 'parties', component: PartiesListComponent },
  { path: 'utds', component: UtdsListComponent },
  { path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'utd/:utdId', component: UtdDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
