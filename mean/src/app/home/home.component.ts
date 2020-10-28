import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  novelall = {};
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getpostnovel().subscribe(data => {
      this.novelall =  data;
    });
  }

}
