import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  imports: [BrowserModule, FormsModule, EmployeesModule, ProductsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
