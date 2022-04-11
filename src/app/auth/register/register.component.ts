import { Component, OnInit } from '@angular/core';
import {NotificationType} from "../../enums/notification-type.enum";
import {HttpErrorResponse} from "@angular/common/http";
import {NotificationService} from "../../service/notification.service";
import { Router } from '@angular/router';
import {Subscription} from "rxjs";
import { AuthenticationService } from 'src/app/service/authentication.service';
import {User} from "../../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public showLoading: boolean | undefined;
  public randomPassword: boolean | undefined;
  public passwordDisabled: boolean = false;
  public sendEmail: boolean | undefined;
  public disabledField: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(private router: Router, private authenticationService: AuthenticationService,
              private notificationService: NotificationService) {}

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigateByUrl('/home');
    }

  }

  ngOnChanges(): void{
    if(this.randomPassword){
      this.passwordDisabled = true
    }
  }

  public onRegister(user: User): void {
    this.showLoading = true;
    this.randomPassword = user.randomPassword;
    this.sendEmail = user.sendEmail;
    this.subscriptions.push(
      this.authenticationService.register(user).subscribe(
        (response: User) => {
          this.showLoading = false;
          this.router.navigateByUrl('/home');
          this.sendNotification(NotificationType.SUCCESS, `A new account was created for ${response.username}.
          Please check your email for password to log in.`);
        },
        (errorResponse: HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
          this.showLoading = false;
        }
      )
    );
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
