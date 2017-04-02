import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { Utd2s } from '../../../both/collections/parties.collection';

interface Options {
  [key: string]: any;
}

Meteor.publish('partiesxx', function(options: Options, location?: string) {
  const selector = buildQuery.call(this, null, location);

  Counts.publish(this, 'numberOfParties', Utd2s.collection.find(selector), { noReady: true });

  return Utd2s.find(selector, options);
});

Meteor.publish('party', function(partyId: string) {
  return Utd2s.find(buildQuery.call(this, partyId));
});


function buildQuery(partyId?: string, location?: string): Object {
  const isAvailable = {
    $or: [{
      // party is public
      public: true
    },
    // or
    { 
      // current user is the owner
      $and: [{
        owner: this.userId 
      }, {
        owner: {
          $exists: true
        }
      }]
    },
    {
      $and: [
        { invited: this.userId },
        { invited: { $exists: true } }
      ]
    }]
  };

  if (partyId) {
    return {
      // only single party
      $and: [{
          _id: partyId
        },
        isAvailable
      ]
    };
  }

  const searchRegEx = { '$regex': '.*' + (location || '') + '.*', '$options': 'i' };

  return {
    $and: [{
        'location.name': searchRegEx
      },
      isAvailable
    ]
  };
}