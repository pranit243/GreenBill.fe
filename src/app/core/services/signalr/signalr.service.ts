import { Injectable } from '@angular/core';
// TODO Phase 4: Install @microsoft/signalr and implement real-time bill delivery
// npm install @microsoft/signalr

@Injectable({ providedIn: 'root' })
export class SignalRService {
  private connection: any = null;

  startConnection(_hubUrl: string, _token: string): void {
    console.warn('SignalR: install @microsoft/signalr and implement HubConnectionBuilder.');
  }

  stopConnection(): void {
    this.connection?.stop();
  }

  onBillDelivered(_callback: (billId: string) => void): void {
    // TODO: this.connection.on('BillDelivered', callback);
  }

  onPaymentStatus(_callback: (status: string) => void): void {
    // TODO: this.connection.on('PaymentStatus', callback);
  }
}
