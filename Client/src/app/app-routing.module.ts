import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImgFolderComponent } from './img-folder/img-folder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImgFolderDetailComponent } from './img-folder-detail/img-folder-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserImgFoldersComponent } from './edit-user-img-folders/edit-user-img-folders.component';
import { UserImgFolderDetailComponent } from './user-img-folder-detail/user-img-folder-detail.component';
import { ImgSearchComponent } from './img-search/img-search.component';
import { NewImgFolderComponent } from './new-img-folder/new-img-folder.component';
import { SecurityPrivacyPolicyComponent } from './security-privacy-policy/security-privacy-policy.component'
import { AdminPolicyComponent } from './admin-policy/admin-policy.component';
import { AdminCollectionsComponent } from './admin-collections/admin-collections.component';
import { AdminImgDetailComponent } from './admin-img-detail/admin-img-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'collections',  component: ImgFolderComponent },
  { path: 'dashboard',    component: DashboardComponent },
  { path: 'detail/:_id', component: ImgFolderDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newuser', component: NewUserComponent },
  { path: 'collections/edit', component: EditUserImgFoldersComponent },
  { path: 'detail/:name/owner', component: UserImgFolderDetailComponent},
  { path: 'imgsearch/:_id', component: ImgSearchComponent},
  { path: 'collections/new', component: NewImgFolderComponent},
  { path: 'policy', component: SecurityPrivacyPolicyComponent},
  { path: 'policy/admin', component: AdminPolicyComponent},
  { path: 'collections/admin', component: AdminCollectionsComponent },
  { path: 'detail/:id/dispute', component: AdminImgDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}