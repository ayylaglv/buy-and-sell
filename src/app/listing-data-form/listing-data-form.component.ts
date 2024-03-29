import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.scss'
})
export class ListingDataFormComponent implements OnInit{
  @Input() buttonText: any = '';
  @Input() currentName: any = '';
  @Input() currentDescription: any = '';
  @Input() currentPrice: any = '';

  name: string = '';
  description: string = '';
  price: string = '';

  @Output() onSubmit: EventEmitter<Listing> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price)
    })
  }
}
