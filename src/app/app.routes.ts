import { Routes } from '@angular/router';
import { MonsterList } from './pages/monster-list/monster-list';
import { NotFound } from './pages/not-found/not-found';
import { MonsterComponent } from './pages/monster/monster.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
}, {
    path: 'home',
    component: MonsterList
}, {
    path: 'monster',
    children: [{
        path: '',
        component: MonsterComponent
    }, {
        path:':id',
        component: MonsterComponent
    }]
}, {
    path: '**',
    component: NotFound
}];
