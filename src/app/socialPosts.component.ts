import { Component, Input } from '@angular/core';
 
interface previousThoughts {
  thought: string;
}

// interface previousTitle {
//   title: string;
// }

@Component({
  selector: 'app-root', 
  templateUrl: './socialPosts.component.html',
  styleUrls: ['./socialPosts.component.css']
})
export class AppComponent {
  title = 'SocialPost';
  thoughtInput: string;
  previousTitle: string;
  previousThoughts: string;
  postInput: string;
  titleInput: string;
  hideTitle: boolean = true;
  
  // thoughtTitle: previousTitle[] = [
  //   {title: 'Dog'},
  //   {title: 'Cat'},
  //   {title: 'Pig'},
  //   {title: 'Cow'},
  //   {title: 'Whale'},
  // ];


  thoughtList: previousThoughts[] = [
    {thought: 'Where am I?'},
    {thought: 'Who is this?'},
    {thought: 'What am I doing?'},
    {thought: 'Who are you'},
    {thought: 'Why are you here?'},
  ];

  onSubmittEvent(eventArgs){
    this.thoughtList.push(eventArgs);
  }

  addThought = () => {
    const newThought = {
      thought: this.thoughtInput,
    };
    this.thoughtList.push(newThought);
    this.thoughtInput = null;
  }

  // addTitle = () => {
  //   const addTitle = {
  //     title: this.titleInput,
  //   };
  //   this.thoughtTitle.push(addTitle);
  //   this.titleInput = null;
  // }

  toggleSection = () => {
    this.hideTitle = !this.hideTitle;
  };
}
