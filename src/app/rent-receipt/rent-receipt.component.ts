import { Component } from '@angular/core';

import { data } from '../data';

@Component({
  selector: 'app-rent-receipt',
  templateUrl: './rent-receipt.component.html',
  styleUrls: ['./rent-receipt.component.css']
})
export class RentReceiptComponent {

  title = 'rent-receipt';

  public readonly months = getDates();

  public readonly data = data;
}

function getDates() {
  return months.map(m => [new Date(m.y + 2019, m.m - 1, 30), new Date(m.y + 2020, m.m, 29)] as [Date, Date]);
}

const months = [
  { m: 3, y: 0 },
  { m: 4, y: 0 },
  { m: 5, y: 0 },
  { m: 6, y: 0 },
  { m: 7, y: 0 },
  { m: 8, y: 0 },
  { m: 9, y: 0 },
  { m: 10, y: 0 },
  { m: 11, y: 0 },
  { m: 0, y: 1 },
  { m: 1, y: 1 },
  { m: 2, y: 1 },
];
