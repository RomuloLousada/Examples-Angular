import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { C1Component } from './c1.component';
import { C2Component } from './c2/c2.component';
import { CounterComponent } from './counter/counter.component';
import { DirectivesComponent } from './directives/directives.component';
import { MoviesComponent } from './movies/movies.component';
import { RatingsComponent } from './ratings/ratings.component';
import { PanelsComponent } from './panels/panels.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CycleComponent } from './cycle/cycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { CepPipe } from './cep.pipe';
import { CpfCnpjPipe } from './cpf.cnpj.pipe';
import { ImpurePipe } from './impure.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BackendComponent } from './backend/backend.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    CounterComponent,
    DirectivesComponent,
    MoviesComponent,
    RatingsComponent,
    PanelsComponent,
    LifecycleComponent,
    CycleComponent,
    PipesComponent,
    CepPipe,
    CpfCnpjPipe,
    ImpurePipe,
    ReactiveFormComponent,
    BackendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
