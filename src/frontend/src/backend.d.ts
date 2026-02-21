import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Partner {
    id: bigint;
    bio: string;
    name: string;
    photoUrl: string;
    expertise: Array<string>;
}
export type Time = bigint;
export interface Contact {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface Notification {
    id: bigint;
    title: string;
    body: string;
    timestamp: Time;
    category: NotificationCategory;
}
export enum NotificationCategory {
    GST = "GST",
    Budget = "Budget",
    SEEPZ_SEZ = "SEEPZ_SEZ",
    Customs = "Customs",
    FinanceBill = "FinanceBill",
    IncomeTax = "IncomeTax",
    SEBI = "SEBI",
    FinanceMarket = "FinanceMarket"
}
export interface backendInterface {
    addNotification(title: string, body: string, category: NotificationCategory): Promise<bigint>;
    getAllContacts(): Promise<Array<Contact>>;
    getAllNotifications(): Promise<Array<Notification>>;
    getContact(id: bigint): Promise<Contact | null>;
    getContactCount(): Promise<bigint>;
    getNotification(id: bigint): Promise<Notification | null>;
    getNotificationsByCategory(category: NotificationCategory): Promise<Array<Notification>>;
    getPartners(): Promise<Array<Partner>>;
    submitContact(name: string, email: string, phone: string, message: string): Promise<bigint>;
}
