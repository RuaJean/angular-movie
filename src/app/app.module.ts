import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/container/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxChartsModule,
    MatCardModule, 
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
