import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { LatestPostsComponent } from './app/pages/latest-posts/latest-posts.component';
import { AboutComponent } from './app/pages/about/about.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'latest-posts', component: LatestPostsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),
      BrowserAnimationsModule
    )
  ]
});
