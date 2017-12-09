import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { EmailValidator } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImgFolderComponent } from './img-folder/img-folder.component';
import { ImgFolderDetailComponent } from './img-folder-detail/img-folder-detail.component';
import { ImgFolderService } from './img-folder.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewUserService } from './new-user.service';
import { MessageService } from './message.service'; 
import { LoginService } from './login.service';
import { CurrentUser } from './user';
import { OrderModule } from 'ngx-order-pipe';
import { HomepageDashboardComponent } from './homepage-dashboard/homepage-dashboard.component';
import { UsersImgFolderComponent } from './users-img-folder/users-img-folder.component';
import { EditUserImgFoldersComponent } from './edit-user-img-folders/edit-user-img-folders.component';
import { EditUserImgFoldersService } from './edit-user-img-folders.service';
import { UserImgFolderDetailComponent } from './user-img-folder-detail/user-img-folder-detail.component';
import { ImgSearchComponent } from './img-search/img-search.component';
import { NewImgFolderComponent } from './new-img-folder/new-img-folder.component';
import { ImgSearchService } from './img-search.service';
import { SecurityPrivacyPolicyComponent } from './security-privacy-policy/security-privacy-policy.component';
import { DmcaPolicyComponent } from './dmca-policy/dmca-policy.component';
import { SecurityServiceService } from './security-service.service';
import { Security } from './security';
import { AdminPolicyComponent } from './admin-policy/admin-policy.component';
import { AdminCollectionsComponent } from './admin-collections/admin-collections.component';
import { AdminDisputeService } from './admin-dispute.service';
import { AdminImgDetailComponent } from './admin-img-detail/admin-img-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgFolderComponent,
    ImgFolderDetailComponent,
    DashboardComponent,
    HomepageComponent,
    LoginComponent,
    NewUserComponent,
    HomepageDashboardComponent,
    UsersImgFolderComponent,
    EditUserImgFoldersComponent,
    UserImgFolderDetailComponent,
    ImgSearchComponent,
    NewImgFolderComponent,
    SecurityPrivacyPolicyComponent,
    DmcaPolicyComponent,
    AdminPolicyComponent,
    AdminCollectionsComponent,
    AdminImgDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [ 
    ImgFolderService, 
    NewUserService, 
    MessageService, 
    LoginService,
    CookieService,
    CurrentUser,
    EditUserImgFoldersService,
    ImgSearchService,
    SecurityServiceService,
    Security,
    AdminDisputeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
