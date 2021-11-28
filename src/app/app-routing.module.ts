import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

// import { ItemsComponent } from "./item/items.component";
// import { ItemDetailComponent } from "./item/item-detail.component";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
