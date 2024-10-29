import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.sass'
})
export class StartPageComponent {
  @HostBinding('style.opacity') opacity = '0'
  @HostBinding('style.scale') scale = '0'
  ngOnInit() {
    setTimeout(() => {
      this.opacity = '100%';
      this.scale = '1';
    }, 500);
  }
}
