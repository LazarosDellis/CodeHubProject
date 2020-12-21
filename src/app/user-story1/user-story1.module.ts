import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStory1Component } from './user-story1/user-story1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserStory1Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  exports: [UserStory1Component]
})
export class UserStory1Module { }
