import { Component, Output, EventEmitter } from '@angular/core';

interface previousTitle {
title: string;
thought: string;
}

interface previousThoughts {

}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Output() submitted = new EventEmitter();

  thoughtTitle: previousTitle[] = [
    {title: 'Dog', thought: 'Where am I?'},
    {title: 'Cat', thought: 'Who is this?'},
    {title: 'Pig', thought: 'What am I doing?'},
    {title: 'Cow', thought: 'Who are you'},
    {title: 'Whale', thought: 'Why are you here?'},
  ];

  thoughtList: previousThoughts[] = [
  ];

  titleInput: string;
  thoughtInput: string;
  hideTitle: boolean;

  Input: boolean;
  previousTitle: string;

  addThought = () => {
    const newThought = {
      title: this.titleInput,
      thought: this.thoughtInput,
    };
    this.submitted.emit(newThought);
    this.thoughtInput = null;
    this.titleInput = null;

  }

  toggleSection = () => {
    this.hideTitle = !this.hideTitle;
  };
  
}

export interface event {
      title: string;
      thought: string;
}
