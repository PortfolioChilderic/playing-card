import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true
})
export class SearchBarComponent {
  search = model<string>("Initial");

  // searchButtonClick = output({alias: 'submit'});

  // searchClick() {
  //   this.searchButtonClick.emit();
  // }
}
