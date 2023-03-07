import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  products = [
    {
      prod_id: 'P-101',
      prod_name: 'Logitech Mouse',
      prod_desc: '6 Button Mechanical Mouse',
      prod_price: 899.0,
    },

    {
      prod_id: 'P-102	',
      prod_name: 'JBL BT Speaker',
      prod_desc: 'Waterproof Radio 360 Surround',
      prod_price: 1099,
    },

    {
      prod_id: 'P-103',
      prod_name: 'Mechanical Keyboard	',
      prod_desc: 'Hot-swappable RGB Backlit	',
      prod_price: 2395.0,
    },

    {
      prod_id: 'P-104',
      prod_name: 'Oculus Meta',
      prod_desc: 'All-in-one Gaming Headset',
      prod_price: 22450.0,
    },
  ];
}
