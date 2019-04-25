import { Component, Input, EventEmitter, Output } from '@angular/core';

interface previousTitle {
  title: string
  thought: string;
  }
  
  interface previousThoughts {
  
  }

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  @Input() thought: object;
  @Output() emitToParent = new EventEmitter<object>();

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
  item: object;
  Input: boolean;
  previousTitle: string;



  addThought = () => {
    const addThought = {
      title: this.titleInput,
      thought: this.thoughtInput,
    };
    this.thoughtTitle.push(addThought);
    this.thoughtInput = null;
    this.previousTitle = null;

  }
}
