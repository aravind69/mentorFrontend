import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatDividerModule} from '@angular/material/divider';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSelectModule} from '@angular/material/select';



import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { OrdersModule } from './orders/orders.module'

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HeaderComponent } from './header/header.component';
import { LandinglayoutComponent } from './landinglayout/landinglayout.component';
import { LoginComponent } from './login/login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { RegisterComponent } from './register/register.component';
//import { CreateOrderComponent } from './orders/create-order/create-order.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    OrdersModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ReactiveformComponent,
    HeaderComponent,
    LandinglayoutComponent,
    LoginComponent,
    StudentSignupComponent,
    RegisterComponent
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
