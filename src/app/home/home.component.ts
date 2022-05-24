import { Component, OnInit } from '@angular/core';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sname: string = "hi my name is angular";
  isvalid = false;
  color: string [] =["yellow", "green", "blue"]
  peopleByCountry: any[] = [ { 'country': 'UK', 'people': [ { "name": "Douglas Pace" }, { "name": "Mcleod Mueller" }, ] },
  { 'country': 'US', 'people': [ { "name": "Day Meyers" }, { "name": "Aguirre Ellis" }, { "name": "Cook Tyson" } ] },
  { 'country': 'MARS', 'people': [ { "name": "Douglas Pace" }, { "name": "Mcleod Mueller" }, ] } ];
  ngOnInit(): void {
  }

}
