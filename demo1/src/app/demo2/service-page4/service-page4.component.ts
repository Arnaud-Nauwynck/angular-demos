import { Component } from '@angular/core';
import { AppStoreService } from '../../app-store.service';

@Component({
  selector: 'app-service-page4',
  templateUrl: './service-page4.component.html',
  styleUrls: ['./service-page4.component.css']
})
export class ServicePage4Component {

  constructor(protected appStoreService: AppStoreService) {
  }

}
