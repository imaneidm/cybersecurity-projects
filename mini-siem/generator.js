const fs = require('fs');
const path = require('path');

// Créer le dossier logs s'il n'existe pas
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

// Données réalistes pour les logs
const users = ['imane', 'user1', 'admin', 'test', 'guest'];
const actions = [
  's est connecté avec succès',
  'a échoué la connexion',
  'a modifié son profil',
  'a téléchargé un fichier',
  'a consulté le dashboard'
];

function writeLog() {
  const timestamp = new Date().toISOString();
  const level = ['INFO', 'WARN', 'ERROR'][Math.floor(Math.random() * 3)];
  const user = users[Math.floor(Math.random() * users.length)];
  const ip = `192.168.1.${Math.floor(Math.random() * 255)}`;
  const action = actions[Math.floor(Math.random() * actions.length)];
  
  const logLine = `${timestamp} ${level} ${user} ${ip} ${action}\n`;
  fs.appendFileSync('logs/app.log', logLine);
  console.log(`📝 ${logLine.trim()}`);
}

console.log('🚀 Démarrage du générateur de logs de sécurité...');
console.log('⏱️  Génération d\'un log toutes les 2 secondes...');
console.log('🛑 Appuyez sur Ctrl+C pour arrêter\n');

// Générer un log toutes les 2 secondes
setInterval(writeLog, 2000);

// Générer un premier log immédiatement
writeLog();
