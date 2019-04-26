import { Component, Input } from '@angular/core';
 
interface previousThoughts {
  thought: string;
}

interface previousTitle {
  title: string;
  thought: string;
}

@Component({
  selector: 'app-root', 
  templateUrl: './socialPosts.component.html',
  styleUrls: ['./socialPosts.component.css']
})
export class AppComponent {
  header = 'SocialPost';
  thoughtInput: string;
  previousTitle: string;
  previousThoughts: string;
  postInput: string;
  titleInput: string;
  hideTitle: boolean = true;
  title: string;
  thought: string;

  
  thoughtTitle: previousTitle[] = [
    {title: 'Dog', thought: 'Where am I?'},
    {title: 'Cat', thought: 'Who is this?'},
    {title: 'Pig', thought: 'What am I doing?'},
    {title: 'Cow', thought: 'Who are you'},
    {title: 'Whale', thought: 'Why are you here?'},
  ];

  thoughtList: previousThoughts[] = [
  
  ];

  onSubmit(eventArgs){
    this.thoughtTitle.push(eventArgs);
  }

  // addThought = () => {
  //   const newThought = {
  //     title: this.titleInput,
  //     thought: this.thoughtInput,
  //   };
  //   this.thoughtTitle.push(newThought);
  //   this.thoughtInput = null;
  //   this.previousTitle = null;

  // }
  

  // addTitle = () => {
  //   const addTitle = {
  //     title: this.titleInput,
  //   };
  //   this.thoughtTitle.push(addTitle);
  //   this.titleInput = null;
  // }

  // toggleSection = () => {
  //   this.hideTitle = !this.hideTitle;
  // };
}
