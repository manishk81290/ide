import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { NgxResizableModule } from '@3dgenomes/ngx-resizable';
import { TerminalComponent } from './components/terminal/terminal.component';
import { DirectoryStructureComponent } from './components/directory-structure/directory-structure.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    DirectoryStructureComponent,
    NavbarComponent,
    LeftSidebarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxResizableModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
