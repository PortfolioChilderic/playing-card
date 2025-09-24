import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-monster-confirmation-dialog',
  imports: [MatDialogActions, MatDialogTitle, MatDialogClose, MatDialogContent, MatButton],
  templateUrl: './delete-monster-confirmation-dialog.html',
  styleUrl: './delete-monster-confirmation-dialog.scss'
})
export class DeleteMonsterConfirmationDialog {

}
