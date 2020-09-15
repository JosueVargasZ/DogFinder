import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { DogResponse } from '../interfaces/dog.models';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  
  constructor( private http: HttpClient ) { }


  private getQuery(query: string , params?: HttpParams){

    const url: string    = `https://api.thedogapi.com/v1/${ query }`;
    const headers = new HttpHeaders(
      {'x-api-key': 'efc6f055-4f59-443d-95f7-ad768af1c4c3'});

      if( params ){
        return this.http.get(url, { headers, params });
      }
      
      return this.http.get(url, { headers });
  }

  searchBreed( query:string ){
    // breeds/search
    const params = new HttpParams()
    .set('q', query);

    return this.getQuery( 'breeds/search' , params);
  }

  getBreed( id:string ){
    const params = new HttpParams()
          .set('breed_id', id)
          .set('size', 'full');

    return this.getQuery('images/search', params );

  }


  getBreeds( page: number ){
    let limit: number = 10; 
    const params = new HttpParams()
          .set('page', page.toString())
          .set('limit', limit.toString());

    return this.getQuery( 'breeds' , params)
           .pipe(
            map( (resp: DogResponse[] ) => {
              return resp.map( dog =>{
                this.getImage( dog.id.toString() ).subscribe(image =>{
                  dog.img = image;
                });
                return dog;
              })
              
              })
           );
  }

  getAllBreeds(){
    return this.getQuery('breeds')
    .pipe(
      map( (resp: DogResponse[] ) => {
        return resp.map( dog =>{
          this.getImage( dog.id.toString() ).subscribe(image =>{
            dog.img = image;
          });
          return dog;
        });
        })
     );
  }

  getCategories( category: string ){
    return this.getAllBreeds()
    .pipe(
      map( (resp: DogResponse[]) =>{
        return resp.filter( dog => dog.breed_group === category );
      })
    );
   }

  

  getImage( id:string ){
    const params = new HttpParams()
          .set('breed_id', id)
          .set('size', 'small');

    return this.getQuery('images/search', params )
           .pipe(
             map( resp => {
               return resp[0]['url'];
             })
           );

  }


}
