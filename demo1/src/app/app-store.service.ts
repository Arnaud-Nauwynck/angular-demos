import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {

  public globalValue: string = 'global text';

  constructor() { }
}
