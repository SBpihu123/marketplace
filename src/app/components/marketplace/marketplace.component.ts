import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  location: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = ['Electronics', 'FMCG', 'Fashion', 'Home Appliances'];
  selectedCategory: string = '';
  priceRange: { min: number; max: number } = { min: 0, max: 100000 };
  searchQuery: string = '';
  locations: string[] = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];
  selectedLocation: string = '';
  showCustomizationModal: boolean = false;
  customizationProduct: Product | null = null;
  customColor: string = '#000000';
  customText: string = '';

  constructor() {
    // Mock data initialization
    this.products = [
      {
        id: 1,
        name: 'Smartphone X',
        category: 'Electronics',
        price: 15000,
        location: 'Mumbai',
        image: 'assets/images/smartphone.jpg',
        description: 'Latest smartphone with advanced features'
      },
      {
        id: 2,
        name: 'Organic Rice',
        category: 'FMCG',
        price: 450,
        location: 'Delhi',
        image: 'assets/images/rice.jpg',
        description: 'Premium quality organic rice, 5kg pack'
      },
      {
        id: 3,
        name: 'Designer Dress',
        category: 'Fashion',
        price: 2500,
        location: 'Bangalore',
        image: 'assets/images/dress.jpg',
        description: 'Elegant designer dress for special occasions'
      },
      {
        id: 4,
        name: 'Smart TV 55"',
        category: 'Electronics',
        price: 45000,
        location: 'Chennai',
        image: 'assets/images/tv.jpg',
        description: '4K Ultra HD Smart TV with voice control'
      },
      {
        id: 5,
        name: 'Washing Machine',
        category: 'Home Appliances',
        price: 25000,
        location: 'Kolkata',
        image: 'assets/images/washing-machine.jpg',
        description: 'Fully automatic front load washing machine'
      },
      {
        id: 6,
        name: 'Organic Honey',
        category: 'FMCG',
        price: 350,
        location: 'Mumbai',
        image: 'assets/images/honey.jpg',
        description: 'Pure organic honey, 500g jar'
      },
      {
        id: 7,
        name: 'Men\'s Watch',
        category: 'Fashion',
        price: 3500,
        location: 'Delhi',
        image: 'assets/images/watch.jpg',
        description: 'Stylish analog watch with leather strap'
      },
      {
        id: 8,
        name: 'Refrigerator',
        category: 'Home Appliances',
        price: 35000,
        location: 'Bangalore',
        image: 'assets/images/fridge.jpg',
        description: 'Double door refrigerator with water dispenser'
      },
      {
        id: 9,
        name: 'Laptop Pro',
        category: 'Electronics',
        price: 65000,
        location: 'Chennai',
        image: 'assets/images/laptop.jpg',
        description: 'High-performance laptop for professionals'
      },
      {
        id: 10,
        name: 'Organic Tea',
        category: 'FMCG',
        price: 250,
        location: 'Kolkata',
        image: 'assets/images/tea.jpg',
        description: 'Premium organic green tea, 100 tea bags'
      }
    ];
    this.filteredProducts = [...this.products];
  }

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesCategory = !this.selectedCategory || product.category === this.selectedCategory;
      const matchesPrice = product.price >= this.priceRange.min && product.price <= this.priceRange.max;
      const matchesLocation = !this.selectedLocation || product.location === this.selectedLocation;
      const matchesSearch = !this.searchQuery || 
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesLocation && matchesSearch;
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  onCategoryChange(): void {
    this.applyFilters();
  }

  onPriceChange(): void {
    this.applyFilters();
  }

  onLocationChange(): void {
    this.applyFilters();
  }

  buyNow(product: Product): void {
    // Mock ICICI Bank gateway integration
    console.log('Redirecting to ICICI Bank gateway for product:', product.name);
    // Implement actual payment gateway integration here
  }

  openCustomization(product: Product): void {
    this.customizationProduct = product;
    this.customColor = '#000000';
    this.customText = '';
    this.showCustomizationModal = true;
  }

  closeCustomization(): void {
    this.showCustomizationModal = false;
    this.customizationProduct = null;
  }

  saveCustomization(): void {
    // You can handle the customized data here (e.g., send to backend or add to cart)
    alert(`Customization saved for ${this.customizationProduct?.name}!\nColor: ${this.customColor}\nText: ${this.customText}`);
    this.closeCustomization();
  }
}
