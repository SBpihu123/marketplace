import { Routes } from '@angular/router';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';

export const routes: Routes = [
  { path: '', redirectTo: '/marketplace', pathMatch: 'full' },
  { path: 'marketplace', component: MarketplaceComponent }
];
