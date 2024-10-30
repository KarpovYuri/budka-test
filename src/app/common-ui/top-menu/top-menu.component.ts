import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-top-menu',
	standalone: true,
	imports: [],
	templateUrl: './top-menu.component.html',
	styleUrl: './top-menu.component.sass',
})
export class TopMenuComponent {
	constructor(private router: Router) {}

	@Input() step: number = 1
	@Output() stepSettings = new EventEmitter<boolean>()

	onSkipSettings() {
		this.stepSettings.emit(true)
	}
}
