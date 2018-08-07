import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { CHARACTERS } from './mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdventureTimeService {

	//constructor(private http:HttpClient) {}

	constructor(private http: HttpClient) {
		//this.http.get('http://localhost:8081/user')
		//.subscribe(response => console.log(response));
	}
	
	getFoods(): Observable<any[]>{
		return this.http.get('http://localhost:8081/user')
		.map((res: Response)=>{
            console.log(res)
            return Observable.of([{name: "Earl of Lemongrab", age: "Unknown",species: "Lemon Cand",occupation: "Earl, Heir to the Candy Kingdom Throne"}]).delay(100);
            //return Observable.of([{"id":1,"name":"test","dob":"17","email":"email","gender":"male","phone":"986","address":"sdf"}]).delay(100);
            //return res;
        }).catch((error:any)=> {
            return Observable.throw(error.error);
        }
        );
		//.map((response: Response) => response.users)
		//.subscribe(data =>  this.Repdata = data)  
	}

	getUsers(): Observable<any[]>{
		return Observable.of(CHARACTERS).delay(100);
	}
	
	getColumns(): string[]{
		return ["id", "name", "dob", "email", "gender", "phone", "ADDRESS"];
	}
	
}
