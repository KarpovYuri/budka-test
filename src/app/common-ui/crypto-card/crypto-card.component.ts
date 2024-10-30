import { Component, Input } from '@angular/core'
import { BaseButtonComponent } from '../base-button/base-button.component'
import {NgClass} from "@angular/common";

@Component({
	selector: 'app-crypto-card',
	standalone: true,
	imports: [BaseButtonComponent, NgClass],
	templateUrl: './crypto-card.component.html',
	styleUrl: './crypto-card.component.sass',
})
export class CryptoCardComponent {
	@Input() cardData: {
		title: string
		description: string
		background: number
	} = {
		title: '',
		description: '',
		background: 1,
	}

	getClass() {
		return {
			'bg-background-1': this.cardData.background === 1,
			'bg-background-2': this.cardData.background === 2,
			'bg-background-3': this.cardData.background === 3,
		}
	}
}
