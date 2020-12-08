import { Component, OnInit } from '@angular/core';
import { Auction } from 'front-end-start/src/app/auctions/model/auction';
import { AuctionService } from 'src/app/service/auction.service';

@Component({
  selector: 'app-novine',
  templateUrl: './novine.component.html',
  styleUrls: ['./novine.component.css']
})
export class NovineComponent implements OnInit {
lastAdded: Auction[];
firstToEnd: Auction[];

paramsFirstToEnd = {
  sort: 'dateEnd',
  sortDirection: 'desc',
  pageSize: 5
}

paramsLastAdded = {
  sort: 'dateStart',
  sortDirection: 'desc',
  pageSize: 5
}
  constructor(private service: AuctionService) { }

  ngOnInit(): void {
    this.getFirstToEnd();
    this.getLastAdded();
  }

  getFirstToEnd():void{
    this.service.getAuctions(this.paramsFirstToEnd).subscribe(x => this.firstToEnd = x)
  }

  getLastAdded():void{
    this.service.getAuctions(this.paramsLastAdded).subscribe(x =>
      this.lastAdded = x)
  }

}
