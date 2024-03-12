// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule} from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';



// routing modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// components - material components prifixed with "material" word
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
import { MaterialStepperComponent } from './components/material-stepper/material-stepper.component';
import { MaterialDateComponent } from './components/material-date/material-date.component';
import { MaterialDialogComponent, DialogContentExampleDialog } from './components/material-dialog/material-dialog.component';
import { MaterialSortTableComponent } from './components/material-sort-table/material-sort-table.component';
import { MaterialChipsComponent } from './components/material-chips/material-chips.component';
import { MaterialSidenavComponent } from './components/material-sidenav/material-sidenav.component';
import { MaterialTableComponent } from './components/material-table/material-table.component';
import { MaterialTableDynamicComponent } from './components/material-table-dynamic/material-table-dynamic.component';
import { MaterialTableExpandableComponent } from './components/material-table-expandable/material-table-expandable.component';


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
    CalculatorComponent,
    MaterialStepperComponent,
    MaterialDateComponent,
    MaterialDialogComponent,
    DialogContentExampleDialog,
    MaterialSortTableComponent,
    MaterialChipsComponent,
    MaterialSidenavComponent,
    MaterialTableComponent,
    MaterialTableDynamicComponent,
    MaterialTableExpandableComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    MatChipsModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule
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
