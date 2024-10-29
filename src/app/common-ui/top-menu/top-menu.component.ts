import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.sass'
})
export class TopMenuComponent {
  @Input() step: number = 1
}
