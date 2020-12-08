import { Component, OnInit } from '@angular/core';
import { Auction } from 'front-end-start/src/app/auctions/model/auction';
import { Category } from 'front-end-start/src/app/auctions/model/category';
import { AuctionService } from '../service/auction.service';

@Component({
  selector: 'app-pretraga',
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css'],
})
export class PretragaComponent implements OnInit {
  auctions: Auction[];
  count: number;
  categories: Category[];
  category: string;
  subcategories: string[];
  disableLoadBtn: boolean = false;

  params = {
    page: 1,
    pageSize: 5,
    filter: {
      name: '',
      category: '',
    },
  };

  constructor(private service: AuctionService) {}

  ngOnInit(): void {
    this.getAuctions();
    this.getCount();
    this.getCategories();
  }

  getAuctions(): void {
    this.service.getAuctions(this.params).subscribe((x) =>
      this.auctions = x);
  }

  getCount(): void {
    this.service.getAuctions().subscribe((x) => (this.count = x.length));
  }

  getCategories(): void {
    this.service.getCategories().subscribe((x) => (this.categories = x));
  }

  setSubcategory() {
    for (var i = 0; i < this.categories.length; i++) {
      if (this.category === this.categories[i].name) {
        this.subcategories = this.categories[i].subcategories;
      }
    }
  }

  loadMore(): void {
    this.params.pageSize += 5;
    if (this.params.pageSize <= this.count) {
      this.getAuctions();
    }
    if (this.params.pageSize > this.count) {
      this.disableLoadBtn = true;
    }
  }
}
