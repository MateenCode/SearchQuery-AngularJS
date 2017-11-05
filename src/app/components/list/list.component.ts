import { Component, Input } from '@angular/core';
//importing interface
import { productInfo} from '../../interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

// grabbing values from parent component "app"
  @Input() products: Array<productInfo>;

}
