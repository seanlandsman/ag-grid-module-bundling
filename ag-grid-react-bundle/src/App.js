import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-balham.css';

import { ModuleRegistry} from '@ag-grid-community/core';
import { LicenseManager} from '@ag-grid-enterprise/core';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {MenuModule} from '@ag-grid-enterprise/menu';
import {ExcelExportModule} from '@ag-grid-enterprise/excel-export';

ModuleRegistry.registerModules([ClientSideRowModelModule, MenuModule, ExcelExportModule]);

LicenseManager.setLicenseKey('your license key');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Make", field: "make"
            }, {
                headerName: "Model", field: "model"
            }, {
                headerName: "Price", field: "price"
            }],
            rowData: [{
                make: "Toyota", model: "Celica", price: 35000
            }, {
                make: "Ford", model: "Mondeo", price: 32000
            }, {
                make: "Porsche", model: "Boxter", price: 72000
            }]
        }
    }

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '500px',
                        width: '600px' }}>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
            </div>
        );
    }
}

export default App;
