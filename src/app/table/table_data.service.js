import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { tableData } from './table_data';
@Injectable()

export class AdventureTimeService {

	constructor() { 
		console.log('-- this.columns: ' + JSON.stringify(this.getColumns()));
	}

	getCharacters(): Observable<any[]>{
	  return Observable.of(tableData).delay(100);
	}

	getColumns(): string[]{
	  return ["name", "age", "species", "occupation"]
	}
	
}