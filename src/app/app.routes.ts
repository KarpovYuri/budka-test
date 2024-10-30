import { Routes } from '@angular/router'
import { StartPageComponent } from './pages/start-page/start-page.component'
import { FirstStepPageComponent } from './pages/first-step-page/first-step-page.component'
import {SecondStepPageComponent} from "./pages/second-step-page/second-step-page.component";
import {ThirdStepPageComponent} from "./pages/third-step-page/third-step-page.component";
import {SixthStepPageComponent} from "./pages/sixth-step-page/sixth-step-page.component";
import {SkipSettingsPageComponent} from "./pages/skip-settings-page/skip-settings-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";

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
	{
		path: 'step6',
		component: SixthStepPageComponent,
	},
	{
		path: 'skip-settings',
		component: SkipSettingsPageComponent,
	},
	{
		path: 'home',
		component: HomePageComponent,
	},
	{
		path: 'dashboard',
		component: DashboardPageComponent,
	},
]
