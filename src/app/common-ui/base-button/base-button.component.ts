import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
	selector: 'app-base-button',
	standalone: true,
	imports: [NgClass],
	templateUrl: './base-button.component.html',
	styleUrl: './base-button.component.sass',
})
export class BaseButtonComponent {
	@Input() disabled: boolean = false
	@Input() fontSize: string = 'md'

	getClass() {
		return {
			'text-[17px]': this.fontSize === 'md',
			'leading-[24px]': this.fontSize === 'md',
			'font-bold': this.fontSize === 'md',
			'opacity-50': this.disabled,
			'opacity-100': !this.disabled,
			'text-[16px]': this.fontSize === 'sm',
			'leading-[150%]': this.fontSize === 'sm',
			'font-medium': this.fontSize === 'sm',
		};
	}
}
