import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { VerifyphonenoComponent } from './verifyphoneno/verifyphoneno.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyTripsComponent,
    NavComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    AdminComponent,
    CreateadminComponent,
    UpdatepasswordComponent,
    VerifyphonenoComponent,
    NewpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
