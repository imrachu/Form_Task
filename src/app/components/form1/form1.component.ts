import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  profileForm = this.fb.group({
    name: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    mobile: ['',Validators.required],
    city: ['',Validators.required],

    families: this.fb.array([
      this.fb.group({
        famName:['', Validators.required],
        relName:['',Validators.required]
      })
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm.value);
    
  }

  get families() {
    return this.profileForm.get('families') as FormArray;
  }

  newMember(){
    return this.fb.group({
      famName: '',
      relName: ''
    })
  }

  addFamily() {
    this.families.push(this.newMember());
  }
}
