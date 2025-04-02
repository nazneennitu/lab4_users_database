import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // For animations
import { AppComponent } from './app.component';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
    declarations: [
      AppComponent,
      MissionlistComponent, // Declare the MissionlistComponent here
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatCardModule,
      MatButtonModule,
      MatSelectModule,
      MatFormFieldModule,
      MatInputModule,
      MatGridListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  