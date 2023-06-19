import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ContactusComponent } from '../contactus/contactus.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(public dialog: MatDialog ){}
openDialog() {
  this.dialog.open(ContactusComponent, {
    data: {
      animal: 'panda',
    },
  });
}
}

