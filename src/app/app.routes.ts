import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Catalogo } from './components/catalogo/catalogo';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: Home
    },
    {
        path: 'catalogo',
        component: Catalogo
    } 
];
