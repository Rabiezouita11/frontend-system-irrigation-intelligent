import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$!: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://backend-system-irrigation-intelligent.onrender.com'); // Replace with your WebSocket server URL
  }
  getSocket() {
    return this.socket$;
  }
}
