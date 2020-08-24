import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public url: string;
  public urlPost: string;
  public urlCreate: string;
  public urlFav: string;
  public urlFavID: string;
  public urlDelFav: string;
  headers = new HttpHeaders();
  constructor(private httpClient: HttpClient) {
    this.url = "https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/getcourses"
    this.urlPost = 'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/getonecourse';
    this.urlCreate = 'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/putcourse';
    this.urlFav = 'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/getonefavcourse';
    this.urlFavID = 'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/getfavidcourse';
    this.urlDelFav = 'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/deletemiscursos';
  }
  getMusic() {
    return this.httpClient.get(this.url);
  }
  getOneAlbums(idmusic) {
    let data = {
      "id": idmusic
    };
    return this.httpClient.post(this.urlPost, data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
  }
  setFavAlbum(datos) {
    return this.httpClient.post(this.urlCreate, datos,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
  }
  getListFav(data) {
    return this.httpClient.post(this.urlFav, data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
  }
  getListFavID(data) {
    return this.httpClient.post(this.urlFavID, data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
  }
  deleteFav(data) {
    return this.httpClient.post(this.urlDelFav, data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
  }
}
