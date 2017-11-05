import { Component, Input } from '@angular/core';
import { productInfo } from '../../app.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
// grabbing values from parent CardComponent
@Input() product: productInfo;

}
