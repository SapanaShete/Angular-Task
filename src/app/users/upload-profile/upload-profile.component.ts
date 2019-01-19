import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-profile',
  templateUrl: './upload-profile.component.html',
  styleUrls: ['./upload-profile.component.css']
})
export class UploadProfileComponent implements OnInit {
  fileToUpload: File = null;
  constructor() { }

  ngOnInit() {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
onUpload(){
  
}
}
