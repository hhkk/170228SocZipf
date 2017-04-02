import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Party } from '../models/party.model';

export const Utd2s = new MongoObservable.Collection<Party>('partiesxx');


function loggedIn() {
  return !!Meteor.user();
}

Utd2s.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
