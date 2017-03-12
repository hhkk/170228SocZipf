import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utds } from '../../../../../both/collections/utds.collection';
import { InjectUser } from "angular2-meteor-accounts-ui";
import template from './utds-form.component.html';
import style from './utds-form.component.scss';

@Component({
  selector: 'utds-formx',
  template,
  styles: [ style ]
})
@InjectUser("user")
export class UtdsFormComponent implements OnInit {
  addForm: FormGroup;
  newUtdPosition: {lat:number, lng: number} = {lat: 37.4292, lng: -122.1381};
  images: string[] = [];

  constructor(
      private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
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



    if (this.addForm.valid) {




      let i;
      for (i = 0; i < 1; i++) {
        if (this.addForm.valid) {
          //alert('pre save');
          try {
            Utds.insert({
              name: this.addForm.value.name,
              description: this.addForm.value.description,
              location: {
                name: this.addForm.value.location,
                lat: this.newUtdPosition.lat,
                lng: this.newUtdPosition.lng
              },
              images: this.images,
              public: this.addForm.value.public,
              owner: Meteor.userId()
            });
          } catch (err) {
            console.log(err.stack);
            console.log(err.toString());
            alert('error in save');
          }
        }
        //alert('post save');

      } // for

      this.addForm.reset();
  }
  }

  onImage(imageId: string) {
    this.images.push(imageId);
  }
}
