import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
	selector: 'app-text-card',
	standalone: true,
	imports: [NgClass],
	templateUrl: './text-card.component.html',
	styleUrl: './text-card.component.sass',
})
export class TextCardComponent {
	@Input() selected: boolean = false
}
