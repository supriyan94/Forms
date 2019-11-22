import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMenuData } from '../interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  // userModel = new Interface('id', 'menuName', 'linkPage','user', 'admin','menuDescription', 'cellija', 'menuMeta', 'content_body', 'image');
  menuFormGroup: FormGroup;
  menuData: IMenuData[];
  loading: boolean;
  // menuNameValid = false;
  constructor(private _dataService: DataService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.getData();

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
      menuDescription: [this.menuData[0].menuDescription],
      linkPage: ['']
    });
  }

  getData() {
    this.loading = true;
    this._dataService.getData().subscribe((res) => {
      // this._dataService.menuList = res['menu'].data;
      this.menuData = res['menu'].data;
      console.log(this.menuData);
      this.buildForm();
      this.loading = false;
      // console.log(res['menu'].data[0]);
    }
    );
  }
  onSubmit() {
    console.log(this.menuFormGroup);
    console.log(this.menuFormGroup.value);
    // {
    //  this._dataService.getData(this.userModel).subscribe(
    //    data => console.log('success', data),
    //    error => console.log('error', error)
    //  );
    // }
    // this._dataService.getData().subscribe((res) => {
    //   this._dataService.menuList = res['menu'].data;
    //   console.log(res);
    // }
    // );
  }
}
