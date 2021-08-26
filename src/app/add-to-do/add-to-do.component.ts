import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../data.service";

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  logo: string = "assets/applogo.jpg";
  message:any=[];
  
  /*status: Status[] = [
    { value: 'incomplete-0', viewValue: 'Incomplete' },
    { value: 'complete-1', viewValue: 'Complete' }
  ];*/

  constructor(private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("New To Do Task Added")
    this.router.navigate(['/todo']);
  }
}
