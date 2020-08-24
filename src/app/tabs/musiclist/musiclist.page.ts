import { Component, OnInit } from '@angular/core';
//import { MusicService } from '../../service/music.service';
import { Router } from '@angular/router';
import { CoursesService } from '../../api/courses.service';
@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.page.html',
  styleUrls: ['./musiclist.page.scss'],
  providers: [CoursesService]
})
export class MusiclistPage implements OnInit {
  public productos;
  constructor(
    public router: Router,
    public _musicService: CoursesService,
  ) { }
  ngOnInit() {
    this.getCourses();
  }
  getCourses() {
    this._musicService.getMusic().subscribe(
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
    //console.log(e.id);
    this.router.navigate(['detailsmusic', e.id]);
  }

}
