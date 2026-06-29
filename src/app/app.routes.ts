import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Catalogo } from './components/catalogo/catalogo';
import { DetalhesLivro } from './components/detalhes-livro/detalhes-livro';
import { Login } from './components/login/login';

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
    } ,
    {
        path: 'livro/:id',
        component: DetalhesLivro
    },
    {
        path: 'login',
        component: Login
    }
];
