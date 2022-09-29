import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { BusinessloanComponent } from './businessloan/businessloan.component';
import { BusinessloaneligibilityComponent } from './businessloaneligibility/businessloaneligibility.component';
import { EMILoanCalculatorComponent } from './emi-loan-calculator/emi-loan-calculator.component';
import { FooterComponent } from './footer/footer.component';
import { GoldLoanComponent } from './gold-loan/gold-loan.component';
import { GoldloaneligibilityComponent } from './goldloaneligibility/goldloaneligibility.component';
import { HomeComponent } from './home/home.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { HomeloaneligibilityComponent } from './homeloaneligibility/homeloaneligibility.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoginComponent } from './login/login.component';
import { PaymentplanComponent } from './paymentplan/paymentplan.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { PersonalloaneligibilityComponent } from './personalloaneligibility/personalloaneligibility.component';
import { RegistrationComponent } from './registration/registration.component';
import { AcceptRejectloanComponent } from './accept-rejectloan/accept-rejectloan.component';
import { ApplicantslistComponent } from './applicantslist/applicantslist.component';
import { ViewapplicantsComponent } from './viewapplicants/viewapplicants.component';
import { ApplicantformComponent } from './applicantform/applicantform.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserlistComponent } from './userlist/userlist.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Loan-list',component:LoanListComponent},
  {path:'apply-for-loan',component:ApplyForLoanComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'homeloan',component:HomeloanComponent},
  {path:'homeloan/homeloan/:type',component:HomeloanComponent},
  {path:'admin',component:AdminComponent},
   {path:'footer',component:FooterComponent},
  {path:'loan-calculator', component:EMILoanCalculatorComponent},
  {path:'personalloan',component:PersonalloanComponent},
  {path:'goldloan',component:GoldLoanComponent},
  {path:'businessloan',component:BusinessloanComponent},
  {path:'homeloaneligibility',component:HomeloaneligibilityComponent},
  {path:'goldloaneligibility',component:GoldloaneligibilityComponent},
  {path:'personalloaneligibility',component:PersonalloaneligibilityComponent},
  {path:'businessloaneligibility',component:BusinessloaneligibilityComponent},
  {path:'paymentplan',component:PaymentplanComponent},
  {path:'accept-rejectloan',component:AcceptRejectloanComponent},
  {path:'applicantslist',component:ApplicantslistComponent},
  {path:'viewapplicants',component:ViewapplicantsComponent},
  { path:'viewapplicants/:applicantId', component:ApplyForLoanComponent },
  {path:'applicants/add',component:ApplicantformComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlist',component:UserlistComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
