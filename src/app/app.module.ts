import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import {AppRoutingModule} from './app-routing.module';
import {MatTableModule} from '@angular/material/table';
import { ListusersComponent } from './listusers/listusers.component'
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserdatalistComponent } from './userdatalist/userdatalist.component';
import {UserlistService} from './user.list.service';
import { AlluserComponent } from './alluser/alluser.component';

@NgModule({
  declarations: [
    AppComponent,
   LoginComponent,
   UpdateComponent,
   ListusersComponent,
   UserdatalistComponent,
   AlluserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
   

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
