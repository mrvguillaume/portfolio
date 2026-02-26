export interface Education {
  id: string;
  title: string;
  school: string;
  logo: string;
  period: string;
  description: string;
  status: 'completed' | 'ongoing' | 'incomplete';
  mention?: string;
  skills?: string[];
  reason?: string;
}

export const educationData: Education[] = [
  // ton contenu ici
  {
    id: 'bts-sio',
    title: 'BTS SIO – Option SISR',
    school: 'SIO, Brest',
    logo: '/images/ipssi.webp',
    period: '2024–2026',
    description: 'Brevet de Technicien Supérieur Services Informatiques aux Organisations, spécialité Solutions d’Infrastructure, Systèmes et Réseaux. Formation orientée administration réseau, cybersécurité et gestion de systèmes d’information.',
    status: 'ongoing',
    skills: [
      'Administration systèmes (Windows / Linux)',
      'Concéption d’une salle informatique',
      'Gestion de réseaux (Cisco, Mikrotik, Linux)',
      'Sécurité des infrastructures (Proxy, Pare-feu)',
      'Virtualisation (VMware, Proxmox)',
      'Support utilisateur (GLPI, TeamViewer)',
      'Scripts d’automatisation (Bash, PowerShell)'
    ]
  },
  {
    id: 'BAC Générale',
    title: 'Baccalauréat Générale – Option AMCE et HGGSP',
    school: 'Lycée Saint Martin Rennes',
    logo: '/images/logo-jf.webp',
    period: '2020-2023',
    description: '',
    status: 'completed',
  }
];