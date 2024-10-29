import { Component, HostBinding, inject } from '@angular/core'
import { AppComponent } from '../../app.component'
import {BaseButtonComponent} from "../../common-ui/base-button/base-button.component";
import {BaseSubtitleComponent} from "../../common-ui/base-subtitle/base-subtitle.component";
import {BaseTitleComponent} from "../../common-ui/base-title/base-title.component";
import {SimplebarAngularModule} from "simplebar-angular";
import {TextCardComponent} from "../../common-ui/text-card/text-card.component";
import {TopMenuComponent} from "../../common-ui/top-menu/top-menu.component";

@Component({
	selector: 'app-second-step-page',
	standalone: true,
	imports: [
		BaseButtonComponent,
		BaseSubtitleComponent,
		BaseTitleComponent,
		SimplebarAngularModule,
		TextCardComponent,
		TopMenuComponent,
	],
	templateUrl: './second-step-page.component.html',
	styleUrl: './second-step-page.component.sass',
})
export class SecondStepPageComponent {
	@HostBinding('style.opacity') opacity = '0'
	cards: { id: number; name: string }[] = []
	appComponent = inject(AppComponent)
	selectedCardIds: number[] = []

	constructor() {
		this.cards = this.appComponent.getStep2Cards()
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
}
