import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    postData = {
        name: 'test',
        height: 100,
        padding: 100
    }
    
    constructor(
    ) { }

    ngOnInit(): void {
       
    }

}