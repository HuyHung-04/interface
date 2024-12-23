import { Routes } from '@angular/router';
import { BanhangComponent } from './banhang/banhang.component'; 
// cấu hình đường dẫn
export const routes: Routes = [
  { path: '', redirectTo: 'banhang', pathMatch: 'full' }, // Chuyển hướng về banhang
  { path: 'banhang', component: BanhangComponent } // Route đến DashboardComponent
];
