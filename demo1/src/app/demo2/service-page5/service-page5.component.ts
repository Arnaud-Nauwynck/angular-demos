import { Component } from '@angular/core';
import { AppStoreService } from '../../app-store.service';

@Component({
  selector: 'app-service-page5',
  templateUrl: './service-page5.component.html',
  styleUrls: ['./service-page5.component.css']
})
export class ServicePage5Component {

  constructor(protected appStoreService: AppStoreService) {
  }

}
