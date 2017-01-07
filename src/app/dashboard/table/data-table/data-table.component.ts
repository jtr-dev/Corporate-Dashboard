import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Http } from '@angular/http';

import { DataService } from '../../../shared/data/index';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {
    // data table settings
    public settings: any = {
        columns: {
            'Submitted Date': {
                title: 'Submitted Date'
            },
            Customer: {
                title: 'Customer'
            },
            Description: {
                title: 'Description'
            },
            Employee: {
                title: 'Employee'
            },
            'Open/Closed Status': {
                title: 'Open/Closed Status'
            },
            'Closed Timestamp': {
                title: 'Closed Timestamp'
            }
        }
    };
    errorMessage: string;
    source: LocalDataSource; // add a property to the component

    constructor(public dataService: DataService) {
        this.source = new LocalDataSource();
    }

    // call the getnames function to fetch data from json 
    ngOnInit() {
        this.getNames();
    }

    // used to fetch all the data from json file

    getNames() {
        this.dataService.get()
            .subscribe(
            names => {
                this.source.load(names);
                console.log(names);
            },
            error => this.errorMessage = <any>error
            );
    }
}
