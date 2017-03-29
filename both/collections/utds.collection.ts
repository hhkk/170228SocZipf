import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Utd } from '../models/utd.model';

export const Utds = new MongoObservable.Collection<Utd>('utdsxx2');
console.log ('in utdsxx2.collection.ts');

function loggedIn() {
  return !!Meteor.user();
}

Utds.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
