import { Component, OnInit } from '@angular/core';
import { TableService } from '../service/table.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import "rxjs/Rx";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

	characters: any;
	columns: string[];
	users: any;
	
	constructor(private apiService: TableService) {	
	}

	ngOnInit() {
		this.columns = this.apiService.getColumns(); 
		this.characters = this.apiService.getUsers();
		this.users = this.apiService.getKeys();
	}	
}
