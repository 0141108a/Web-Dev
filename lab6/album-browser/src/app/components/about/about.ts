import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  developerName = 'Бакыт Айганым';
  courseName = 'Web Development'; 
  groupName = 'Thursday 13-15';
  university = 'KBTU';
  currentYear = new Date().getFullYear();
  githubLink = 'https://github.com/0141108a';
}