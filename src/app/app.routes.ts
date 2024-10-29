import { Routes } from '@angular/router'
import { StartPageComponent } from './pages/start-page/start-page.component'
import { FirstStepPageComponent } from './pages/first-step-page/first-step-page.component'

export const routes: Routes = [
	{
		path: '',
		component: StartPageComponent,
	},
	{
		path: 'step1',
		component: FirstStepPageComponent,
	},
]
