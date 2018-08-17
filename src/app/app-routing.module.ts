import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { FruitDetailsComponent } from './components/fruit-details/fruit-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'fruitlist',
        pathMatch: 'full'
    },
    {
        path: 'fruitlist',
        component: FruitListComponent
    },
    {
        path: 'fruitdetails/:fruitName',
        component: FruitDetailsComponent
    },
    {   path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
