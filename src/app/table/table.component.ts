import { Component, OnInit } from '@angular/core';
import { tableData } from './table_data';
import { AdventureTimeService } from '../adventure-time.service';
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
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	//characters: Observable<any[]>;
	characters: Observable<Object>;
	columns: string[];
	users: any;
	
	constructor(private apiService: AdventureTimeService) {}

	ngOnInit() {
		this.columns = this.apiService.getColumns(); 
		//console.log(' -- this.columns: ' + JSON.stringify(this.columns));

		//this.characters = this.apiService.getUsers();
		this.characters = this.apiService.getFoods();
		//console.log(' -- this.characters: ' + JSON.stringify(this.characters));
	}
	
}
