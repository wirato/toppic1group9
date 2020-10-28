import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { PostpageComponent } from './postpage/postpage.component';
import { CreatepostpageComponent } from './createpostpage/createpostpage.component';
import { NovelComponent } from './novel/novel.component';
import { MynovelComponent } from './mynovel/mynovel.component';
import { NoveleditComponent } from './noveledit/noveledit.component';
import { CreateepComponent } from './createep/createep.component';
import { ReadnovelComponent } from './readnovel/readnovel.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'postpage',
    component: PostpageComponent,
  },
  {
    path: 'createpostpage',
    component: CreatepostpageComponent,
  },
  {
    path: 'novel/:id',
    component: NovelComponent,
  },
  {
    path: 'noveledit/:id',
    component: NoveleditComponent,
  },
  {
    path: 'mynovel',
    component: MynovelComponent,
  },
  {
    path: 'createep/:id',
    component: CreateepComponent,
  },
  {
    path: 'readnovel/:id',
    component: ReadnovelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
