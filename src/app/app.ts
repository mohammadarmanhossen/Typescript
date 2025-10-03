import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Studnetclass } from "./StudentComponent/studnetclass/studnetclass";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Studnetclass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
