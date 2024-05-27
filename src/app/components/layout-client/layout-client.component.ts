import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../../pages/banner/banner.component';
import { FootersComponent } from '../../pages/footers/footers.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout-client',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FootersComponent,BannerComponent],
  templateUrl: './layout-client.component.html',
  styleUrl: './layout-client.component.scss',
})
export class LayoutClientComponent {}
