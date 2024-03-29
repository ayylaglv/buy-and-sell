import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.scss'
})
export class ListingPageComponent implements OnInit{
  listings: Listing[] = [];

  ngOnInit(): void {
    this.listings = fakeListings;
  }

}
