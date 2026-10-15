# 🎰 Le Casino d'Ed Rigg — mini-épreuve CTF (GitHub Pages + Firebase)

Mini-jeu pour clôturer la présentation du Top 5 du CTF. On scanne un QR code → une
**page d'avertissement anti-phishing** → une **machine à sous truquée** qu'il faut
truquer soi-même (glisser les rouleaux) → **leaderboard projeté en temps réel**.
Et comme on est dans un casino, **tricher est permis** : les malins envoient un
*Super Jackpot*. Ed Rigg (la maison) trône déjà en tête avec le sien. 🎩

## Fichiers
| Fichier | Rôle |
|---|---|
| `index.html` | La page scannée : avertissement anti-QR + la machine. Les gagnants postent leur pseudo. |
| `board.html` | Le classement live, à **projeter** (`…/board.html`). |
| `firebase-config.js` | Ta config Firebase (le « back »). À remplir. |

---

## Étape 1 — Créer le « back » (Firebase Realtime Database, gratuit, ~5 min)
1. https://console.firebase.google.com → **Ajouter un projet** (désactive Analytics, plus rapide).
2. Dans le projet : **Realtime Database** → **Créer une base** → région **europe-west1** → **Mode test**.
3. Onglet **Règles** → colle ceci → **Publier** :
   ```json
   { "rules": { ".read": true, ".write": true } }
   ```
   > Ouvert exprès : tout le monde poste sans login. C'est **le cœur du jeu** (on peut tricher).
4. **Paramètres du projet** (⚙︎) → section **Vos applications** → icône **Web `</>`** → enregistre
   l'app → copie l'objet `firebaseConfig`.
5. Colle-le dans **`firebase-config.js`** (remplace les `COLLE_ICI` / `TON-PROJET`).
   Vérifie surtout `databaseURL` (`https://…-rtdb.…firebasedatabase.app`).

## Étape 2 — Publier le « front » (GitHub Pages, ~3 min)
1. Crée un repo GitHub (public), ajoute les 4 fichiers (`index.html`, `board.html`,
   `firebase-config.js`, `README.md`).
2. Repo → **Settings** → **Pages** → *Source* = **Deploy from a branch** → `main` / `/root` → **Save**.
3. Attends ~1 min : ton site est sur `https://<user>.github.io/<repo>/`.
   - Jeu : `https://<user>.github.io/<repo>/`
   - **Classement à projeter** : `https://<user>.github.io/<repo>/board.html`

## Étape 3 — Le QR code
- Ouvre le jeu sur ton tél → bouton **▣ QR** (en haut à droite) : il affiche le QR de la page à projeter/partager.
- Ou génère-le depuis l'URL du jeu avec n'importe quel générateur de QR.

---

## Le jour J
1. Projette **`board.html`** (Ed Rigg y est déjà, en Super Jackpot 👑).
2. Affiche le **QR code** du jeu → tout le monde scanne.
3. Les gens voient l'**avertissement anti-phishing**, cliquent *Continuer*, jouent,
   **glissent les rouleaux** pour aligner 3 symboles → Jackpot → pseudo → apparition **live** au classement.
4. Les plus malins ouvrent la console et font `rig("leur_pseudo")` → **Super Jackpot** (triche assumée).

## Tester en local (optionnel)
Firebase marche aussi en local tant que le domaine est autorisé. Sers le dossier :
```bash
python3 -m http.server 8080
```
puis ouvre `http://localhost:8080/` et `http://localhost:8080/board.html`.
> Si Firebase refuse le domaine : Console Firebase → **Authentication** n'est pas requis ici
> (on n'utilise que la Realtime Database en lecture/écriture publique), donc ça marche direct.

## Remettre le classement à zéro
Console Firebase → Realtime Database → supprime le nœud **`jackpots`**. Ed Rigg, lui, est codé en dur : il revient toujours. 🎩
