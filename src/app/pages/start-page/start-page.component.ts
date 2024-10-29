import { Component, HostBinding } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-start-page',
	standalone: true,
	imports: [],
	templateUrl: './start-page.component.html',
	styleUrl: './start-page.component.sass',
})
export class StartPageComponent {
	constructor(private router: Router) {}
	@HostBinding('style.opacity') opacity = '0'
	@HostBinding('style.scale') scale = '0'
	ngOnInit() {
		setTimeout(() => {
			this.opacity = '100%'
			this.scale = '1'
		}, 500)
		setTimeout(() => {
			this.opacity = '0'
		}, 2500)
		setTimeout(() => {
			this.router.navigate(['step1'])
		}, 3500)
	}
}
