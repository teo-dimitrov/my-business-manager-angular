import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {Subscription} from "rxjs";
import {Router} from '@angular/router';
import {AuthenticationService} from "../../service/authentication.service";
import {UserService} from "../../service/user.service";
import {NotificationService} from "../../service/notification.service";
import {NotificationType} from "../../enums/notification-type.enum";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public user: User;
  public username: string;
  public isLoggedIn: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(private router: Router, private authenticationService: AuthenticationService,
              private userService: UserService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.authenticationService.user.subscribe(user => {
      this.isLoggedIn = !!user;
    }));
    this.user = this.authenticationService.getUserFromLocalCache();
    this.isLoggedIn = !!this.user;
  }

  public onLogOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['user/login']);
    this.sendNotification(NotificationType.SUCCESS, `You've been successfully logged out`);
  }

  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
