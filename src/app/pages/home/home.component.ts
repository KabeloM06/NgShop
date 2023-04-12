import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cols = 3;
  category: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onColumsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory;
  }

}
