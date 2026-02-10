
import React from 'react';
import { 
  ShieldCheck, 
  Car, 
  HeartPulse, 
  Home, 
  Briefcase, 
  Plane, 
  Smartphone,
  Cpu,
  Lock,
  Zap,
  UserCheck,
  Stethoscope,
  Activity,
  Umbrella
} from 'lucide-react';
import { InsuranceService, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: 'home' },
  { label: 'Seguros', href: 'seguros' },
  { label: 'Planos de Saúde', href: 'saude' },
  { label: 'Sobre Nós', href: 'sobre' },
  { label: 'Contato', href: 'contato' },
];

export const INSURANCE_SERVICES: InsuranceService[] = [
  {
    id: 'auto',
    title: 'Seguro Auto Tech',
    description: 'Monitoramento por telemetria e assistência 24h via inteligência artificial.',
    icon: 'Car',
    details: ['Cobertura Colisão/Roubo', 'Assistência Guincho Ilimitado', 'App de Gestão de Sinistro']
  },
  {
    id: 'residencial',
    title: 'Residencial Smart',
    description: 'Sua casa protegida com bônus para dispositivos de segurança inteligente.',
    icon: 'Home',
    details: ['Danos Elétricos', 'Check-up Residencial', 'Quebra de Vidros']
  },
  {
    id: 'vida',
    title: 'Vida & Futuro',
    description: 'Proteção financeira digital para sua família com capital segurado flexível.',
    icon: 'ShieldCheck',
    details: ['Doenças Graves', 'Segunda Opinião Médica', 'Indenização Rápida']
  },
  {
    id: 'empresarial',
    title: 'Business Shield',
    description: 'Gestão de riscos corporativos com foco em continuidade de negócio.',
    icon: 'Briefcase',
    details: ['Patrimonial', 'Responsabilidade Civil', 'Equipamentos Portáteis']
  },
  {
    id: 'viagem',
    title: 'Global Travel',
    description: 'Seguro viagem com cobertura global e concierge digital 24/7.',
    icon: 'Plane',
    details: ['Extravio de Bagagem', 'Despesas Médicas Internacionais', 'Cancelamento de Voo']
  }
];

export const HEALTH_PLANS = [
  {
    name: 'Consultoria Prime',
    description: 'Focada nas redes hospitalares de elite (Einstein, Sírio) entre todas as operadoras.',
    features: ['Rede Black Global', 'Maior Reembolso do Mercado', 'Gestão de Saúde VIP'],
    price: 'Comparar Melhores Preços'
  },
  {
    name: 'Consultoria Business',
    description: 'Otimização de custos para empresas comparando todas as operadoras PME e Corporate.',
    features: ['Redução de Custos Garantida', 'Saúde Ocupacional Digital', 'Gestão de Sinistralidade'],
    price: 'Solicitar Estudo'
  },
  {
    name: 'Consultoria Flex',
    description: 'A melhor relação custo-benefício do mercado para planos individuais e familiares.',
    features: ['Rede Ampla Regional', 'Telemedicina em Todas', 'Foco em Custo Reduzido'],
    price: 'Ver Opções do Mercado'
  }
];

export const IconRenderer = ({ iconName, className }: { iconName: string; className?: string }) => {
  switch (iconName) {
    case 'Car': return <Car className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Home': return <Home className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Plane': return <Plane className={className} />;
    case 'Stethoscope': return <Stethoscope className={className} />;
    case 'Activity': return <Activity className={className} />;
    default: return <Umbrella className={className} />;
  }
};
