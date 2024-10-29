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
}
