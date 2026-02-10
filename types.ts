
export type Page = 'home' | 'seguros' | 'saude' | 'sobre' | 'contato' | 'cotacao';

export interface InsuranceService {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface NavItem {
  label: string;
  href: Page;
}
