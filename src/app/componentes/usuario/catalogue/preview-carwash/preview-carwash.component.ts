import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-carwash',
  templateUrl: './preview-carwash.component.html',
  styleUrls: ['./preview-carwash.component.scss']
})
export class PreviewCarwashComponent {

  @Input() lavadero: any;

}
