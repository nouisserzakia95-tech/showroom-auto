import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() autos: Auto[] = []
  @Output() onSelectCar = new EventEmitter<Auto>()
  selectedAutos: Auto[] = []

  ngOnInit() {
    this.selectedAutos = this.autos
  }

  selectAutos(search: string){
    const term = search.trim().toLowerCase()

    if(term){
      this.selectedAutos = this.autos.filter(auto =>
        `${auto.brand} ${auto.model}`.toLowerCase().includes(term)
      )
    }else{
      this.selectedAutos = this.autos
    }
  }

  selectCar(auto: Auto){
    this.onSelectCar.emit(auto)
  }
}