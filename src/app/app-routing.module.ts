import { RouterModule,Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

import {TablasComponent} from './components/tablas/tablas.component';


const APP_ROUTING: Routes=[
{path: 'home', component: HomeComponent},
{path: 'tablas',component: TablasComponent},
{path: '**',pathMatch: 'full',redirectTo: 'home'}
];

export const APP_ROUTE=RouterModule.forRoot(APP_ROUTING,{useHash:true});
