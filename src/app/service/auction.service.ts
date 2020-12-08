import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auction } from 'front-end-start/src/app/auctions/model/auction';
import { Category } from 'front-end-start/src/app/auctions/model/category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const baseUrl = 'http://localhost:3000/api/auctions';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  getAuctions(params?): Observable<Auction[]>{
     let queryParams = {};

     if (params) {
       queryParams = {
         params: new HttpParams()
           .set('page', (params.page && params.page.toString()) || '1')
           .set(
             'pageSize',
             (params.pageSize && params.pageSize.toString()) || ''
           )
           .set(
             'filter',
             (params.filter && JSON.stringify(params.filter)) || ''
           )
           .set('sort', params.sort && params.sort.toString() || '')
           .set('sortDirection', params.sortDirection && params.sortDirection.toString() || '')
       };
     }
     return this.http.get(baseUrl, queryParams).pipe(map(x => x as Array<Auction>))
  }

  getCategories(): Observable<Category[]> {
    return this.http.get('http://localhost:3000/api/categories').pipe(map(x => x as Array<Category>))
  }
}
