import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ComponentsModule } from './components/components.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes : Routes = [
    {path: '', pathMatch: 'full', component: WelcomePageComponent},
    { path: 'authentication', children: [
        {path: 'signin', component: SigninComponent},
        {path: 'signup' ,component: SignupComponent}
    ] },
    { path: 'components', 
     loadChildren: () => ComponentsModule,
     canActivate:[AuthGuard] 
  }

]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
