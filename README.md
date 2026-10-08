# CarLogBook

Application de suivi de véhicule en HTML/CSS/JavaScript, conçue pour une utilisation mobile Android.

## Sauvegarde et synchronisation

Les véhicules, pleins, interventions, échéances, achats, liens de documents, types d'intervention et données de suivi d'entretien sont enregistrés dans le navigateur et synchronisés dans un fichier `carlogbook-shared.json` sur Google Drive.

La première connexion se fait avec **Se connecter à Google Drive**. Après activation, l'application redemande automatiquement l'autorisation à Google à l'ouverture ou à l'actualisation, comme YamsScorer ; les modifications et suppressions sont ensuite envoyées à Drive après un court délai. La synchronisation reprend aussi au retour sur la page tant que le jeton d'accès est valide. Si le navigateur bloque la fenêtre OAuth automatique, touchez le bouton Google Drive pour autoriser la reconnexion. La synchronisation nécessite une connexion Internet. Les documents ne sont jamais téléversés : seuls leurs liens sont enregistrés.

L'application utilise le client OAuth Google Identity Services configuré dans `index.html`. L'origine HTTPS utilisée par CarLogBook doit être ajoutée aux **origines JavaScript autorisées** du client OAuth Google. Une connexion OAuth n'est pas disponible depuis une page `file://`.

Les boutons **Exporter en JSON** et **Importer un JSON** permettent de conserver ou transférer une sauvegarde manuellement. L'import fusionne les entrées identifiées et conserve les données les plus récentes pour les échéances et informations de synthèse. Chaque historique propose aussi une suppression avec confirmation ; les suppressions sont conservées lors de la fusion avec Google Drive.

## Mode de test

Ouvrir `index.html?test=1` pour afficher les données de démonstration intégrées à l'application. Le Scénic comprend également trois coûts divers de démonstration, tous liés au parking. Comme dans YamsScorer, ce mode ne lit ni n'écrit les données enregistrées, et désactive l'import et la synchronisation Google Drive. L'export JSON reste disponible pour exporter les données de démonstration.

Hors mode de test, les données de démonstration ne sont pas préchargées ; les véhicules commencent avec des listes vides.

## Gestion des véhicules

Le bouton **Véhicules**, à côté du sélecteur, permet d'ajouter un véhicule, de modifier son nom ou de le supprimer. La suppression demande deux confirmations successives et efface définitivement toutes les données associées ; il faut conserver au moins un véhicule. Les suppressions sont également propagées lors de la synchronisation Google Drive.

## Historique des interventions

Une intervention peut être associée à plusieurs types à la fois, par exemple une vidange, des pneus et une courroie réalisés le même jour. Sélectionnez les tuiles correspondantes ; les types apparaissent dans l’historique, sont filtrables individuellement et sont affichés de façon compacte sur le graphique. Touchez une ligne de l’historique pour consulter les détails et corriger les types, la description, le montant ou le lien de facture. Le bouton **Gérer** permet d’ajouter des types personnalisés.

Depuis le détail d’une intervention, vous pouvez associer plusieurs liens de documents. La recherche globale au-dessus des onglets accepte plusieurs mots-clés et parcourt les interventions, documents, pleins, achats, coûts fixes, échéances et suivis des deux véhicules. Le panneau de sauvegarde est affiché uniquement dans l’onglet **Entretiens & Factures**.

Le kilométrage actuel se modifie depuis la carte de synthèse. L’ajout d’une intervention avec un kilométrage supérieur le met automatiquement à jour. Le bouton **Coûts fixes** permet de saisir les dépenses récurrentes (assurance, leasing, parking, etc.) avec un montant par année civile, modifiable ou supprimable séparément pour chaque année. Chaque montant annuel est réparti de janvier à décembre sur le graphique. Le graphique affiche une vue annuelle ; touchez une année pour consulter les montants et interventions mois par mois. Les boutons de légende permettent d’afficher ou de masquer les catégories dans les deux vues.

Le mode de test (`index.html?test=1`) contient des coûts fixes annuels pour les deux véhicules. Ils sont automatiquement répartis sur les mois et intégrés aux graphiques de démonstration.

Le bouton **Coût divers** permet d'enregistrer des dépenses ponctuelles, par exemple un parking ou un péage. Les types proposés peuvent être ajoutés, renommés ou supprimés ; les coûts déjà saisis restent conservés même si leur type est retiré. L'historique des coûts divers est accessible dans son onglet et figure dans le graphique.

Les dates se saisissent directement au format **JJ/MM/AAAA** avec le clavier numérique du téléphone. Les dates impossibles et les dates passées pour une intervention planifiée sont refusées.

## Programme d'entretien

Le programme indicatif est décrit dans [maintenance-schedule.js](./maintenance-schedule.js). Les échéances de référence sont reprises de la liste fournie par le propriétaire pour un moteur 110 ch ; l'application concerne un véhicule déclaré en 115 ch. Vérifier l'applicabilité avec le carnet d'entretien ou le programme Renault lié au VIN.

Le suivi classe les opérations selon la première échéance estimée, par date ou par kilométrage. Les échéances kilométriques sont projetées avec le kilométrage annuel moyen du véhicule. L'indicateur est vert si rien n'est prévu dans les six prochains mois, orange si une échéance approche dans moins de six mois, et rouge si la date ou le kilométrage est dépassé. Il est recalculé lors de la modification du kilométrage et chaque jour. En mode test (`?test=1`), le Scénic comporte des historiques d'exemple pour illustrer ces groupes et états ; ils ne sont pas enregistrés.

Sur le tableau de bord, les échéances en retard ou à prévoir dans moins de six mois / 1 500 km restent visibles. Les autres sont regroupées dans le panneau replié **Prochaines échéances**. Le badge sous le sélecteur du véhicule indique la date limite du contrôle technique et son état.
