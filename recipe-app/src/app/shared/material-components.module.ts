import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    OverlayModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule

  ],
  exports: [
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    OverlayModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
})

export class MaterialComponentsModule { }
