import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { UtdsListComponent } from './obj/utds/utds-list.component';
import { UtdDetailsComponent } from './obj/utds/utd-details.component';
import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';
import {SignupComponent} from "./auth/signup.component";
import {RecoverComponent} from "./auth/recover.component";
import {LoginComponent} from "./auth/login.component.web";

export const routes: Route[] = [
  { path: '', component: UtdsListComponent },
  { path: 'utds', component: UtdsListComponent },
  { path: 'utd/:utdId', component: UtdDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'parties', component: PartiesListComponent },
  { path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent }
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
