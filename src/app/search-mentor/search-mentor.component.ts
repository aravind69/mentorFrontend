import { Component, OnInit } from '@angular/core';
import{SearchMentorService} from 'app/_services/search-mentor.service'
import { first } from 'rxjs/operators';
import {Router} from '@angular/router'



@Component({
  selector: 'app-search-mentor',
  templateUrl: './search-mentor.component.html',
  styleUrls: ['./search-mentor.component.css']
})
export class SearchMentorComponent implements OnInit {
  loading = false;
  submitted = false;
  courses:any;
  categorys:any;
  mentors:Array<any> = [];
  courseId;
  id:any;
  constructor(private SearchMentorService:SearchMentorService,private router:Router) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(){
    this.SearchMentorService.getCourses().pipe(first())
    .subscribe(data =>{
      this.courses =data;
    },error =>{

    })
  }
  getCategorysById(id){
    this.SearchMentorService.getCategorys(id).pipe(first())
    .subscribe(data =>{
      this.categorys =data;
    },error =>{

    })
  }
  getCategorys(e){
    
    this.courseId = e;
    this.getCategorysById(e);
  }
  search(course,category) {
    this.submitted = true;
    this.loading = true;
    this.SearchMentorService.search(course,category)
        .pipe(first())
        .subscribe(
            data => {
              
              this.mentors =data;
              var tempdata =this.mentors;
            },
            error => {
                //this.alertService.error(error);
                this.loading = false;
            });
}

}
