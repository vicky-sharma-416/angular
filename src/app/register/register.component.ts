import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TableService } from '../service/table.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	// Initiate model by default value
	user: any;
	model: any = {
		name: 'vikas',
		lastname: 'sharma',
		email: 'test@test.com',
		phone: '9898989898',
		gender: 'male'
	};

	constructor( private registerService: TableService, private router: Router){}

	ngOnInit() {}
  
	register(){
		
		this.user = this.registerService.createUsers(this.model)
			.subscribe(data => {
				console.log('--subscribe_data: ' + JSON.stringify(data));
				
				// Navigate on other page after receiving successfully data
				this.router.navigate(['/login']);
			},
			(error:any) => {
				console.log('--subscribe_error: ' + JSON.stringify(error.error));
				
				// Alert error message whenever error produces
				alert(error.error.message)
			})
			
	}
	
	clearFields() {
		this.model = {}
    }
    

}

