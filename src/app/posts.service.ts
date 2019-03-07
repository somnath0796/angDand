import { Injectable } from '@angular/core';
import { Posts } from './posts.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
    url: string = 'http://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient) {
    }

    /* uncomment for Promises implementation
    getPosts()  : Promise<any> {
         return this.http.get(this.url).toPromise()
        .then(data => data);
    }*/

    /* Observable Implementation */
    getPosts() {
        return this.http.get<Posts[]>(this.url);
    }
}