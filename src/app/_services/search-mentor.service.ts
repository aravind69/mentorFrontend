import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { GlobalConstants } from 'GlobalConstants';

@Injectable({
  providedIn: 'root'
})
export class SearchMentorService {

  constructor(private http:HttpClient) { }
  getCourses(){
    debugger;
    return this.http.get<any>(`${GlobalConstants.apiURL}/mentorUsers/getCources`)
  }
  getCategorys(id){
    return this.http.get<any>(`${GlobalConstants.apiURL}/mentorUsers/getCategoryById/${id}`)
  }
  search(course,category){
    return this.http.get<any>(`${GlobalConstants.apiURL}/mentorUsers/SearchCourses/${course}/${category}`)
  }
}
