import { Component } from '@angular/core';
import { PaginationService } from 'ng2-pagination';
import { UtdsList } from "../../shared-components/utds-list.class";

//import template from './utds-list.component.html';
import template from './utds-list2.component.html';
import style from './utds-list.component.scss';

@Component({
  selector: 'utds-list',
  template,
  styles: [ style ]
})
export class UtdsListComponent extends UtdsList {
  constructor(paginationService: PaginationService) {
    super(paginationService);
  }
}
