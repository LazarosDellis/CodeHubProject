import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { UserStory1Module } from './user-story1/user-story1.module';
import { CreateNewBugComponent } from './create-newbug/create-new-bug/create-new-bug.component';
import { UserStory1Component } from './user-story1/user-story1/user-story1.component';
import { CreateNewbugModule } from './create-newbug/create-newbug.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CanDeactivateGuardService } from './create-newbug/can-deactivate-guard.service';
import { UserStory10Interceptor } from './user-story10.interceptor';

const routes: Routes = [
  {path: '', component: UserStory1Component},
  {path: 'createNewBug', component: CreateNewBugComponent,
  canDeactivate: [CanDeactivateGuardService]},
  {path: 'editBug/:id', component: CreateNewBugComponent,
  canDeactivate: [CanDeactivateGuardService]}
]


@NgModule({
  declarations: [
    AppComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    UserStory1Module,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CreateNewbugModule
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserStory10Interceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
