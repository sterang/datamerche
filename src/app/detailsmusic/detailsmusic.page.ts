import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { MusicService } from '../service/music.service';
import { CoursesService } from '../api/courses.service';
import { Auth } from 'aws-amplify';
@Component({
  selector: 'app-detailsmusic',
  templateUrl: './detailsmusic.page.html',
  styleUrls: ['./detailsmusic.page.scss'],
  providers: [CoursesService]
})
export class DetailsmusicPage implements OnInit {
  public idmusic;
  public productos;
  public fav;
  public favorito: Boolean;
  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private _musicService: CoursesService,
  ) {
    this.favorito = false;
  }
  ngOnInit() {
    //const comproved = await Auth.verifyTotpToken(user, 'true');
    this._route.params.forEach((params: Params) => {
      this.idmusic = params['idmusic']
    });
    this._musicService.getOneAlbums(this.idmusic).subscribe(
      result => {
        this.productos = result;
        //console.log(result)
      },
      error => {
        console.log(<any>error);
      }
    );
    this.getMusicFav()

  }
  async getMusicFav() {
    const user = await Auth.currentUserInfo();
    let datasFav = {
      'username': user.username,
      'id_course': this.idmusic
    }
    this._musicService.getListFavID(datasFav).subscribe(
      result => {
        this.fav = result;
        if (this.fav.length > 0) {
          this.favorito = true;
          console.log(this.favorito);
        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }
  returnSe() {
    this.router.navigate(['listmusic']);
  }
  //window.open(url, '_system');
  async seguir() {
    const user = await Auth.currentUserInfo();
    console.log(user);
    const datos = {
      'id': Math.floor(Math.random() * 10000001) + '' + Math.floor(Math.random() * 10000001),
      'username': user.username,
      'id_course': this.productos.datos.id,
      'course': this.productos.datos
    }
    this._musicService.setFavAlbum(datos).subscribe(
      result => {
        console.log(result);

      },
      error => {
        console.log(<any>error);
      }
    );
    this.favorito = true;
    console.log("Siguiendo");
  }
  async signOut() {
    try {
      await Auth.signOut().then(() => {
        console.log("Entro");
        this.router.navigate(['home']);
      }, async () => {
        console.log("No entra");
      });;
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  async dejarSeguir() {
    const user = await Auth.currentUserInfo();
    let datos = {
      'username': user.username,
      'id_course': this.productos.datos.id,
    }
    this._musicService.deleteFav(datos).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
    this.favorito = false;
  }
}
