import { Component, HostBinding } from '@angular/core'
import { BaseButtonComponent } from '../../common-ui/base-button/base-button.component'
import { BaseTitleComponent } from '../../common-ui/base-title/base-title.component'
import { SimplebarAngularModule } from 'simplebar-angular'
import { Router } from '@angular/router'
import {Location, NgClass, NgOptimizedImage} from "@angular/common";

@Component({
	selector: 'app-skip-settings-page',
	standalone: true,
	imports: [
		BaseButtonComponent,
		BaseTitleComponent,
		SimplebarAngularModule,
		NgClass,
		NgOptimizedImage,
	],
	templateUrl: './skip-settings-page.component.html',
	styleUrl: './skip-settings-page.component.sass',
})
export class SkipSettingsPageComponent {
	constructor(
		private router: Router,
		private location: Location
	) {}

	cardsData = [
		{
			id: 1,
			title: 'Apple Inc',
			code: 'AAPL',
			price: '58,272.8',
			percent: '+2.67%',
			profit: false,
			icon: 'apple',
		},
		{
			id: 2,
			title: 'Tesla Inc',
			code: 'TSLA',
			price: '58,272.8',
			percent: '+2.67%',
			profit: true,
			icon: 'tesla',
		},
	]

	@HostBinding('style.opacity') opacity = '0'

	ngOnInit() {
		setTimeout(() => {
			this.opacity = '100%'
		}, 0)
	}

	goBack() {
		this.opacity = '0'
		setTimeout(() => {
			this.location.back()
		}, 500)

	}

	goFinalStep() {
		this.opacity = '0'
		setTimeout(() => {
			this.router.navigate(['step6'])
		}, 500)

	}
}
