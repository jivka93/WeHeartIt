import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  // Launches the just-in0time compiler for the app

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)  // the bootstrap method
  .catch(err => console.log(err));

// This is the entry point file. (entry to the app bundle)