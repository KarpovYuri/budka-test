import {Component, Injectable} from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.sass',
})
@Injectable({
	providedIn: 'root',
})
export class AppComponent {
	step1cards: { id: number; name: string }[] = [
		{
			id: 1,
			name: 'Улучшить управление инвестициями в криптовалюте',
		},
		{
			id: 2,
			name: 'Отслеживать свой инвестиционный портфель на фондовом рынке',
		},
		{
			id: 3,
			name: 'Найти лучшие бонусы и предложения в онлайн-казино',
		},
		{
			id: 4,
			name: 'Обучиться новым навыкам в сфере бизнеса и IT',
		},
		{
			id: 5,
			name: 'Следить за новостями экономики и политики',
		},
		{
			id: 6,
			name: 'Общаться с единомышленниками и экспертами',
		},
	]

	step2cards: { id: number; name: string }[] = [
		{
			id: 1,
			name: 'Отслеживание цен и графиков',
		},
		{
			id: 2,
			name: 'Управление портфелем криптовалют',
		},
		{
			id: 3,
			name: 'Получение торговых сигналов и аналитики',
		},
		{
			id: 4,
			name: 'Обучение и новости о криптовалютах',
		},
	]

	step3cards: { id: number; name: string }[] = [
		{
			id: 1,
			name: 'Импортировать текущий портфель',
		},
		{
			id: 2,
			name: 'Начать новый портфель',
		},
		{
			id: 3,
			name: 'Получение торговых сигналов и аналитики',
		},
		{
			id: 4,
			name: 'Обучение и новости о криптовалютах',
		},
	]

	getStep1Cards() {
		return this.step1cards
	}

	getStep2Cards() {
		return this.step2cards
	}

	getStep3Cards() {
		return this.step3cards
	}
}
