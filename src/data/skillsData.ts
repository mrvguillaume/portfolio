import { Network, Server, Shield, Terminal, MonitorSmartphone, Wrench } from 'lucide-react';

export const skillsData = [
  {
    name: 'Support et mise à disposition des services informatiques',
    icon: Wrench,
    skills: [
      {
        name: 'Windows Server',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png',
        level: 2,
        description: 'Compétence acquise en BTS SIO SISR via des TP et projets. Installation et configuration de services AD DS, DNS et DHCP sur des VM simulées.'
      },
      {
        name: 'Windows 11',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png',
        level: 2,
        description: 'Expérience personnelle et en environnement de test. Installation, configuration système, gestion des comptes utilisateurs et dépannage.'
      },
      {
        name: 'Linux',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
        level: 2,
        description: 'Dans le cadre du projet salle cyber BTS : installation/configuration sur Debian, kali et Ubuntu. Expérience sur des environnements virtualisés.'
      },
      {
        name: 'GLPI',
        logo: 'https://www.sparks-formation.com/wp-content/uploads/2020/07/logo-glpi.png',
        level: 1,
        description: 'Installation et configuration de GLPI Serveur sur Linux ubunut et de GLPI client sur Windows et Linux. Utilisé dans le cadre de projets scolaires, Gestion des tickets et inventaire de parc informatique simulé.'
      },
      {
        name: 'Active Directory',
        logo: 'https://cdn-icons-png.flaticon.com/512/2784/2784487.png',
        level: 1,
        description: 'Manipulation dans pour le projet de la salle. Création, comptes, groupes, stratégies de sécurité et GPO.'
      }
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
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
        level: 2,
        description: 'TP sur Packet Tracer en BTS SIO SISR : configuration de routeurs, VLAN, adressage IP, routage statique/dynamique.'
      },
      {
        name: 'VirtualBox',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Virtualbox_logo.png',
        level: 2,
        description: 'Virtualisation d’OS pour tests, TP et simulations. Création de réseaux internes et machines de test.'
      },
      {
        name: 'DHCP',
        logo: 'https://cdn-icons-png.flaticon.com/512/9354/9354390.png',
        level: 1,
        description: 'Configuration du DHCP sur mikrotik, Cisco, Zentyal et Ubuntu'
      }
    ]
  },
  {
    name: 'Cybersécurité des services informatiques',
    icon: Shield,
    skills: [
      {
        name: 'Wireshark',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wireshark_icon.svg/1200px-Wireshark_icon.svg.png',
        level: 2,
        description: 'Utilisé pour analyser le trafic réseau dans le cadre de TP sécurité au BTS. Observation de trames, détection d’anomalies.'
      },
      {
        name: 'Kali Linux',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/2048px-Kali-dragon-icon.svg.png',
        level: 1,
        description: 'Autoformation à l’éthique hacking. Tests basiques (Nmap, reconnaissance réseau) dans des environnements isolés.'
      },
    ]
  },
  {
    name: 'Automatisation et scripting',
    icon: Terminal,
    skills: [
      {
        name: 'Bash',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png',
        level: 2,
        description: 'Scripting Linux appris en TP et projets perso : automatisation de sauvegardes, tâches CRON, installation de paquets.'
      },
      {
        name: 'Python',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
        level: 2,
        description: 'Développement de petits outils/scripts. Appris en autoformation et utilisé dans des projets de traitement de données ou outils réseau.'
      },
      {
        name: 'PowerShell',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/PowerShell_5.0_icon.png/600px-PowerShell_5.0_icon.png',
        level: 1,
        description: 'Utilisé pour automatiser des tâches Windows (création d’utilisateurs, export CSV) dans des environnements de TP.'
      },
      {
        name: 'Ansible',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1200px-Ansible_logo.svg.png',
        level: 0,
        description: 'En cours d’apprentissage. Découverte de la configuration automatisée via YAML et playbooks.'
      }
    ]
  },
  {
    name: 'Distributions Linux',
    icon: Terminal,
    skills: [
      {
        name: 'Ubuntu Linux',
        logo: '/public/images/Ubuntu-Logo.webp',
        level: 2,
        description: 'Utilisation poussée au sein du projet de la salle. Installation manuelle, configuration fine, scripts de configuration. Installation des services majeurs.'
      },
      {
        name: 'Kali',
        logo: '/public/images/kali-logo.webp',
        level: 2,
        description: 'Utilisé comme outil de surveillance et de protection au sein de la salle cyber.'
      }
    ]
  }
];
