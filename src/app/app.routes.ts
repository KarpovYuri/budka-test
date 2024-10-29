import { Routes } from '@angular/router'
import { StartPageComponent } from './pages/start-page/start-page.component'
import { FirstStepPageComponent } from './pages/first-step-page/first-step-page.component'
import {SecondStepPageComponent} from "./pages/second-step-page/second-step-page.component";
import {ThirdStepPageComponent} from "./pages/third-step-page/third-step-page.component";

export const routes: Routes = [
	{
		path: '',
		component: StartPageComponent,
	},
	{
		path: 'step1',
		component: FirstStepPageComponent,
	},
	{
		path: 'step2',
		component: SecondStepPageComponent,
	},
	{
		path: 'step3',
		component: ThirdStepPageComponent,
	},
]
