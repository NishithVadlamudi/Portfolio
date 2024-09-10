import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  userInput: string = '';
  messages: Array<{sender: string, content: string}> = [];
  isOpen: boolean = false; // Track whether the chatbot is open or closed

  constructor(private chatbotService: ChatbotService) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (this.userInput.trim() === '') return;

    this.messages.push({ sender: 'user', content: this.userInput });
    this.chatbotService.sendMessage(this.userInput).subscribe((response: any) => {
      const botMessage = response.choices[0].message.content;
      this.messages.push({ sender: 'bot', content: botMessage });
    });

    this.userInput = '';
  }
}
