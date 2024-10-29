import { Component, HostBinding, inject } from '@angular/core'
import { BaseButtonComponent } from '../../common-ui/base-button/base-button.component'
import { BaseSubtitleComponent } from '../../common-ui/base-subtitle/base-subtitle.component'
import { BaseTitleComponent } from '../../common-ui/base-title/base-title.component'
import { SimplebarAngularModule } from 'simplebar-angular'
import { TextCardComponent } from '../../common-ui/text-card/text-card.component'
import { TopMenuComponent } from '../../common-ui/top-menu/top-menu.component'
import { AppComponent } from '../../app.component'
import { Router } from '@angular/router'

@Component({
	selector: 'app-sixth-step-page',
	standalone: true,
	imports: [
		BaseButtonComponent,
		BaseSubtitleComponent,
		BaseTitleComponent,
		SimplebarAngularModule,
		TextCardComponent,
		TopMenuComponent,
	],
	templateUrl: './sixth-step-page.component.html',
	styleUrl: './sixth-step-page.component.sass',
})
export class SixthStepPageComponent {
	@HostBinding('style.opacity') opacity = '0'

	ngOnInit() {
		setTimeout(() => {
			this.opacity = '100%'
		}, 0)
	}
}
