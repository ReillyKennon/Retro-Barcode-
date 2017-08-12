import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Declare variable
  list: Array<string>

  ngOnInit() {
    {
      this.list = [
        'Aqua', 'Aquamarine', 'Auze', 'BlueViolet', 'Chartreuse',
        'CornflowerBlue', 'Crimson', 'Indigo', 'LawnGreen', 'Red'
      ]
      for (let i = 0; i < this.list.length; i++) {
        let swap = Math.floor(Math.random() * (this.list.length + 1))
        let temp = this.list[i]
        this.list[i] = this.list[swap]
        this.list[swap] = temp
      }
      return this.list
    }
  }
}
