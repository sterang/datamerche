import { Component, OnInit, OnChanges } from '@angular/core';
//import { MusicService } from '../../service/music.service';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { CoursesService } from '../../api/courses.service';
@Component({
  selector: 'app-favmusic',
  templateUrl: './favmusic.page.html',
  styleUrls: ['./favmusic.page.scss'],
  providers: [CoursesService]
})
export class FavmusicPage implements OnInit {
  public productos;
  constructor(
    private router: Router,
    private _musicService: CoursesService,
  ) { }
  ngOnInit() {
  }

  async ionViewWillEnter() {
    console.log("Entro")
    const user = await Auth.currentUserInfo();
    let datasFav = {
      'username': user.username,
    }
    this._musicService.getListFav(datasFav).subscribe(
      result => {
        this.productos = result;
        console.log(result)
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  eventChange(e) {
    this.router.navigate(['detailsmusic', e.id_course]);
  }

}
