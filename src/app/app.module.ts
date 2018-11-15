import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { HeaderComponent } from './header/header.component';
import { DownloadComponent } from './download/download.component';
import { OutputComponent } from './output/output.component';
import { HeaderService } from './app.headerService';
@NgModule({
  declarations: [
    AppComponent,
    LeftSideMenuComponent,
    HeaderComponent,
    DownloadComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'download',
        component: DownloadComponent,
      },
      {
        path: 'output',
        component: OutputComponent,
      }
    ])
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
