import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CountdownComponent, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  totalSeconds = 1500; // 25 minutes

  titleTime = "25:00";

  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;

  start() {
    this.countdown.begin();
  }

  stop() {
    this.countdown.stop();
  }

  reset() {
    this.countdown.restart();
  }

  handleCountDown(event: CountdownEvent) {
    this.titleService.setTitle(event.text);
  }

  constructor(private titleService: Title) { 
    this.titleService.setTitle(this.titleTime);
  }

  ngOnInit(): void {
  }

}
