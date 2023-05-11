import { Component } from '@angular/core';
import { HttphelperService } from './httphelper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getStudentsGrid: any;
  constructor(private httpclient: HttphelperService) {
  }
  ngOnInit() {
    this.GetStudents();
  }

  GetStudents() {
    debugger
    this.httpclient.getstudent().subscribe((data) => {
      this.getStudentsGrid = data;
      console.log(data);
    });
  }
}
