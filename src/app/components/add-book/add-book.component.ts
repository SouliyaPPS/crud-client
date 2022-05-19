import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    public fromBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.bookForm = this.fromBuilder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.crudService.AddBook(this.bookForm.value).subscribe(
      () => {
        console.log('Data Added Successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
