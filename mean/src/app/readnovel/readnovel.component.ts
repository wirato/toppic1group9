import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/services';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-readnovel',
  templateUrl: './readnovel.component.html',
  styleUrls: ['./readnovel.component.css']
})
export class ReadnovelComponent implements OnInit {
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
      this.authService.getpostep().subscribe(dataep => {
        for (var i in dataep){
          if(params.id == dataep[i]._id){
            this.ep =  dataep[i];
            console.log(this.ep);
            break;
          }
        }
        })
      );
      this.authService.getpostnovel().subscribe(data =>{
        this.novel = data;
        console.log(this.novel)
      })
    
  }
}
