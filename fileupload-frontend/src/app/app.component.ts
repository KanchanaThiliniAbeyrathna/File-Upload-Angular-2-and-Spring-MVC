import { Component, OnInit } from '@angular/core';
import 'reflect-metadata';
import { MyService } from './services/service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [MyService]
})
export class AppComponent implements OnInit {
    title = 'Angular 2 File Upload';
    file = null;
    successMsg= null;
    errorMsg= null;
    error = null;

    constructor(private _router: Router,private _service: MyService) {

    }

    ngOnInit() {

    }

    getFiles(files: any) {
        let empDataFiles: FileList = files.files;
        this.file = empDataFiles[0];
    }

    postfile() {
        if (this.file !== undefined) {
            this._service.postFormData(this.file).map(responce => {
            }).catch( error => 
                this.errorMsg = "Failed to Upload File"
            );
            this.successMsg = "Successfully uploaded !!";
        } else {
            this.errorMsg = "Failed to Upload File";
        }
    }

}


