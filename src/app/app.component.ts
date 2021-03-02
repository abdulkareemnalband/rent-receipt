import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    class: 'm-2'
  }
})
export class AppComponent {
  title = 'rent-receipt';

  public readonly months = getDates();

  name = 'AbdulKareem Saleem Nalband';
  address = '#77 , 1st cross , Reliable Residency Phase 3, Haraluru , Benguluru 560102 , KAR,IND';
  landlord = "Imtiyaz Ron"
}

function getDates() {
  return months.map(m => [new Date(m.y + 2019, m.m - 1, 30), new Date(m.y + 2019, m.m, 29)] as [Date, Date])
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
