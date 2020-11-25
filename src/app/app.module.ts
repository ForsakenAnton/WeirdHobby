import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HobbyComponent } from './hobby/hobby.component';
import { UserComponent } from './user/user.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MyKnowledgeComponent } from './my-knowledge/my-knowledge.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbyComponent,
    UserComponent,
    MyWorkComponent,
    MyKnowledgeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
