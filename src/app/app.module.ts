import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular button
import {MatButtonModule} from '@angular/material/button';
//components modules
import { InternsComponent } from './interns/interns.component';
import { RegistorComponent } from './registor/registor.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//angular form module
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';

import {AddUserComponent } from './user/add-user/add-user.component';
import {EditUserComponent } from './user/edit-user/edit-user.component';
import {UserDashboardComponent } from './login/user-login-dashboard/user-dashboard/user-dashboard.component';
import {MatIcon, MatIconModule} from '@angular/material/icon';
/// firebase modules angular
import{AngularFireModule} from '@angular/fire';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import { RegistorDbComponent } from './registor/Registor_list_db/registor-db/registor-db.component';
import { LogoutComponent } from './login/logout/logout.component';
import { PostLinkComponent } from './interns/post-link/post-link.component';
import { PostComponent } from './interns/post/post.component';




@NgModule({
  declarations: [
    AppComponent,
    InternsComponent,
    RegistorComponent,
    LoginComponent,
    HomeComponent,

    AddUserComponent,
    EditUserComponent,
    UserDashboardComponent,
    RegistorDbComponent,
    LogoutComponent,
    PostLinkComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,



  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
