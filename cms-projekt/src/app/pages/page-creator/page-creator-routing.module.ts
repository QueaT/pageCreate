import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCreatorComponent } from './page-creator.component';


const routes: Routes = [{
  path: '', component: PageCreatorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCreatorRoutinModule { }
