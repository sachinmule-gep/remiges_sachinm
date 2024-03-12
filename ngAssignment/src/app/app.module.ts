import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// routing modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { ChangeDetectComponent } from './change-detect/change-detect.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { AddCustomerbyTplfrmComponent } from './components/add-customerby-tplfrm/add-customerby-tplfrm.component';
import { AddCustomerbyRctfrmComponent } from './components/add-customerby-rctfrm/add-customerby-rctfrm.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { MyDemoCompComponent } from './components/my-demo-comp/my-demo-comp.component';
import { CalculatorComponent } from './components/calculator/calculator.component';


// services
import { BulletinService } from './services/bulletin-service.service';
import { RegistrationService } from './services/registration.service';
import { UsersService } from './services/users.service';  
import { TokenInterceptorService } from './services/token-interceptor.service'
import { AlertService } from './services/alerts.service';

// pipes
import { WraptextPipe } from './pipes/wrap-text.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';

// directives
import { HighlightTitleDirective } from './directives/highlight-title.directive';



@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectComponent,
    LiveNewsComponent,
    WraptextPipe,
    FormatDatePipe,
    HighlightTitleDirective,
    AddCustomerbyTplfrmComponent,
    AddCustomerbyRctfrmComponent,
    UserRegistrationComponent,
    UserListComponent,
    UserDetailsComponent,
    EditDetailsComponent,
    MyDemoCompComponent,
    CalculatorComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BulletinService, RegistrationService, UsersService, AlertService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
