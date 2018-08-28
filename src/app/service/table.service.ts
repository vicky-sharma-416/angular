import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TableService {
	
	constructor(private http: HttpClient) {}
	
	// Get all users to display on table or error
	getUsers(): Observable<any[]>{
		return this.http.get('http://localhost:8090/user')
			.map((data:any) => {
				console.log('-- map_data: ' + JSON.stringify(data.users)); 
				return data.users
			})
			.catch(function(error:any){
				return Observable.throw(error);
			});
	}
	
	// Registered new user 
	createUsers(user: any){
		console.log('-- POST body: ' + JSON.stringify(user))
		
		// Skiping registration process as it required password, confirm password etc. as of now inserting direct record in user file/db
		//return this.http.post('http://localhost:8090/registration', user)
		return this.http.post('http://localhost:8090/user', user)
			.map(data => {console.log('-- map_data: ' + JSON.stringify(data)); return data});
	}
	
	// Login to receive token and call endpoint by that token, skipping call by token method 
	login(email: any){
		console.log('-- email: ', email);
		return this.http.post('http://localhost:8090/login', email)
			.map(data => {console.log('-- map_data: ' + JSON.stringify(data)); return data});
	}
	
	// Binding of each object key to display data on table
	getKeys(): string[]{
		return ["name", "lastname", "email", "phone", "gender"];
	}
	
	// Show table's column name 
	getColumns(): string[]{
		return ["First Name", "Last Name", "Email", "Phone", "Gender"];
	}
	
}
