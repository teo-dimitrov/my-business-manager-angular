import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./service/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-business-manager-angular';

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authService.getUserFromLocalCache()
  }
}
