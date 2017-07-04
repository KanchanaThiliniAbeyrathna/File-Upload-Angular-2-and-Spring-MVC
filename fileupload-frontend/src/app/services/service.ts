import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from "@angular/http";

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import { environment } from "../../environments/environment";

@Injectable()
export class MyService {

    private baseUrl;

    constructor(private http: Http) {
        this.baseUrl = "http://127.0.0.1:8080/fileupload/";
    }

    postFormData(file: File) {
        return Observable.fromPromise(new Promise((resolve, reject) => {
            let formData: any = new FormData()
            let xhr = new XMLHttpRequest()

            formData.append("file", file, file.name)

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response)
                    } else {
                        reject(xhr.response)
                    }
                }
            }
            xhr.open("POST", this.baseUrl + 'employee/uploaddata', true);
            xhr.send(formData)
        }));
    }

    callBackendAPI(url: string, httpMethod: string, params: URLSearchParams, headers: Headers, body: string): Promise<any> {
        switch (httpMethod) {

            case 'get':
                return this.http.get(this.baseUrl + url, { search: params }).toPromise()
                    .then(response => response.json())
                    .catch((error: Error) => console.log(error));

            case 'post':
                return this.http.post(this.baseUrl + url, body, {
                    headers: headers,
                    search: params
                }).toPromise().then(response => response.json())
                    .catch((error: Error) => console.log(error));

            case 'put':
                return this.http.put(url, body, {
                    headers: headers,
                    search: params
                }).toPromise()
                    .catch((error: Error) => console.log(error));

            case 'delete':
                return this.http.delete(url, { search: params }).toPromise()
                    .catch((error: Error) => console.log(error));

            default:
                throw new Error('Http method is not supported');

        }
    }

    private handleError(error: any) {
        console.error('There is an error', error);
        return Promise.reject(error.message || error);
    }
}
