import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageCreatorComponent } from "./page-creator.component";
import { PageCreatorRoutinModule } from "./page-creator-routing.module";
import { MaterialModule } from "src/app/modules/material--module/material.module";
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";
import { CheckboxToggleDirective } from "src/app/tools/directives/checkbox-toggle.directive";
import { MenuDesktopComponent } from "./menu-desktop/menu-desktop.component";
import { ResizeEventDirective } from "../../tools/directives/resize-event.directive";
import { MobileMenuElementComponent } from "./mobile-menu/mobile-menu-element/mobile-menu-element.component";
import { MenuDesktopElementComponent } from "./menu-desktop/menu-desktop-element/menu-desktop-element.component";
import { SessionTimeComponent } from "../../shared/session-time/session-time.component";
import { PageStructureComponent } from "./page-structure/page-structure.component";
import { ColumnsStructureComponent } from "./page-structure/columns-structure/columns-structure.component";
import { BlockStructureComponent } from "./page-structure/block-structure/block-structure.component";
import { ColumnModifyDialogComponent } from './page-structure/dialogs/column-modify-dialog/column-modify-dialog.component';
import { FormsModuleShared } from 'src/app/modules/forms--module/FormsShared.module';
import { StepperModule } from 'src/app/shared/stepper/stepper.module';


@NgModule({
  declarations: [
    PageCreatorComponent,
    MobileMenuComponent,
    CheckboxToggleDirective,
    MenuDesktopComponent,
    ResizeEventDirective,
    MobileMenuElementComponent,
    SessionTimeComponent,
    MenuDesktopElementComponent,
    PageStructureComponent,
    ColumnsStructureComponent,
    BlockStructureComponent,
    ColumnModifyDialogComponent,
  ],
  entryComponents: [ColumnModifyDialogComponent],
  imports: [CommonModule, PageCreatorRoutinModule, MaterialModule, FormsModuleShared,StepperModule]
})
export class PageCreatorModule {}
