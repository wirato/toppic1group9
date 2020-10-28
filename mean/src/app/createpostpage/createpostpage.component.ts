import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@app/shared/services';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '@app/shared/interfaces';

@Component({
  selector: 'app-createpostpage',
  templateUrl: './createpostpage.component.html',
  styleUrls: ['./createpostpage.component.css']
})
export class CreatepostpageComponent implements OnInit {
  @Input() user: User | null = null;

  novelall = {};
  images : any;
  imgsrc = './assets/images/6742_cover.png';
  uid_ : any;

  constructor(
    private router: Router,
    private authService: AuthService, 
    private http: HttpClient,
    public _d: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.authService.getpostnovel().subscribe(data => {
      this.novelall =  data;
    });
    this.authService.me().subscribe(uid => {
      this.uid_ = uid._id
      console.log(this.uid_)
    });
  }

  selectImage(event: { target: { files: string | any[]; }; }) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imgsrc = window.URL.createObjectURL(file);
      this.images = file;
    }
  }


  onSubmit(title: string, detail: string){
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post<any>('http://localhost:4040/api/file', formData).subscribe(
      imgdata =>{
        const img = imgdata;
        console.log(img.originalname);
        this.authService.postnovel(title, detail, img.originalname, this.uid_).subscribe(data => {
          });
      }
    );
    this.router.navigate(['/']);
  }

}
