import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internship-block',
  templateUrl: './internship-block.component.html',
  styleUrls: ['./internship-block.component.css'],

})
export class InternshipBlockComponent {
  constructor() {

  }

  // Array with strings in it
  list: string[] = [
    "Super vet design system maken",
    "Zo nu en dan een biertje",
    "Planmatig werken",
    "Communiceren",
    "Eindverslag schrijven",
  ]

  // Input text value
  textValue: string = ""

  // Function to show or hide the input field
  showMe: boolean = false
  showInput() {
    this.showMe = true
  }

  // Function to add an li and hide the input field
  addItem() {
    this.list.push(this.textValue)
    this.showMe = false
  }

  // function to remove the item you press on
  removeItem(item: string) {

    // get index number of item
    const index: number = this.list.indexOf(item)

    // delete item with found index from array
    this.list.splice(index, 1)
  }

  // Function button popup text
  popup() {
    alert("Gefeliciteerd")
  }
}
