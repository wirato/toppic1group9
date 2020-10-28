import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/services';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css']
})
export class NovelComponent implements OnInit {
  novel = {};
  ep = {};
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => 
      
      this.authService.getpostnovel().subscribe(data => {
        for (var i in data){
          if(params.id == data[i]._id){
            this.novel =  data[i];
            break;
          }
        }
        })
      );
      this.authService.getpostep().subscribe(dataep =>{
        this.ep = dataep;
      })
    console.log(this.novel);
  }

}
