import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'table', component: TableComponent }
];

@NgModule({
    imports: [
		RouterModule.forRoot(routes)
	],
    exports: [RouterModule]
})
export class AppRoutingModule {}
