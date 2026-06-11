export const techWatchData = [
  {
    title: "L'alerte CERTFR-2024-ACT-035",
    description: `Cette alerte revient sur une compromission permettant à un attaquant de prendre le contrôle total et invisible des serveurs Linux à distance, transformant une bibliothèque de confiance en une porte dérobée vers le cœur du système.

Points clés observés :
- Nature de l'attaque : Il s'agit d'une compromission de la chaîne d'approvisionnement (Supply Chain) par l'injection de code malveillant dans la bibliothèque de compression liblzma.
- Gravité extrême : La faille (CVE-2024-3094) possède un score de criticité de 10/10, permettant une exécution de code à distance avec les privilèges ROOT.
- Cible technique : La backdoor détourne le processus d'authentification du service OpenSSH en exploitant une dépendance indirecte via systemd.
- Indice de détection : La menace a été identifiée grâce à une anomalie de performance, notamment une latence inhabituelle de 500 ms lors des connexions SSH.
- Périmètre d'impact : Seules les versions 5.6.0 et 5.6.1 de XZ Utils sont infectées, touchant principalement des distributions Linux en version "Rolling Release" (ex: Debian Sid, Fedora Rawhide).
- Remédiation immédiate : Le CERT-FR préconise l'arrêt des services exposés et le downgrade (retour arrière) immédiat vers une version saine de la bibliothèque (ex: 5.4.6).

Impact pour les infrastructures :
L'impact majeur est une perte totale de contrôle de l'infrastructure, permettant à un attaquant d'obtenir un accès ROOT indétectable sur les serveurs Linux exposés pour exfiltrer des données ou paralyser le réseau.`,
    image: "/public/images/anssi.png",
    date: "Avril 2025",
    tags: ["ANSSI", "Cybersécurité"],
    url: "https://www.cert.ssi.gouv.fr/actualite/CERTFR-2024-ACT-035/",
    category: "Cybersécurité"
  },
  {
    title: "Veille réglementaire cybersécurité UE : CRA, DORA, NIS2 (2024-2026)",
    description: `Cette veille recense les principales évolutions réglementaires européennes en cybersécurité (CRA, DORA, NIS2) entre 2024 et 2026, leurs échéances de mise en conformité, ainsi que les principales menaces et pistes d'action pour les entreprises et infrastructures françaises.

Points clés observés :
- CRA (Cyber Resilience Act) : entré en vigueur déc. 2024, application progressive jusqu'en 2027. Échéance clé : 11 sept. 2026 – obligation de notifier vulnérabilités (24h) et incidents graves (72h) via la plateforme ENISA, sous peine d'amendes jusqu'à 15 M€ ou 2,5% du CA. Marquage CE cybersécurité obligatoire fin 2027.
- DORA : applicable depuis le 17 janv. 2025, ~22 000 entités financières UE concernées. Registres d'information remis à l'AMF/ACPR (avril 2025). Exige tests de résilience (TLPT) et gestion des risques TIC.
- NIS2 : retard de transposition en France (procédure d'infraction de la Commission). ~15 000 entités concernées (catégories Essentielles/Importantes), notification à l'ANSSI sous 24h, amendes jusqu'à 10 M€ ou 2% du CA. Loi française toujours en cours début 2026, application attendue mi-2026. Bilan nov. 2025 : seulement 40% des PME ont des procédures d'incident complètes.
- Menaces (ENISA 2025) : phishing (60%), DDoS (76,7%, France 1ère cible européenne pour l'administration), rançongiciels Akira/Qilin/FOG en hausse dans l'industrie.
- Actions prioritaires : gap analysis CRA/DORA/NIS2, SBOM, processus de notification 24h/72h, renforcement anti-phishing/DDoS, s'enregistrer sur MonEspaceNIS2.

Impact pour les infrastructures :
Menaces concrètes : la France est la 1ère cible européenne des DDoS visant l'administration publique (27% des incidents), et les rançongiciels ciblent fortement le secteur manufacturier — deux vecteurs qui visent directement la continuité des infrastructures.
Conséquence pratique : les opérateurs d'infrastructures doivent anticiper des investissements significatifs (détection d'intrusion EDR/XDR, plans de continuité, formation), alors que le bilan 2025 montre un retard d'investissement persistant chez les PME/TPE du secteur..`,
    image: "/images/veille.png",
    date: "Avril 2025",
    tags: ["", "Cybersécurité"],
    url: "",
    category: "Cybersécurité"
  },

];