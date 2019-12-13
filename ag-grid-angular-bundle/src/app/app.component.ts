import {Component} from '@angular/core';

import { ModuleRegistry} from '@ag-grid-community/core';
import { LicenseManager} from '@ag-grid-enterprise/core';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {MenuModule} from '@ag-grid-enterprise/menu';
import {ExcelExportModule} from '@ag-grid-enterprise/excel-export';

ModuleRegistry.registerModules([ClientSideRowModelModule, MenuModule, ExcelExportModule]);

LicenseManager.setLicenseKey('your license key');

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent  {
    columnDefs = [
        {field: 'make' },
        {field: 'model' },
        {field: 'price'}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
}
