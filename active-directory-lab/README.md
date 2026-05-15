# Laboratoire Active Directory Vulnérable – Énumération & Analyse de Risques

**Projet académique** | ENSIASD – Sécurité IT & Confiance Numérique | 2024-2025

## Contexte et objectifs

Dans le cadre de ma formation, j’ai conçu un **home lab** simulant un Active Directory (AD) volontairement vulnérable. L’objectif était de pratiquer l’énumération de services AD, d’identifier des failles de configuration et de proposer des mesures de durcissement.

Ce projet s’inscrit dans une démarche **GRC (Gouvernance, Risques, Conformité)** : il montre comment un attaquant pourrait cartographier un domaine, découvrir des groupes sensibles et préparer des attaques comme le Kerberoasting.

## Méthodologie

1. **Mise en place du laboratoire**  
   - Utilisation de **Docker** pour BloodHound CE (PostgreSQL, Neo4j)  
   - Connexion VPN à la machine cible `Attacktive Directory` (TryHackMe)

2. **Énumération passive et active**  
   - Scan des services avec `nmap` : détection des ports AD (LDAP, Kerberos, SMB, etc.)  
   - Énumération du domaine avec `enum4linux` : découverte du nom de domaine `THM-AD`, des utilisateurs, groupes et politiques.

3. **Collecte de données (tentative)**  
   - Utilisation de `bloodhound-python` pour cartographier les relations d’accès (bloquée par un problème DNS, mais investigation technique menée).

4. **Analyse des risques**  
   - Vulnérabilité majeure : **énumération anonyme possible** (révèle la structure du domaine).  
   - Groupes sensibles identifiés : `Domain Admins`, `Enterprise Admins`.

5. **Recommandations de sécurité**  
   - Durcissement des paramètres d’énumération (restreindre l’accès LDAP/SMB anonyme).  
   - Application du principe du moindre privilège.  
   - Surveillance des événements Kerberos.  
   - Utilisation de Managed Service Accounts (MSAs).  
   - Audits réguliers avec BloodHound.

## Résultats clés

| Élément découvert | Exemple |
|------------------|---------|
| Nom de domaine | `THM-AD` |
| Contrôleur de domaine | `10.80.153.200` |
| Utilisateurs énumérés | `Administrator`, `Guest`, `svc-admin` (compte de service) |
| Groupes sensibles | `Domain Admins`, `Enterprise Admins`, `Schema Admins` |
| Services exposés | LDAP (389, 636), Kerberos (88), SMB (445), DNS (53) |

## Livrables

- 📄 [Télécharger le rapport de LAB_AD (PDF)](./docs/Rapport_AD_Vulnerable_Lab.pdf)
## Compétences démontrées

- Administration et sécurisation d’Active Directory  
- Énumération réseau et services (nmap, enum4linux)  
- Analyse de risques et recommandations conformes aux référentiels (ISO 27001, NIST)  
- Investigation technique (débogage de BloodHound CE)  
- Rédaction de documentation de sécurité

## Perspectives

- Automatiser l’analyse avec BloodHound une fois le DNS résolu.  
- Simuler une attaque Kerberoasting complète.  
- Mettre en place des règles de détection sur un SIEM (Wazuh) pour ces comportements.

---

*Projet réalisé dans le cadre du module « Sécurité Active Directory » – ENSIASD 2024-2025.*
