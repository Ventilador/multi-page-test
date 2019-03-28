import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './loader';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
