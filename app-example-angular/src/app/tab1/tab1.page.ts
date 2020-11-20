import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/* We define the object we are going to receive from the API */
interface ResultDto {
    message: string;
}

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

    /* We need the variable to be public to be able to use it into our html */
    public result = '';

    constructor(private http: HttpClient) {
    }

    /* We make our api call when component is started and store it into a public variable of our class */
    ngOnInit() {
        this.http.get<ResultDto>('http://151.115.48.28:3000').toPromise().then(res => {
            console.log(res);
            this.result = res.message;
        });
    }

}
