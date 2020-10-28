import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services';
import { User } from '@app/shared/interfaces';

@Component({
  selector: 'app-mynovel',
  templateUrl: './mynovel.component.html',
  styleUrls: ['./mynovel.component.css']
})
export class MynovelComponent implements OnInit {
  @Input() user: User | null = null;
  novelall = {};
  uid_ : any;
  postsPerPage = 2;
  currentPage = 1;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getpostnovel().subscribe(data => {
      this.novelall =  data;
    });
    this.authService.me().subscribe(uid => {
      this.uid_ = uid._id
      console.log(this.uid_)
    });
  }

  onDelete(postId: string) {
    this.authService.delhistory(postId).subscribe(datass =>{
      this.ngOnInit()

    })
  }

}
