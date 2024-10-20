// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http'; // Import withFetch
import { AppComponent } from './app/app.component';
import { tokensInterceptor } from './app/tokens.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    // Add withFetch() to enable the Fetch API
    provideHttpClient(withInterceptors([tokensInterceptor]), withFetch())
  ]
})
.catch(err => console.error(err));
