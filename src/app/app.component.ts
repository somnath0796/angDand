import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";
import { PostsService } from "./posts.service";
@Component({
  selector: 'app-root',
  template: `
  <div>
      <h1>{{title | titlecase}}</h1>

      <hr/>
      <my-quote></my-quote>
      <hr/>

      <!-- This is Content Projection example & displays the data provided by Service(refer below) -->
      <border>
      Wells Fargo honours:
        <div *ngFor="let person of objPeople">
          <p>{{person.name}} born {{person.yearborn}}</p>
        </div>
      </border>
      <hr/>
      <!-- example for Promises/Observables in angular change in service 
          & implementation of service call only/ no change in view level -->
      <h3>Promises/Observables and Service model async call example</h3>
      <div *ngFor="let post of objPosts | slice : '90'" >
          <p>{{post.id}} born {{post.title}}</p>
      </div>
      
      <hr/>
      <!-- This is Binding example -->
      <h3>Binding Examples</h3>
      <img [src]="imgURL" [width]="imgWidth" [height]="imgHeight" />
      <br/><br/>
      <input type='text' name='txtTitle' 
      [(ngModel)]='title' /><br/><br/>
      <button type ='button' name ='btn1' 
      (click) ='changeTitle()'>
      Change Title
      </button>
      <br/><br/>
      <i>Binding Examples - Counter component(Input and Output)</i>
      <counter [count] = 'countValue' (countChanged) = 'handleEvent()'>
      </counter>
      <br/>
    <br/><br/>
    <hr/>

    <!-- This is structural directive example -->
      <h3>Structural Directive Example</h3>
    <!-- this is ngSwitch example -->
    <form name="frm12" >
    <p>ngSwitch Example</p>
      <select [(ngModel)] = 'country' name = 'selCountry'>
        <option value='IN'>India</option>
        <option value='GB'>Britain</option>
        <option value='MY'>Malaysia</option>
      </select>
    </form>
    <!-- defaults to IN as switch case falls to India -->
    <div [ngSwitch]='country'>
      <h3 *ngSwitchCase="'IN'">Indian Rupee</h3>
      <h3 *ngSwitchCase="'GB'">Pound</h3>
      <h3 *ngSwitchCase="'MY'">Ringitt</h3>
    </div>
    <hr/>
        
      <div *ngIf  = "comments.length>0; else nocomments">
        <p style='color:#00f;'>Comments here... </p>
      </div>
      <ng-template #nocomments>
        <p style='color:#00f;'>No comments yet!</p>
      </ng-template>
    <hr/>
      <!-- This is custom pipes and pipes example -->
      <h3>Pipes Demo</h3>
      <p> just at {{ 12000 | currency : 'INR' : 'symbol' }} </p>
      <p>{{ today | date : 'longDate' : ' ' : 'hi' }} </p>
      <p>{{ today | date : 'EEEE, MMMM d, yyyy' | uppercase }} </p>
      <p>{{ pi | number : '1.1-3' : 'hi' }}</p>
      <p>Temperature is {{ 37 | Convert : 'CtoF' }}</p>
      
      <hr/>

    <!-- This is custom attribute directive example; look how the directive can 
    be applied to different DOMs or multiple can be applied to single DOM. Also demostrating the template driven 
    Forms in Angular. Add ngModel in the form elements. -->
      <form #form = 'ngForm'>
      <p>Attribute Directive example</p>
      FirstName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='txtFname' format  ngModel required/>
      <br/><br/>
      SecondName:&nbsp;<input type='text' name='txtLname' format ngModel required /><br/>
      <button name='btn12' type='button' [disabled]='!form.valid' (click)='log(form)'>
        Submit
      </button><br/>
      <pre>
        {{ form.value | json }}
      </pre>
      </form>
      <hr/>
  </div>  
  `,
  providers: [DataService],
  /* Added for services.instance of the class DataService has to be added here.*/
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'angular demo';
  objPeople: object;
  objPosts: object;
  /* Added for services. OnInit for Services Demo. populates the objPeople/objPosts with the array of json objs.*/
  constructor(private data: DataService, private postsData: PostsService) {
  }

  ngOnInit() {
    this.objPeople = this.data.getAllGoodPeople();
    /*
    uncomment for Promises implementation:
    this.postsData.getPosts()
    .then((posts) => this.objPosts = posts);
    */
    /* Observable Implementation */
    this.postsData.getPosts()
      .subscribe(
        (data) => this.objPosts = data,
        (err) => console.log('Error', err),
        () => console.log('Complete')
      )
  }

  imgURL: string = "../assets/movie.jpg";
  imgWidth: number = 400;
  imgHeight: number = 200;
  count: number = 0;
  countValue: number = this.count;

  comments: string[] = [];
  country: string = "IN";

  today = new Date();
  pi = Math.PI;

  handleEvent() {
    alert("Counter Event");
  }

  changeTitle() {
    if (this.count % 2 == 0) {
      this.title = "Movie Quote Demo";
      this.imgURL = "../assets/movie.jpg";
      this.count++;
    } else {
      this.title = "Angular Demo";
      this.imgURL = "../assets/colorful.jpg";
      this.count++;
    }

  }

  log(form: any) {
    alert(form.controls.txtFname.value);
    alert(form.controls.txtFname.valid);
  }


}
