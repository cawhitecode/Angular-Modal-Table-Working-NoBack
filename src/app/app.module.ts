import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DirectoryService } from './services/directory.service';
import { TrainingComponent } from './components/training/training.component';
import { DispatchComponent } from './components/dispatch/dispatch.component';
import { RestrictionModalComponent } from './components/restriction-modal/restriction-modal.component';
import { MarketService } from './services/market.service';



const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DirectoryComponent },
        { path: 'training', component: TrainingComponent },
        { path: 'directory', component: DirectoryComponent },
        { path: 'dispatch', component: DispatchComponent }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes), NgMultiSelectDropDownModule.forRoot(), NgbModule ],
  declarations: [ AppComponent, HelloComponent, DirectoryComponent, NavbarComponent, TrainingComponent, DispatchComponent, RestrictionModalComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DirectoryService, MarketService], 
  exports: [RouterModule]
})
export class AppModule { }
