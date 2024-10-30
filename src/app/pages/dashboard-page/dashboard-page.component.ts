import { Component, HostBinding } from '@angular/core'
import { BaseButtonComponent } from '../../common-ui/base-button/base-button.component'
import { CryptoCardComponent } from '../../common-ui/crypto-card/crypto-card.component'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
	selector: 'app-dashboard-page',
	standalone: true,
	imports: [BaseButtonComponent, CryptoCardComponent, SimplebarAngularModule],
	templateUrl: './dashboard-page.component.html',
	styleUrl: './dashboard-page.component.sass',
})
export class DashboardPageComponent {
	@HostBinding('style.opacity') opacity = '0'

	ngOnInit() {
		setTimeout(() => {
			this.opacity = '100%'
		}, 0)
	}

	cardData = [
		{
			id: 1,
			title: 'Ваш криптовалютный портфель пуст',
			description: 'Добавьте криптовалюту и отслеживайте их стоимость',
			background: 1,
		},
		{
			id: 2,
			title: 'Ваш криптовалютный портфель пуст',
			description: 'Добавьте криптовалюту и отслеживайте их стоимость',
			background: 2,
		},
		{
			id: 3,
			title: 'Ваш криптовалютный портфель пуст',
			description: 'Добавьте криптовалюту и отслеживайте их стоимость',
			background: 3,
		},
	]
}
