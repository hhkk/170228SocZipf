import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

//import { UtdsListComponent } from './obj/utds/utds-list.component';
//import { UtdDetailsComponent } from './obj/utds/utd-details.component';
import { Utds2ListComponent } from './obj/utds2/utds2-list.component';
import { Utd2DetailsComponent } from './obj/utds2/utd2-details.component';
import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';
import {SignupComponent} from "./auth/signup.component";
import {RecoverComponent} from "./auth/recover.component";
import {LoginComponent} from "./auth/login.component.web";

export const routes: Route[] = [
  { path: '', component: Utds2ListComponent },
  // { path: 'utds', component: UtdsListComponent },
  // { path: 'utd/:utdId', component: UtdDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
  { path: 'utds2', component: Utds2ListComponent },
  { path: 'utds2b', component: Utds2ListComponent },
  { path: 'utd2/:utdId', component: Utd2DetailsComponent, canActivate: ['canActivateForLoggedIn'] },
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
