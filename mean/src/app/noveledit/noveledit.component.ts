import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/services';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-noveledit',
  templateUrl: './noveledit.component.html',
  styleUrls: ['./noveledit.component.css']
})
export class NoveleditComponent implements OnInit {
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
  

  onDelete(postId: string) {
    this.authService.delep(postId).subscribe(datass =>{
      this.ngOnInit()

    })
  }

}
