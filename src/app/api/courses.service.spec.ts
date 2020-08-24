import { TestBed, getTestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('CoursesService', () => {
  let service: CoursesService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService]
    });
    injector = getTestBed();
    service = injector.get(CoursesService);
    httpMock = injector.get(HttpTestingController);
    //service = TestBed.inject(CoursesService);
  });
  afterEach(() => {
    httpMock.verify();
  });
  describe('should return datas<List[]>', () => {
    const dummyUsers = [{ "id": "12345", "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg", "contenido": [{ "name": "HTML Semantico", "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0" }, { "name": "CSS Rules", "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4" }], "name": "Sistema Front-end" }, { "id": "12350", "name": "Scrum Study", "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg", "contenido": [{ "name": "HTML Semantico", "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0" }, { "name": "CSS Rules", "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4" }] }, { "id": "12349", "name": "Sistema de infraestructura", "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg", "contenido": [{ "name": "HTML Semantico", "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0" }, { "name": "CSS Rules", "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4" }] }, { "id": "12346", "name": "Arquitectura AWS", "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg", "contenido": [{ "name": "HTML Semantico", "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0" }, { "name": "CSS Rules", "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4" }] }, { "id": "12348", "name": "Sistema de procesos", "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg", "contenido": [{ "name": "HTML Semantico", "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0" }, { "name": "CSS Rules", "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4" }] }, { "id": "12351", "name": "AWS professional", "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg", "contenido": [{ "name": "HTML Semantico", "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0" }, { "name": "CSS Rules", "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4" }] }, { "id": "12347", "name": "Sistema DevOPS", "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg", "contenido": [{ "name": "HTML Semantico", "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0" }, { "name": "CSS Rules", "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4" }] }];
    it('getMusic() should return data', () => {
      service.getMusic().subscribe((users) => {
        expect(users).toEqual(dummyUsers);
      });
      const req = httpMock.expectOne(
        'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/getcourses'
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);
    });
  });

  describe('should return datas<List[]>', () => {
    let id = "12345"
    const dummyUsers = {
      "datos": {
        "id": "12345",
        "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg",
        "contenido": [
          {
            "name": "HTML Semantico",
            "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0"
          },
          {
            "name": "CSS Rules",
            "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4"
          }
        ],
        "name": "Sistema Front-end"
      }
    };
    it('getOneAlbums() should return data', () => {
      service.getOneAlbums(id).subscribe((users) => {
        expect(users).toEqual(dummyUsers);
      });
      const req = httpMock.expectOne(
        'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/getonecourse'
      );
      expect(req.request.method).toBe('POST');
      req.flush(dummyUsers);
    });
  });

  describe('should return datas<List[]>', () => {
    const dummyUsers = {
      "datos": {
        "id": "12345",
        "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg",
        "contenido": [
          {
            "name": "HTML Semantico",
            "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0"
          },
          {
            "name": "CSS Rules",
            "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4"
          }
        ],
        "name": "Sistema Front-end"
      }
    };
    const datos = {
      'id': Math.floor(Math.random() * 10000001) + '' + Math.floor(Math.random() * 10000001),
      'username': 'hamil',
      'id_course': '12345',
      'course': dummyUsers
    }
    it('setFavAlbum() should return data', () => {
      service.setFavAlbum(datos).subscribe((users) => {
        expect(users).toEqual(dummyUsers);
      });
      const req = httpMock.expectOne(
        'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/putcourse'
      );
      expect(req.request.method).toBe('POST');
      req.flush(dummyUsers);
    });
  });

  describe('should return datas<List[]>', () => {
    let datasFav = {
      'username': 'hamil'
    }
    const dummyUsers = [
      {
        "username": "hamil",
        "id": "66782889464243",
        "course": {
          "name": "Sistema Front-end",
          "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg",
          "contenido": [
            {
              "name": "HTML Semantico",
              "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0"
            },
            {
              "name": "CSS Rules",
              "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4"
            }
          ],
          "id": "12345"
        },
        "id_course": "12345"
      }
    ];
    it('getListFav() should return data', () => {
      service.getListFav(datasFav).subscribe((users) => {
        expect(users).toEqual(dummyUsers);
      });
      const req = httpMock.expectOne(
        'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/getonefavcourse'
      );
      expect(req.request.method).toBe('POST');
      req.flush(dummyUsers);
    });
  });

  describe('should return datas<List[]>', () => {
    let datasFav = {
      'username': 'hamil',
      'id_course': "12345"
    }
    const dummyUsers = [
      {
        "username": "hamil",
        "id": "66782889464243",
        "course": {
          "name": "Sistema Front-end",
          "image": "https://hipertextual.com/files/2011/11/pink_floyd.jpg",
          "contenido": [
            {
              "name": "HTML Semantico",
              "url": "https://www.youtube.com/watch?v=3e1GHCA3GP0"
            },
            {
              "name": "CSS Rules",
              "url": "https://www.youtube.com/watch?v=a1qKds0IQ_4"
            }
          ],
          "id": "12345"
        },
        "id_course": "12345"
      }
    ];
    it('getListFavID() should return data', () => {
      service.getListFavID(datasFav).subscribe((users) => {
        expect(users).toEqual(dummyUsers);
      });
      const req = httpMock.expectOne(
        'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/getfavidcourse'
      );
      expect(req.request.method).toBe('POST');
      req.flush(dummyUsers);
    });
  });

  describe('should return datas<List[]>', () => {
    let datasFav = {
      'username': 'hamil',
      'id_course': "12345"
    }
    const dummyUsers = "Borrado";
    it('deleteFav() should return message (Borrado)', () => {
      service.deleteFav(datasFav).subscribe((users) => {
        expect(users).toEqual(dummyUsers);
      });
      const req = httpMock.expectOne(
        'https://0yu0e0z3td.execute-api.us-west-2.amazonaws.com/test/cursostabla/deletemiscursos'
      );
      expect(req.request.method).toBe('POST');
      req.flush(dummyUsers);
    });
  });

});
