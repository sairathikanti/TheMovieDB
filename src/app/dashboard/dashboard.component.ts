import { Component, OnInit } from '@angular/core';
import {MovieserviceService}from '../movieservice.service'
import {MovieDetails} from '../movie-details'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
users : Object;
  constructor(private data : MovieserviceService) { }

  ngOnInit() {

    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }

  
  

}

