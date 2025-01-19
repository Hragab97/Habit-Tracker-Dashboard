import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component'
import { HabitsComponent } from './features/habits/habits.component'
import { ReportsComponent } from './features/reports/reports/reports.component'
import { SettingsComponent } from './features/settings/settings/settings.component'

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, title:'Dashboard' },
  { path: 'habits', component: HabitsComponent, title: 'Habits' },
  { path: 'reports',component: ReportsComponent, title: 'Reports' },
  { path: 'settings', component: SettingsComponent, title: 'Settings' }
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  ];
