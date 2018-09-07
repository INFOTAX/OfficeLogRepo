import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { AdminAuthenticationComponent } from './admin-authentication/admin-authentication.component';



@NgModule({
    imports: [
        PrimeNgModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        PrimeNgModule,
        FormsModule,
        AdminAuthenticationComponent,
        ReactiveFormsModule
    ],
    declarations: [AuthenticatedUserComponent,NavigationBarComponent, AdminAuthenticationComponent],
    providers: [],
})
export class SharedModule { }
