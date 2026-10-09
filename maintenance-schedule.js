const maintenanceSchedule = {
  vehicleId: 'v2',
  vehicleLabel: 'Renault Scénic III XMOD 1.5 dCi — 2015, 115 ch',
  notice: 'Intervalles alignés sur la fiche de suivi officielle fournie pour le Scénic III 1.5 dCi. Vérifiez la concordance avec le carnet d’entretien ou le programme Renault associé au VIN.',
  sourceLabel: 'Fiche de suivi officielle fournie par le propriétaire (révisions A/B, années 1 à 12).',
  items: [
    {
      id: 'engine-oil',
      name: 'Vidange moteur + filtre à huile',
      type: 'Vidange',
      details: 'Huile 5W-30 RN0720 / ACEA C4 selon la liste fournie. Usage urbain : intervalle conseillé rapproché.',
      intervalKm: 30000,
      intervalMonths: 24
    },
    {
      id: 'cabin-filter',
      name: 'Filtre d’habitacle (pollen)',
      type: 'Filtre d’habitacle',
      details: 'Remplacé lors des révisions A (années impaires : 1, 3, 5…), soit tous les 2 ans ou 30 000 km.',
      intervalKm: 30000,
      intervalMonths: 24
    },
    {
      id: 'air-filter',
      name: 'Filtre à air',
      type: 'Filtre à air',
      details: 'Raccourcir l’intervalle en environnement poussiéreux.',
      intervalKm: 60000,
      intervalMonths: 48
    },
    {
      id: 'fuel-filter',
      name: 'Filtre à gazole',
      type: 'Filtre à gazole',
      details: 'Purger l’eau du filtre à chaque vidange.',
      intervalKm: 60000,
      intervalMonths: 48
    },
    {
      id: 'timing-belt',
      name: 'Distribution + pompe à eau',
      type: 'Distribution',
      details: 'Courroie. La liste fournie indique un remplacement simultané.',
      intervalKm: 150000,
      intervalMonths: 72
    },
    {
      id: 'accessory-belt',
      name: 'Courroie d’accessoires + galets',
      type: 'Courroie d’accessoires',
      details: 'À remplacer en même temps que la distribution selon la liste fournie.',
      intervalKm: 150000,
      intervalMonths: 72
    },
    {
      id: 'brake-fluid',
      name: 'Liquide de frein',
      type: 'Liquide de frein',
      details: 'Purge/remplacement du liquide.',
      intervalKm: 120000,
      intervalMonths: 36
    },
    {
      id: 'coolant',
      name: 'Liquide de refroidissement',
      type: 'Liquide de refroidissement',
      details: 'La liste fournie indique le type D Renault. Fiche officielle : année 5, puis année 10.',
      intervalKm: 150000,
      intervalMonths: 60
    },
    {
      id: 'rear-brakes',
      name: 'Contrôle et dépoussiérage des garnitures de frein à tambours',
      type: 'Freinage',
      details: 'Contrôle à 90 000 km selon la fiche officielle ; à chaque révision, le contrôle du freinage fait aussi partie des points vérifiés.',
      intervalKm: 90000
    },
    {
      id: 'xmod-tyres',
      name: 'Contrôle des pneumatiques',
      type: 'Pneumatiques',
      details: 'Surveiller l’usure, notamment des pneus 4 saisons.',
      intervalKm: 30000,
      intervalMonths: 24
    }
  ],
  additionalAdvice: [
    'Révision A (années impaires, 30 000 km) : filtre d’habitacle, points de contrôle (freinage, pneus, éclairage, suspensions, batterie, lave-glace) et diagnostic électronique, sans vidange.',
    'Révision B (années paires, 30 000 km) : vidange + filtre à huile, points de contrôle, diagnostic électronique et filtres d’usure selon le kilométrage (air et gazole à 60 000 km).',
    'FAP / EGR : en cas de trajets principalement courts, la liste conseille périodiquement un trajet routier prolongé pour favoriser la régénération du FAP. Ce conseil d’usage n’est pas calculé comme une échéance datée.',
    'Batterie Stop & Start : la liste conseille une batterie EFB ou AGM lors du remplacement.',
    'Extended Grip XMOD : aucun entretien mécanique dédié n’est indiqué dans la liste fournie.'
  ]
};
