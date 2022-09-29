import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { AboutComponent } from './about/about.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { GoldLoanComponent } from './gold-loan/gold-loan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { HttpClientModule } from '@angular/common/http';
import { EMILoanCalculatorComponent } from './emi-loan-calculator/emi-loan-calculator.component';
import { Options,LabelType } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { BusinessloanComponent } from './businessloan/businessloan.component';
import { FooterComponent } from './footer/footer.component';
import { HomeloaneligibilityComponent } from './homeloaneligibility/homeloaneligibility.component';
import { GoldloaneligibilityComponent } from './goldloaneligibility/goldloaneligibility.component';
import { PersonalloaneligibilityComponent } from './personalloaneligibility/personalloaneligibility.component';
import { BusinessloaneligibilityComponent } from './businessloaneligibility/businessloaneligibility.component';
import { PaymentplanComponent } from './paymentplan/paymentplan.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { AcceptRejectloanComponent } from './accept-rejectloan/accept-rejectloan.component';
import { ApplicantslistComponent } from './applicantslist/applicantslist.component';
import { ViewapplicantsComponent } from './viewapplicants/viewapplicants.component';
import { ApplicantformComponent } from './applicantform/applicantform.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanListComponent,
    AboutComponent,
    ApplyForLoanComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    HomeloanComponent,
    GoldLoanComponent,
    AdminComponent,
    LoanStatusComponent,
    EMILoanCalculatorComponent,
    PersonalloanComponent,
    BusinessloanComponent,
    FooterComponent,
    HomeloaneligibilityComponent,
    GoldloaneligibilityComponent,
    PersonalloaneligibilityComponent,
    BusinessloaneligibilityComponent,
    PaymentplanComponent,
    AdminloginComponent,
    AcceptRejectloanComponent,
    ApplicantslistComponent,
    ViewapplicantsComponent,
    ApplicantformComponent,
    UserlistComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule

  ],
  schemas:[
  CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
