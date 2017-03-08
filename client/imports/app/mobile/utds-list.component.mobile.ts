import { Component } from '@angular/core';
import { PaginationService } from 'ng2-pagination';
import { UtdsList } from "../shared-components/utds-list.class";

import template from './utds-list.component.mobile.html';

@Component({
  selector: 'utds-list',
  template
})
export class UtdsListMobileComponent extends UtdsList {
  constructor(paginationService: PaginationService) {
    super(paginationService);
  }
}
