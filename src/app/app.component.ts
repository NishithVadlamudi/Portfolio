import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Accessing the different sections
  @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;
  @ViewChild('projectsSection', { static: false }) projectsSection!: ElementRef;
  @ViewChild('contactSection', { static: false }) contactSection!: ElementRef;

  // Scroll to the respective section
  scrollToSection(section: string) {
    let element: ElementRef | undefined;
    
    if (section === 'aboutSection') {
      element = this.aboutSection;
    } else if (section === 'projectsSection') {
      element = this.projectsSection;
    } else if (section === 'contactSection') {
      element = this.contactSection;
    }

    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
