import { Component, HostBinding } from '@angular/core'
import { BaseButtonComponent } from '../../common-ui/base-button/base-button.component'
import { BaseTitleComponent } from '../../common-ui/base-title/base-title.component'
import { Router } from '@angular/router'
import {CryptoCardComponent} from "../../common-ui/crypto-card/crypto-card.component";
import {BaseSubtitleComponent} from "../../common-ui/base-subtitle/base-subtitle.component";

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [
		BaseButtonComponent,
		BaseTitleComponent,
		CryptoCardComponent,
		BaseSubtitleComponent,
	],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.sass',
})
export class HomePageComponent {
	constructor(private router: Router) {}

	@HostBinding('style.opacity') opacity = '0'

	ngOnInit() {
		setTimeout(() => {
			this.opacity = '100%'
		}, 0)
	}

	onNextStep() {
		this.opacity = '0'
		setTimeout(() => {
			this.router.navigate(['dashboard'])
		}, 500)
	}

	cardData = {
		title: 'Ваш криптовалютный портфель пуст',
		description: 'Добавьте криптовалюту и отслеживайте их стоимость',
		background: 1,
	}
}
