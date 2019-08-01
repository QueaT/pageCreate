import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: "", component:HomeComponent
  },
  {
    path: "login",
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: "register",
    loadChildren: './pages/register/register.module#RegisterModule'
  },
  {
    path:"page-creator",
    canActivate: [AuthGuard],
    loadChildren: './pages/page-creator/page-creator.module#PageCreatorModule'
  },
  { path: "**", component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    preloadingStrategy: PreloadAllModules
 })],
  exports: [RouterModule]
})
export class AppRoutingModule {}




