import { Component, HostBinding, inject } from '@angular/core'
import { BaseButtonComponent } from '../../common-ui/base-button/base-button.component'
import { BaseTitleComponent } from '../../common-ui/base-title/base-title.component'
import { BaseSubtitleComponent } from '../../common-ui/base-subtitle/base-subtitle.component'
import { TextCardComponent } from '../../common-ui/text-card/text-card.component'
import { SimplebarAngularModule } from 'simplebar-angular'
import { AppComponent } from '../../app.component'
import { TopMenuComponent } from '../../common-ui/top-menu/top-menu.component'
import {Router} from "@angular/router";

@Component({
	selector: 'app-first-step-page',
	standalone: true,
	imports: [
		BaseButtonComponent,
		BaseTitleComponent,
		BaseSubtitleComponent,
		TextCardComponent,
		SimplebarAngularModule,
		TopMenuComponent,
	],
	templateUrl: './first-step-page.component.html',
	styleUrl: './first-step-page.component.sass',
})
export class FirstStepPageComponent {
	@HostBinding('style.opacity') opacity = '0'
	cards: { id: number; name: string }[] = []
	appComponent = inject(AppComponent)
	selectedCardIds: number[] = []

	constructor(private router: Router) {
		this.cards = this.appComponent.getStep1Cards()
	}

	onSelectCard(cardId: number) {
		if (this.selectedCardIds.includes(cardId)) {
			this.selectedCardIds = this.selectedCardIds.filter((id) => id !== cardId)
		} else {
			this.selectedCardIds.push(cardId)
		}
	}

	ngOnInit() {
		setTimeout(() => {
			this.opacity = '100%'
		}, 0)
	}

	onNextStep() {
		this.opacity = '0'
		setTimeout(() => {
			this.router.navigate(['step2'])
		}, 500)
	}
}
