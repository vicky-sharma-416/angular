import { Component, OnInit } from '@angular/core';
import { TableService } from '../service/table.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	// Default email to get login in the system
	user: any;
	model: any = {
		email: 'test@test.com'
	};
	
	constructor( private loginService: TableService, private router: Router) {}

	ngOnInit() {}

	displayData(value){
		
		console.log('-- requested value: ', value)
		
		this.user = this.loginService.login(value)
			.subscribe(data => {
				console.log('--subscribe_data: ' + JSON.stringify(data));
				
				// Navigate on other page after receiving successfully data
				this.router.navigate(['/table']);
			},
			(error:any) => {
				console.log('--subscribe_error: ' + JSON.stringify(error.error));
				
				// Alert error message whenever error produces
				alert(error.error.message)
			})
	}	

}


