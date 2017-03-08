import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utds } from '../../../../both/collections/utds.collection';
import { InjectUser } from "angular2-meteor-accounts-ui";
import template from './utds-form.component.html';
import style from './utds-form.component.scss';

@Component({
  selector: 'utds-form',
  template,
  styles: [ style ]
})
@InjectUser("user")
export class UtdsFormComponent implements OnInit {
  addHbkForm: FormGroup;
  newUtdPosition: {lat:number, lng: number} = {lat: 37.4292, lng: -122.1381};
  images: string[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.addHbkForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [],
      location: ['', Validators.required],
      public: [false]
    });
  }

  mapClicked($event) {
    this.newUtdPosition = $event.coords;
  }

  addUtd(): void {
    if (!Meteor.userId()) {
      alert('Please log in to add a utd');
      return;
    }

    if (this.addHbkForm.valid) {
      alert('pre save');
      Utds.insert({
        name: this.addHbkForm.value.name,
        description: this.addHbkForm.value.description,
        location: {
          name: this.addHbkForm.value.location,
          lat: this.newUtdPosition.lat,
          lng: this.newUtdPosition.lng
        },
        images: this.images,
        public: this.addHbkForm.value.public,
        owner: Meteor.userId()
      });
      alert('post save');

      this.addHbkForm.reset();
    }
  }

  onImage(imageId: string) {
    this.images.push(imageId);
  }
}
