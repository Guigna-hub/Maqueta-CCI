import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('containerOuter02') containerOuterRef!: ElementRef;
  @ViewChild('textContainer02') textContainerRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.adjustContainerHeight();
  }

  adjustContainerHeight(): void {
    const textContainerHeight = this.textContainerRef.nativeElement.offsetHeight;
    this.containerOuterRef.nativeElement.style.minHeight = `${textContainerHeight}px`;
  }
}