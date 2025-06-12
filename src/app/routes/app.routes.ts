import { Routes } from "@angular/router";
import { authRoutes } from "./auth.routes";


export const routes: Routes = [
    {
        path: 'auth',
        children: authRoutes
    },

    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
]

