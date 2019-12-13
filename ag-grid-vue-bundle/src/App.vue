<template>
    <ag-grid-vue style="width: 500px; height: 300px;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData">
    </ag-grid-vue>
</template>
<script>
    import { AgGridVue } from '@ag-grid-community/vue';
    import { ModuleRegistry} from '@ag-grid-community/core';
    import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
    import {MenuModule} from '@ag-grid-enterprise/menu';
    import {ExcelExportModule} from '@ag-grid-enterprise/excel-export';
    ModuleRegistry.registerModules([ClientSideRowModelModule, MenuModule, ExcelExportModule]);

    import "@ag-grid-community/core/dist/styles/ag-grid.css";
    import "@ag-grid-community/core/dist/styles/ag-theme-balham.css";

    export default {
        name: 'App',
        data() {
            return {
                columnDefs: null,
                rowData: null
            }
        },
        components: {
            AgGridVue
        },
        beforeMount() {
            this.columnDefs = [
                {headerName: 'Make', field: 'make'},
                {headerName: 'Model', field: 'model'},
                {headerName: 'Price', field: 'price'}
            ];

            this.rowData = [
                {make: 'Toyota', model: 'Celica', price: 35000},
                {make: 'Ford', model: 'Mondeo', price: 32000},
                {make: 'Porsche', model: 'Boxter', price: 72000}
            ];
        },
    }
</script>
