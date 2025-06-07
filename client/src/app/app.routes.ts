import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent, canActivate: [authGuard]},
    {path: "members", component: MemberListComponent, canActivate: [authGuard]},
    {path: "member/:id", component: MemberDetailsComponent, canActivate: [authGuard]},
    {path: "lists", component: ListsComponent, canActivate: [authGuard]},
    {path: "messages", component: MessagesComponent, canActivate: [authGuard]},
    {path: "errors", component: TestErrorsComponent},
    {path: "not-found", component: NotFoundComponent},
    {path: "server-error", component: ServerErrorComponent},
    {path: "**", component: HomeComponent, pathMatch: "full"},
];
