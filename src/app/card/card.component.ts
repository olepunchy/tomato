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
  running = false;

  titleTime = "25:00";

  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  audio = new Audio();

  start() {
    this.countdown.begin();
  }

  stop() {
    this.countdown.stop();
  }

  reset() {
    this.countdown.restart();
  }

  onClick() {
    this.playClick();
    this.running = !this.running;

    if (this.running) {
      this.countdown.begin();
    } else {
      this.countdown.pause();
    }
  }

  playClick() {
    this.audio.src = "../assets/click.ogg";
    this.audio.load();
    this.audio.play();
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
