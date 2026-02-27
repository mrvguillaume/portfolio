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

];