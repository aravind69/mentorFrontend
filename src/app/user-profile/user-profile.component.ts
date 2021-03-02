import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { AlertService, UserService, AuthenticationService } from 'app/_services';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FileuploaderService } from 'app/_services/fileuploader.service';
>>>>>>> 1153608bcb747cc8301a8747e89d3db38581f278

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
=======
 mentorprofile:FormGroup;
 userName:string;
 loading = false;
 submitted = false;
 fileObj: File;
  fileUrl: string;
  errorMsg: boolean;
  imageUrls:string;
   str = "https://mentorsuploads.s3.ap-south-1.amazonaws.com/warehos4.jpg?Content-Type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUU42RRVI5G7XVJXK%2F20210224%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20210224T173407Z&X-Amz-Expires=2400&X-Amz-Signature=2b0697eb2239bb6b7274b203169db5cdfc8b991ed489553632920eff05d4b918&X-Amz-SignedHeaders=host%3Bx-amz-acl&x-amz-acl=public-read";
   concat=  this.str.substr(this.str.lastIndexOf("?")+1);
   concat1= this.str.substr(0, this.str.indexOf('?'));
  constructor(private fb:FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private fileUploadService: FileuploaderService) {
      this.errorMsg = false
     }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    this.imageUrls=user.imageUrl;
    this.mentorprofile=this.fb.group({
      userName:[user.userName,Validators.required],
      email:[user.email,Validators.required],
      phoneNo:[user.phoneNo,Validators.required],
      id:[user.id],
      qualification:[user.qualification,Validators.required],
      experience:[user.experience,Validators.required],
      aboutMe:[user.aboutMe,Validators.required],
      addressline:[user.addressline,Validators.required],
      city:[user.city,Validators.required],
      state:[user.state,Validators.required],
      country:[user.country,Validators.required],
      zipcode:[user.zipcode,Validators.required],
      imageUrl:[user.imageUrl],
    })
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    // stop here if form is invalid
    if (this.mentorprofile.invalid) {
        return;
    }

    this.loading = true;
    debugger;
    this.userService.updateUser(this.mentorprofile.value,this.mentorprofile.value.id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Profile Updated successful', true);
                let updateuser = JSON.parse(localStorage.getItem('currentUser'));
                updateuser.userName=this.mentorprofile.value.userName;
                updateuser.email=this.mentorprofile.value.email;
                updateuser.phoneNo=this.mentorprofile.value.phoneNo;
                updateuser.qualification=this.mentorprofile.value.qualification;
                updateuser.experience=this.mentorprofile.value.experience;
                updateuser.aboutMe=this.mentorprofile.value.aboutMe;
                updateuser.addressline=this.mentorprofile.value.addressline;
                updateuser.city=this.mentorprofile.value.city;
                updateuser.state=this.mentorprofile.value.state;
                updateuser.country=this.mentorprofile.value.country;
                updateuser.zipcode=this.mentorprofile.value.zipcode;
                updateuser.imageUrl=this.mentorprofile.value.imageUrl;
                localStorage.setItem("currentUser",JSON.stringify(updateuser));
               },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}

//Upload files
onFilePicked(event: Event): void {
  this.errorMsg = false
  const FILE = (event.target as HTMLInputElement).files[0];
  this.fileObj = FILE;
}


onFileUpload() {
  if (!this.fileObj) {
      this.errorMsg = true
      return
    }
    this.fileUploadService.getpresignedurls(this.fileObj.name, this.fileObj.type).subscribe(res => {
      if (res.success) {
        const fileuploadurl = res.urls[0];
        const imageForm = new FormData();
        this.mentorprofile.value.imageUrl= fileuploadurl.substr(0, fileuploadurl.indexOf('?'));
        this.imageUrls=this.mentorprofile.value.imageUrl;
        imageForm.append('image', this.fileObj);
        this.fileUploadService.uploadfileAWSS3(fileuploadurl, this.fileObj.type, this.fileObj).subscribe((event) => {

        });
      }
    });
>>>>>>> 1153608bcb747cc8301a8747e89d3db38581f278
  }

}
