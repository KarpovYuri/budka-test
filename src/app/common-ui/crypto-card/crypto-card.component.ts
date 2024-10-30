import { Component, Input } from '@angular/core'
import { BaseButtonComponent } from '../base-button/base-button.component'

@Component({
	selector: 'app-crypto-card',
	standalone: true,
	imports: [BaseButtonComponent],
	templateUrl: './crypto-card.component.html',
	styleUrl: './crypto-card.component.sass',
})
export class CryptoCardComponent {
	@Input() cardData: { title: string; description: string } = {
		title: '',
		description: '',
	}
}
