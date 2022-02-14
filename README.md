
# Snoway app

Application mobile listant les  différents sentiers hivernaux présent au Québec dont la Sépaq est gestionnaire.

## 👨‍💻 Réalisé avec
[![github](https://img.shields.io/badge/brice_camus-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Voxys)
[![github](https://img.shields.io/badge/samuel_d'astous-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Poyut/)
[![github](https://img.shields.io/badge/Maxence_schroeder-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Maxence-schroeder01)

## 🔗 Liens
[![](https://img.shields.io/badge/Jeu_de_donnees-EBEBEB?style=for-the-badge&logo=databricks&logoColor=white)](https://www.donneesquebec.ca/recherche/dataset/sentiers-hivernaux/resource/540ad36a-1303-4b1a-b554-64c97d31ed7a)
[![](https://img.shields.io/badge/Figma-39ADFC?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/kbTB6I61wlw1H9jSvUQUoL/Projet-Mobile)

## 🔖 Cours Portfolio

Amélioration en cours :

- [✅] Conteneurisation des services server-side ( nodejs, postgresql, pgadmin )

- [✅] Faire un guide de mise en place du serveur ( création des volumes externes au docker-compose, importation des données des sentiers avec un script SQL )

### Guide d'utilisation :
  1 - Indiquer votre clé d'API google maps dans l'emplacement prévu dans index.html : 
 ```
  <script src="https://maps.googleapis.com/maps/api/js?key=yourgooglemapsapikey" async></script>
 ```
 
  2 - Indiquer l'IP de votre VPS dans BaseDAO :
  ```
  xhttp.open("GET", "http://IP-VPS:3000", false);
  ```
  
  
  3 - Exécuter le docker compose avec :
  ```
  sudo docker stack deploy --compose-file=<pathcompose> <nomstack>
  ```
  
  4 - Importer le script importation.sql avec pgadmin4 en vous rendant à l'IP de votre VPS
  ```
  - email : bricecamus27@gmail.com 
  - password : admin
  ```  
