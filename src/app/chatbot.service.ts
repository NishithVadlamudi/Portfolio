import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = ''; // Replace with your OpenAI API key

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const data = {
      model: "gpt-4",
      messages: [{ role: "user", content: message }]
    };

    return this.http.post(this.apiUrl, data, { headers });
  }
}
