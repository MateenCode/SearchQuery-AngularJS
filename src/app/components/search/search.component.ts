import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  private searchInput: FormControl = new FormControl('');

  @Output() search: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
    this.searchInput.valueChanges
    .debounceTime(300) // wait 300ms after the last event before emitting
    .distinctUntilChanged() // only emit if value is different from previous value
    .subscribe((value: string) => {
      this.search.emit(value);
    });
  }


}
