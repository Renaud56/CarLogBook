const maintenanceSchedule = {
  vehicleId: 'v2',
  vehicleLabel: 'Renault Scénic III XMOD 1.5 dCi — 2015, 115 ch',
  notice: 'Intervalles repris de la liste fournie pour le Scénic 3 XMOD 1.5 dCi 110 ch. Votre véhicule est indiqué à 115 ch : vérifiez la concordance avec le carnet d’entretien ou le programme Renault associé au VIN avant de considérer ces échéances comme constructeur.',
  sourceLabel: 'Liste d’entretien fournie par le propriétaire ; application au 115 ch à confirmer.',
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
      details: 'À remplacer plus tôt si nécessaire pour préserver la ventilation et la climatisation.',
      intervalKm: 30000,
      intervalMonths: 12
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
      details: 'La liste fournie indique le type D Renault.',
      intervalKm: 120000,
      intervalMonths: 60
    },
    {
      id: 'rear-brakes',
      name: 'Contrôle freins et plaquettes arrière',
      type: 'Freinage',
      details: 'Point d’attention indiqué pour le frein de parking électrique ; contrôle à chaque révision.',
      intervalKm: 30000,
      intervalMonths: 24
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
    'FAP / EGR : en cas de trajets principalement courts, la liste conseille périodiquement un trajet routier prolongé pour favoriser la régénération du FAP. Ce conseil d’usage n’est pas calculé comme une échéance datée.',
    'Batterie Stop & Start : la liste conseille une batterie EFB ou AGM lors du remplacement.',
    'Extended Grip XMOD : aucun entretien mécanique dédié n’est indiqué dans la liste fournie.'
  ]
};
