import {Pipe, PipeTransform} from '@angular/core';
import {Party} from "../../../../both/models/party.model";
import {Utd2s} from "../../../../both/collections/parties.collection";

@Pipe({
  name: 'rsvp'
})
export class RsvpPipe implements PipeTransform {
  transform(party: Party, type: string): number {
    if (!type) {
      return 0;
    }

    let total = 0;
    const found = Utd2s.findOne(party._id);

    if (found)
      total = found.rsvps ? found.rsvps.filter(rsvp => rsvp.response === type).length : 0;

    return total;
  }
}