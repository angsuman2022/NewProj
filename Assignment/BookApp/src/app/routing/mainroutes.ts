import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
export const Mainroutes=[
{path:'',component: LoginComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'booksearch',loadChildren:()=>import('../booksearch/booksearch.module').then(m=>m.BookSearchModule)},
//{path:'login',loadChildren:()=>import('../login/login.module').then(m=>m.LoginModule)},
//{path:'signup',loadChildren:()=>import('../signup/signup.module').then(m=>m.SignupModule)},
{path:'home',component: HomeComponent}

];
