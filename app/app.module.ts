import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
    declarations: [ AppComponent, PreloaderComponent, RegistrationComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {

}
