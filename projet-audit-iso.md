# Simulateur d’Audit de Sécurité – ISO 2700x (Learn⇒Audit)

**Projet académique** | ENSIASD – Sécurité IT & Confiance Numérique | 2025/2026

## Contexte

Face à la complexité des référentiels ISO 27001 et ISO 27002, l’apprentissage de l’audit de conformité repose trop souvent sur des cours théoriques. Le manque d’environnements pratiques accessibles limite la montée en compétences des futurs auditeurs.

**Learn⇒Audit** est une application web interactive qui simule un audit de sécurité complet, guidant l’utilisateur à travers les étapes clés : planification, collecte de preuves, évaluation de conformité, et génération de rapport.

## Objectifs pédagogiques

- Comprendre les exigences des normes **ISO 27001** (SMSI) et **ISO 27002** (contrôles).
- Appliquer une méthodologie d’audit : planification, collecte, évaluation, reporting.
- Développer un outil ludique et immersif (serious game) pour la formation en cybersécurité.

## Fonctionnalités principales

| Module | Description |
|--------|-------------|
| **Scénarios d’audit** | Choix d’une entreprise fictive (secteur, taille, infrastructure) avec objectifs d’audit personnalisables. |
| **Liste des contrôles ISO 27002** | Affichage de 15 contrôles représentatifs (politique de sécurité, gestion des accès, cryptographie, sécurité physique, etc.). |
| **Collecte de preuves simulée** | Consultation de documents fictifs (politique de mots de passe, logs, captures d’écran). |
| **Évaluation de conformité** | Statut : Conforme / Partiellement conforme / Non conforme, avec justification et analyse des risques (gravité, probabilité). |
| **Gestion des risques (ISO 27005 simplifiée)** | Pour chaque non‑conformité, évaluation du risque et proposition d’un plan de traitement. |
| **Tableau de bord & KPIs** | Scores globaux, taux de conformité par catégorie, suivi des actions correctives. |
| **Génération automatique de rapport** | Export PDF récapitulant toutes les décisions et les recommandations. |

## Architecture technique

### Stack logicielle
- **Frontend** : React.js (HTML5, CSS3, JavaScript)
- **Backend** : Node.js / Express.js (API REST)
- **Base de données** : MongoDB (via Mongoose)
- **Authentification** : JWT + bcrypt
- **Génération PDF** : jsPDF, html2canvas

### Outils de développement
- Visual Studio Code
- MongoDB Compass
- Git / GitHub
- Draw.io, Mermaid (diagrammes UML)

## Diagrammes clés

> *Les schémas sont disponibles dans le rapport complet. Voici un aperçu des modèles :*

- **Diagramme de classes** – Entités : `Utilisateur`, `Auditeur`, `Entreprise`, `ControleISO27002`, `Evaluation`, `Justificatif`, `Conseil`.
- **Diagramme de cas d’utilisation** – Acteurs : Auditeur, Entreprise. Cas : s’authentifier, évaluer les contrôles, consulter le tableau de bord, exporter le rapport.
- **Diagrammes de séquence** (exemples) :
  - Authentification d’une entreprise (inscription → génération de code à 6 chiffres → validation → accès au tableau de bord).
  - Évaluation d’un contrôle par l’auditeur (sélection du contrôle → statut → justification → évaluation des risques → sauvegarde).

## Captures d’écran (à compléter)

| Page | Description |
|------|-------------|
| `home.png` | Page d’accueil avec slogan « La santé réinventée » (adapté du cas pharmaceutique) |
| `dashboard_auditeur.png` | Tableau de bord de l’auditeur avec la liste des entreprises et les scores de conformité |
| `evaluation_control.png` | Formulaire d’évaluation d’un contrôle ISO 27002 |
| `rapport_pdf.png` | Exemple de rapport d’audit exporté au format PDF |

> *Les captures d’écran réelles seront ajoutées ultérieurement. Vous pouvez insérer vos propres images dans le dossier `img/` du dépôt.*

## Résultats et apprentissages

- **Application fonctionnelle** : simulateur testé sur 3 scénarios d’entreprise (PME de services, e‑commerce, startup).
- **Couverture normative** : 15 contrôles ISO 27002 couvrant 5 domaines clés (A.5, A.9, A.12, A.14, etc.).
- **Score de conformité** : génération automatique d’un taux de conformité global (exemple : 68 %).
- **Compétences développées** :
  - Maîtrise des référentiels ISO 27001/27002.
  - Mise en œuvre d’une méthodologie d’audit de sécurité.
  - Développement full‑stack (MERN).
  - Gestion de projet et travail en équipe (5 membres).

## Perspectives d’amélioration

- Intégrer une base de données plus large de contrôles (tous les 114 contrôles ISO 27002).
- Ajouter un module d’intelligence artificielle pour proposer automatiquement des plans d’action.
- Permettre l’export du rapport au format DOCX (sous forme de checklist).

## Équipe du projet

- **Imane ID‑MOULLAY** (chef de projet, développeuse frontend)
- Hasnae L’AMRANI
- Hanane ESSAHLEY
- Youssef NADAROU
- Khaoula MARAGHI
- Hajar LAQLIB
- Walid LAHRABLI

**Encadrement** : Mme Hasnae L’AMRANI

## Accès au rapport complet

Le rapport détaillé (80+ pages) est disponible [sur demande] ou dans le dossier `/docs` du dépôt.

---

*Ce projet a été réalisé dans le cadre du module « Audit de la Sécurité des Systèmes d’Information » de l’ENSIASD – Année universitaire 2025/2026.*
