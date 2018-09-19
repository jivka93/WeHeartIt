import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [  // imports needed for templates declared in this module
    BrowserModule,
    FormsModule
  ],
  declarations: [  // declaration of all components in order to be available to the module
    AppComponent,
    NavbarComponent,
    LoginModalComponent,
    ContentComponent
  ],
  bootstrap: [AppComponent], // represents the components that will launch when the app starts
  providers: [], // to import services into the module
  exports: [] // export declarations to use in other components
})
export class AppModule {

}

// 1. main.ts runs the bootstrap method against app.module.ts
// 2. app.module.ts launches app.component.ts
// 3. app.component.ts initial component displayed by the app
