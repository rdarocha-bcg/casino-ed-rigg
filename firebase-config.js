/* ───────────────────────────────────────────────────────────────────
   CONFIG FIREBASE  —  à remplir (voir README.md, ~5 min)

   1. https://console.firebase.google.com  →  « Ajouter un projet » (gratuit)
   2. Dans le projet :  ⚙︎ Paramètres du projet  →  « Vos applications »  →
      icône Web  </>  →  enregistre l'app  →  copie l'objet firebaseConfig ICI.
   3. Menu « Realtime Database »  →  « Créer une base »  →  région europe  →
      démarrer en « mode test ».  Puis onglet Règles, colle EXACTEMENT :
         { "rules": { ".read": true, ".write": true } }
      (ouvert = tout le monde poste sans login = c'est le but : on peut tricher)
   4. Vérifie que databaseURL ci-dessous est bien renseigné (…-rtdb.firebaseio.com).
   ─────────────────────────────────────────────────────────────────── */
window.FIREBASE_CONFIG = {
  apiKey:      "COLLE_ICI",
  authDomain:  "TON-PROJET.firebaseapp.com",
  databaseURL: "https://TON-PROJET-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:   "TON-PROJET",
  appId:       "COLLE_ICI"
};
