import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable()
export class ImageLoadService {

    readonly baseUrl = 'https://api.demo.sodatech.com';

    constructor(private http: HttpClient) { }

    search(terms: Observable<string>) {
        return terms.pipe(
            debounceTime(600),
            distinctUntilChanged(),
            switchMap(term => this.getImages(term))
        )
      }
    
      getImages(term) {
        let params = term ? new HttpParams().set('search', term) : null;
        const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(`${this.baseUrl}/assets`, { params, headers });
      }

}