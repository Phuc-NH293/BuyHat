import { Routes } from '@angular/router';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './components/layout-client/layout-client.component';
import { AdminGuardsService } from './guards/admin.guards.service';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'home',
        redirectTo: '/',
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent,
      },
    ],
  },

  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate:[AdminGuardsService],
    children: [{ path: '', component: DashboardComponent }

      
    ],
  
  },
  {
      path:'product-add',component: ProductAddComponent

  },
  {
    path:'product-edit/:id',component: EditComponent

},

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
