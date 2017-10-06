

Angular Reactive Form
---------------------

**USAGE**

> *app.module.ts*

    import {FormsModule, ReactiveFormsModule} from '@angular/forms';

    imports: [
	        FormsModule,
	        ReactiveFormsModule]

> new.component.ts

    import {FormBuilder, FormGroup, Validators} from '@angular/forms';



      constructor(private fb: FormBuilder) {
        this.rform = fb.group({
          'name': [null, Validators.required],
		  'job': [null,
		  Validators.compose([Validators.required, Validators.minLength(30)])],
        })
      }

> HTML

       <div *ngIf="!name">
      <form [formGroup]="rform" (ngSubmit)="addPost(rform.value)">
        <div class="form-container">
          <div class="row columns">
            <h1>Reactive Form</h1>
            <label>Name
    
           <input type="text" formControlName="name">
            </label>
    	      <div class="alert" *ngIf="!rform.controls['name'].valid">This Field is required</div>
            <label>job
    
              <textarea formControlName="job"></textarea>
            </label>
            <div class="alert" *ngIf="!rform.controls['job'].valid">min character length 30 required</div>
    
            <input type="submit" class="button expanded" value="submit Form" [disabled]="!rform.valid">
          </div>
    
        </div>
      </form>
    </div>


> css

        .form-container {
      display:block;
      width:90%;
      padding:2em;
      margin: 2em auto;
      background:#fff;
    }
    
    .alert {
      background: #f2edda;
      padding: 7px;
      font-size: .9em;
      margin-bottom: 20px;
      display: inline-block;
      animation: 2s alertAnim forwards;
    }
    
    .button {
      margin-top: 3rem;
    }
    h1 {
      margin-bottom: 2rem;
      font-weight:bold;
      font-family:'Muli';
      font-size: 2em;
    }
    
    
    @keyframes alertAnim {
      from {
          opacity:0;
          transform: translateY(-20px);
      }
      to {
          opacity:1;
          transform: translateY(0);
      }
    }


