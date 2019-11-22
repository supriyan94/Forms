import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMenuData } from '../interface';

@Component({
  selector: 'app-menuform',
  templateUrl: './menuform.component.html',
  styleUrls: ['./menuform.component.css']
})
export class MenuformComponent implements OnInit {
  menuFormGroup: FormGroup;
  menuData: IMenuData[];
  menuNameValid = false;

  constructor( private _fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    // this.menuFormGroup.controls.menuName.valueChanges.subscribe(res => {
    //   console.log(res);
    //   if (res.length > 10) {
    //     this.menuNameValid = true;
    //   } else {
    //     this.menuNameValid = false;
    //   }
    // });
  }

  private buildForm() {
    this.menuFormGroup = this._fb.group({
      menuName: ['', Validators.required],
      menuDescription: [''],
      linkPage: ['']
    });
  }

  onSubmit() {
    console.log(this.menuFormGroup);
    console.log(this.menuFormGroup.value);
  }

}
