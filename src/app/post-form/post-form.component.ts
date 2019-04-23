import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() submitted = new EventEmitter();

  titleInput: string;
  thoughtInput: string;

  addThought = () => {
    this.submitted.emit({
      title: this.titleInput,
      thought: this.thoughtInput,
    });
    
    this.titleInput = null;
    this.thoughtInput = null;
  }
}

export interface event {
      title: string;
      thought: string;
}
