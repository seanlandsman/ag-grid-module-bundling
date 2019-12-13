import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// ag-grid
import { AgGridModule } from "@ag-grid-community/angular";

// application
import { AppComponent } from "./app.component";


@NgModule({
    imports: [
        BrowserModule,
        AgGridModule.withComponents()
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
