import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentPortalComponent } from './components/student-portal/student-portal.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'studentportal', component: StudentPortalComponent},
    // otherwise redirect to login
    { path: '**', redirectTo: 'login' }
];
export const routing = RouterModule.forRoot(appRoutes);
