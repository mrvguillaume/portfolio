import { Network, Server, Shield, Terminal, MonitorSmartphone, Wrench } from 'lucide-react';

export const skillsData = [
  {
    name: 'Support et mise à disposition des services informatiques',
    icon: Wrench,
    skills: [
      {
        name: 'Windows Server',
        logo: '/public/images/wserver.jpg',
        level: 2,
        description: 'Compétence acquise en BTS SIO SISR via des TP et projets.'
      },
      {
        name: 'Windows 11',
        logo: '/public/images/windows.png',
        level: 2,
        description: 'Expérience personnelle et en environnement de test. Installation, configuration système, gestion des comptes utilisateurs et dépannage.'
      },
      {
        name: 'Linux',
        logo: '/public/images/linux.jpg',
        level: 2,
        description: 'Dans le cadre du projet salle cyber BTS : installation/configuration sur Debian et Ubuntu. Expérience sur des environnements virtualisés.'
      },
      {
        name: 'GLPI',
        logo: 'https://www.sparks-formation.com/wp-content/uploads/2020/07/logo-glpi.png',
        level: 1,
        description: 'Installation et configuration de GLPI Serveur sur Linux ubunut et de GLPI client sur Windows et Linux. Utilisé dans le cadre de projets scolaires, Gestion des tickets et inventaire de parc informatique simulé.'
      },
      {
        name: 'Active Directory',
        logo: '/public/images/ad.png',
        level: 1,
        description: 'Manipulation pour le projet de la salle. Création, comptes, groupes, stratégies de sécurité et GPO.'
      },
            {
        name: 'FOG Project',
        logo: '/public/images/fog.png',
        level: 2,
        description: 'Déploiement automatisé, installé et utilisé lors de la conception du la salle.'
      },
            {
        name: 'Configuration BIOS',
        logo: '/public/images/bios.jpg',
        level: 2,
        description: 'Nécessité de configuration pour autoriser le Wake on LAN et le déploiement avec FOG Project.'
      },
    ]
  },
  {
    name: 'Administration des systèmes et des réseaux',
    icon: Network,
    skills: [
      {
        name: 'Proxmox',
        logo: 'https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_hex_400px.png',
        level: 2,
        description: 'Virtualisation de serveurs via Proxmox durant les projets de BTS. Création de VM, configuration de clusters, snapshots.'
      },
      {
        name: 'Cisco',
        logo: '/public/images/cisco.png',
        level: 2,
        description: 'TP sur Packet Tracer en BTS SIO SISR : configuration de routeurs, VLAN, adressage IP, routage statique/dynamique.'
      },
      {
        name: 'VirtualBox',
        logo: '/public/images/virtualbox.png',
        level: 2,
        description: 'Virtualisation d’OS pour tests, TP et simulations. Création de réseaux internes et machines de test.'
      },
      {
        name: 'Mikrotik',
        logo: '/public/images/mikrotik.png',
        level: 2,
        description: 'Configuration de routeur et switchs mikrotik.'
      },
    ]
  },
  {
    name: 'Automatisation et scripting',
    icon: Terminal,
    skills: [
      {
        name: 'Bash',
        logo: '/public/images/bash.png',
        level: 2,
        description: 'Scripting Linux appris en projets : configuration d’une image, installation de paquets.'
      },
      {
        name: 'Python',
        logo: '/public/images/python.png',
        level: 2,
        description: 'Développement de petits outils/scripts.'
      },
      {
        name: 'PowerShell',
        logo: '/public/images/powershell.jpg',
        level: 1,
        description: 'Utilisé pour automatiser des tâches Windows dans des environnements de TP.'
      },
    ]
  },
];
