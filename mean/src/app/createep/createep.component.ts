import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@app/shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '@app/shared/interfaces';


@Component({
  selector: 'app-createep',
  templateUrl: './createep.component.html',
  styleUrls: ['./createep.component.css']
})
export class CreateepComponent implements OnInit {
  novel = {};
  ep= {}
  constructor(
    private router: Router,
    private authService: AuthService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => 
      this.authService.getpostnovel().subscribe(data => {
        for (var i in data){
          if(params.id == data[i]._id){
            this.novel =  data[i];
            console.log(this.novel);
            break;
          }
        }
        })
      );
  }

  createEp(ep: number, titleep: string, detail: string, titleid: string){
    this.authService.postep(ep, titleep, detail, titleid).subscribe(dataep => {
    });
    this.router.navigate(['/']);
  }


}
