import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-link-vid-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './link-vid-input.component.html',
  styleUrl: './link-vid-input.component.css'
})
export class LinkVidInputComponent {

  linkForm! : FormGroup; // create form group
  success: boolean = false;
  success1: boolean = false;
  trspt: any;
  url : any;
  summ:any
  keyw:any

  // validators
  constructor(public fb: FormBuilder,
              public http: HttpClient,
              private sanitizer: DomSanitizer) {
      this.linkForm = this.fb.group({
        link: ''
      });
    }


  getData() {

    let lf = this.linkForm;

    this.url = lf.value.link;

    this.http.post("http://127.0.0.1:5000/api/v1/translate",{"video_url":this.url}).subscribe(
      (response: any) => {

        console.log("Response received:", response);

        if (response) {
          this.trspt = response.translated;
          this.success = true;
        } else {
          console.error("Response is empty");
          this.success = false;
        }
      },
      (error) => {
        console.error("Error occurred:", error);
        this.success = false;
      }
    );
  }

  getsumkey() {

    this.http.post("http://127.0.0.1:5000/api/v1/generate/summary_keywords", {"transcript":this.trspt}).subscribe(
      (response:any) => {

        console.log("Response received:", response);

        if (response) {
          this.summ = response.summary;
          this.keyw = response.keywords;
          this.success1 = true;
        } else {
          console.error("Response is empty");
          this.success1 = false;
        }
      },
      (error) => {
        console.error("Error occurred:", error);
        this.success1 = false;
      }
    );
  }

  get link() {
    return this.linkForm.get('link');
  }
}

