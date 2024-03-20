import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings, fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrl: './my-listings.component.scss'
})
export class MyListingsComponent implements  OnInit{
  listings: Listing[] = [];

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId: string): void{
    alert(`Deleting your listing with id ${listingId}`);
  }

}
