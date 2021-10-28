import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './components/title/title.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserNewComponent } from './pages/user/user-new/user-new.component';
import { UserViewComponent } from './pages/user/user-view/user-view.component';
import { UserService } from './services/userService';
import { UserResolve } from './pages/user.resolve';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    UserListComponent,
    UserEditComponent,
    UserNewComponent,
    UserViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatTableModule
  ],
  providers: [
    UserService,
    UserResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
