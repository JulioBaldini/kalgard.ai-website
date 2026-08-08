export type Language = 'en' | 'fr'

export const siteCopy = {
  en: {
    nav: {
      links: [
        ['Mission', '#about'],
        ['MerlinSight', '#products'],
        ['Applications', '#technical-showcase'],
        ['Team', '#team'],
        ['Partners', '#partners'],
        ['Contact', '#contact'],
      ],
      strapline: 'BY KALGARD SYSTEMS',
      incubationLabel: 'Incubation',
      incubationValue: 'INRIA',
      languageLabel: 'Language',
    },
    hero: {
      eyebrow: 'GPS-Denied Navigation',
      title: 'Reliable UAV navigation',
      titleAccent: 'when GPS cannot be trusted.',
      body:
        'KALGARD Systems develops onboard navigation and georeferencing technologies for drones operating in GNSS-denied, jammed, spoofed, or unreliable environments.',
      primaryCta: 'What We Build',
      secondaryCta: 'Contact',
      stats: [
        {
          label: 'Focus',
          value: 'GNSS-denied',
          description: 'Navigation for degraded or unavailable satellite signals.',
        },
        {
          label: 'Approach',
          value: 'Onboard',
          description: 'Onboard estimation with periodic absolute correction from observed environmental features.',
        },
        {
          label: 'Stage',
          value: 'Flight-proven',
          description: 'Astrel is flight-proven; the wider MerlinSight lineup is in development.',
        },
      ],
      programLabel: 'Current product',
      programName: 'MerlinSight Astrel',
      systemNoteLabel: 'System note',
      systemNote:
        'MerlinSight Astrel, the positioning module of the lineup, keeps a continuous onboard position with periodic absolute correction, with no GNSS or datalink dependence in flight.',
      validationLabel: 'Flight validation',
      validationNote:
        'Real flight testing has demonstrated under 5 m mean 2D error, including a flight test with an army regiment.',
      moduleAlt: 'MerlinSight Astrel navigation module',
      heroVideoAlt: 'Drone returning to its corrected trajectory with MerlinSight Astrel',
    },
    about: {
      eyebrow: 'Mission',
      title: 'Why this matters',
      paragraphs: [
        'Reliable positioning is a hard requirement for UAV operations, yet GNSS is not always available or trustworthy.',
        'KALGARD is building navigation systems that help drones maintain localization and mission continuity when satellite signals degrade, are spoofed, or disappear.',
      ],
      imageAlt: 'Prototype and UAV integration work in the KALGARD workshop',
      contextLabel: 'Development context',
      contextBody: 'Hardware and flight integration work focused on practical UAV deployment constraints.',
    },
    capabilities: {
      eyebrow: 'Capabilities',
      title: 'What the MerlinSight lineup delivers',
      body:
        'KALGARD technologies give aerial platforms trusted answers where satellite positioning cannot be relied on.',
      spotlight: {
        name: 'Astrel',
        label: 'Position of the aircraft',
          body:
            'Onboard navigation that keeps a trusted position when GNSS is jammed, spoofed or absent: a continuous position with periodic absolute correction. Flight-proven, with under 5 m mean 2D error measured in real flight.',
          cta: 'Explore Astrel',
          diagramAlt: 'Line diagram of a UAV holding its own position above terrain',
      },
      teasers: [
        {
          name: 'Arrow',
          label: 'Observed points',
          line: 'An observed point becomes a ground coordinate. Stealth, with no EM wave emission.',
          diagramAlt: 'Line glyph of a UAV marking an observed ground point',
        },
        {
          name: 'Sillage',
          label: 'Mapping',
          line: 'Maps of overflown areas, updated by every flight.',
          diagramAlt: 'Line glyph of a gridded map with a georeferenced area',
        },
      ],
      developmentTag: 'In development',
    },
    products: {
      eyebrow: 'What We Build',
      title: 'MerlinSight',
      paragraphs: [
        'MerlinSight is the KALGARD product line for flying without GNSS.',
        'Astrel, the positioning module, is the current flight-proven product. Arrow and Sillage extend the lineup and are in development.',
      ],
      prototypeLabel: 'Flight-proven product',
      prototypeTitle: 'Astrel',
      prototypeBody: 'The positioning module. It sits on the aircraft and preserves navigation when GNSS is jammed, spoofed or unavailable.',
      deliveryLabel: 'Delivery',
      deliveryBody:
        'Available as a full module combining sensors, compute and software. Software-only integration on existing hardware depends on the platform’s sensors, synchronisation, compute and flight-control access.',
      systemOverview: 'System overview',
      systemBody:
        'Astrel provides GNSS-independent absolute positioning: a continuous onboard position with periodic absolute correction, for UAVs that must keep operating when satellite positioning is unavailable or untrustworthy.',
      pillars: [
        {
          title: 'Visual-inertial estimation',
          description: 'Onboard estimation from camera and inertial sensing maintains a continuous position solution between corrections.',
        },
        {
          title: 'Absolute map correction',
          description: 'The downward camera view is matched against preloaded georeferenced reference data to correct the position with absolute fixes during flight.',
        },
        {
          title: 'GPS-like integration',
          description: 'Latitude, longitude and altitude are output to the flight controller as GPS-like NMEA or MAVLink. No autopilot modification, no GNSS or datalink dependence in flight.',
        },
      ],
      correctionLabel: 'Correction approach',
      correctionTitle: 'Map-based localization',
      correctionBody:
        'Astrel corrects its onboard estimate by matching the downward camera view against preloaded georeferenced reference data, keeping the position continuous with periodic absolute correction when GNSS cannot be relied on.',
      mapCorrectionImageAlt: 'Public-safe map correction visualization with observation tracks over grayscale reference imagery',
      mapCorrectionDetailAlt: 'Public-safe feature overlay visualization for map-based correction',
      evaluationLabel: 'Evaluation',
      evaluationTitle: 'Measured in real flight',
      evaluationBody:
        'In real flight testing, Astrel has demonstrated under 5 m mean 2D error, measured post-convergence against GPS ground truth. The figure shows a flight test performed with an army regiment.',
      validationImageAlt: '2D trajectory comparison from a flight test with an army regiment, showing GPS ground truth and the MerlinSight Astrel estimate',
      groundTruthLabel: 'GPS ground truth',
      estimateLabel: 'Astrel estimate',
      exampleLabel: 'Flight test with an army regiment',
      exampleNote:
        'The flight duration was set by the authorized flight zone. Astrel is designed to keep a continuous position with periodic absolute correction rather than let dead-reckoning error accumulate with elapsed time; longer and more varied flights are part of ongoing validation.',
      exampleMetrics: [
        ['Mean 2D error', '3.43 m'],
        ['Mean 3D error', '4.24 m'],
        ['2D standard deviation', '1.76 m'],
        ['2D p90', '5.74 m'],
        ['Altitude MAE', '1.55 m'],
      ],
      durationMetric: ['Flight duration', '5m 17s'],
      lineupLabel: 'The rest of the lineup',
      lineupTag: 'In development',
      lineup: [
        {
          name: 'Arrow',
          role: 'Georeferencing of observed points',
          body:
            'An observed point becomes a ground coordinate, ready to report and share. Stealth: no laser, no EM wave emission, nothing that gives the aircraft away.',
        },
        {
          name: 'Sillage',
          role: 'Mapping from flight',
          body:
            'Flights become maps. Every flight updates the map of the area it covers, georeferenced, without any GNSS.',
        },
      ],
    },
    partners: {
      eyebrow: 'Partner Search',
      title: 'We are looking for partners to help MerlinSight bring autonomy and resilience to drones.',
      titleAccent: 'partners',
      body:
        'KALGARD is opening conversations with organizations interested in resilient UAV navigation, field validation, and operational deployment.',
      items: [
        {
          title: 'UAV integrators',
          body: 'Explore MerlinSight Astrel integration on existing drone platforms.',
        },
        {
          title: 'Defense and civil end users',
          body: 'Discuss operational needs and validation scenarios in GNSS-degraded environments.',
        },
        {
          title: 'Investors',
          body: 'Support the next stage of product development, testing, and market access.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Where our technologies apply',
      body:
        'KALGARD develops onboard navigation and georeferencing technologies for aerial platforms operating where satellite positioning is degraded, denied or insufficient.',
      demoLabel: 'System walkthrough',
      demoTitle: 'Navigation that recovers when GNSS disappears',
      demoBody:
        'From visual-inertial estimation to terrain-matched correction, this sequence shows how MerlinSight Astrel contains drift and brings the aircraft back onto a trusted trajectory.',
      demoAlt: 'Subtitled MerlinSight pitch and navigation demonstration',
      columns: [
        {
          title: 'Defence & security',
          items: [
            'Operations through jammed or spoofed airspace',
            'Deep reconnaissance beyond the reach of a reliable data link',
            'Mission continuity when GNSS is lost mid-flight',
            'Reporting the position of observed points of interest, in ground coordinates',
          ],
        },
        {
          title: 'Civil & critical infrastructure',
          items: [
            'Operational continuity for critical infrastructure exposed to interference',
            'Inspection in urban and constrained environments where GNSS degrades',
            'Search and rescue',
            'BVLOS corridors independent of GNSS availability',
          ],
        },
      ],
      qualifier:
        'Capability detail, performance figures and integration data are shared with qualified partners under NDA.',
    },
    credibility: {
      eyebrow: 'Credibility',
      title: 'Research to product',
      body: 'KALGARD Systems is an INRIA-incubated company focused on resilient UAV navigation.',
      cardTitle: 'Focused technical development',
      cardBody:
        'The company is building the MerlinSight lineup at the intersection of onboard perception, navigation, and UAV integration.',
      incubationLabel: 'Incubation',
      incubationBody: 'The company is being developed with INRIA incubation support.',
      imageAlt: 'Workshop testing and prototype preparation',
    },
    team: {
      eyebrow: 'Team',
      title: 'Aeronautics and robotics, built into one team',
      body:
        'KALGARD brings together aerospace engineering and advanced robotics expertise to develop resilient navigation systems from research through flight integration.',
      members: [
        {
          name: 'Jules',
          role: 'Founder · Aeronautical Engineer',
          education: 'Imperial College London',
          body: 'Aeronautical engineering expertise focused on UAV systems, product development, and bringing MerlinSight into operational flight environments.',
        },
        {
          name: 'Thibault',
          role: 'PhD in Robotics · Engineer',
          education: 'ISAE-SUPAERO',
          body: 'Robotics and engineering expertise focused on autonomous navigation, onboard perception, and resilient localization.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start the conversation',
      body:
        'We welcome conversations with UAV manufacturers, defense and aerospace partners, public innovation stakeholders, investors, and engineers interested in the problem space.',
      ctaLabel: 'Call to action',
      ctaTitle: 'Partnerships, pilots, and technical discussions.',
      ctaBody:
        'Get in touch if you are exploring resilient navigation, integration into a UAV platform, investment, or opportunities to work together.',
      infoTitle: 'Contact Information',
      emailLabel: 'Email',
      emails: [
        {
          name: 'Jules Baldantoni',
          role: 'Founder',
          address: 'jules.baldantoni@inria.fr',
        },
        {
          name: 'Thibault Noël',
          role: 'Robotics Engineer',
          address: 'thibault.noel@inria.fr',
        },
      ],
    },
    footer: {
      strapline: 'GPS-denied navigation for UAVs',
      body:
        'KALGARD develops resilient onboard navigation and georeferencing technologies for drone operations where GNSS cannot be trusted.',
      incubationLabel: 'Incubation',
      incubationBody: 'INRIA-incubated company focused on resilient UAV navigation.',
      copyright: '© 2026 KALGARD Systems. All rights reserved.',
      note: 'Built for partners, investors, institutions, and UAV operators.',
    },
  },
  fr: {
    nav: {
      links: [
        ['Mission', '#about'],
        ['MerlinSight', '#products'],
        ['Applications', '#technical-showcase'],
        ['Équipe', '#team'],
        ['Partenaires', '#partners'],
        ['Contact', '#contact'],
      ],
      strapline: 'PAR KALGARD SYSTEMS',
      incubationLabel: 'Incubation',
      incubationValue: 'INRIA',
      languageLabel: 'Langue',
    },
    hero: {
      eyebrow: 'Navigation sans GPS',
      title: 'Une navigation UAV robuste',
      titleAccent: 'quand le GPS n’est plus fiable.',
      body:
        'KALGARD Systems développe des technologies embarquées de navigation et de géoréférencement pour drones opérant dans des environnements GNSS dégradés, brouillés, usurpés ou indisponibles.',
      primaryCta: 'Notre gamme',
      secondaryCta: 'Contact',
      stats: [
        {
          label: 'Domaine',
          value: 'GNSS dégradé',
          description: 'Navigation pour environnements où le signal satellite est absent ou non fiable.',
        },
        {
          label: 'Approche',
          value: 'Embarquée',
          description: 'Estimation embarquée avec correction absolue périodique à partir d’éléments observés dans l’environnement.',
        },
        {
          label: 'Avancement',
          value: 'Éprouvé en vol',
          description: 'Astrel est éprouvé en vol ; la suite de la gamme MerlinSight est en développement.',
        },
      ],
      programLabel: 'Produit actuel',
      programName: 'MerlinSight Astrel',
      systemNoteLabel: 'Note système',
      systemNote:
        'MerlinSight Astrel, le module de positionnement de la gamme, maintient une position embarquée continue avec correction absolue périodique, sans dépendance au GNSS ni à une liaison de données en vol.',
      validationLabel: 'Validation en vol',
      validationNote:
        'Les essais en vol réels ont démontré une erreur 2D moyenne inférieure à 5 m, y compris lors d’un essai réalisé avec un régiment de l’armée.',
      moduleAlt: 'Module de navigation MerlinSight Astrel',
      heroVideoAlt: 'Drone retrouvant sa trajectoire corrigée grâce à MerlinSight Astrel',
    },
    about: {
      eyebrow: 'Mission',
      title: 'Pourquoi c’est important',
      paragraphs: [
        'Une localisation fiable est une exigence de base pour les opérations UAV, alors que le GNSS n’est pas toujours disponible ni digne de confiance.',
        'KALGARD développe des systèmes de navigation permettant aux drones de conserver leur localisation et leur continuité de mission lorsque les signaux satellites se dégradent, sont brouillés ou usurpés.',
      ],
      imageAlt: 'Travaux d’intégration prototype et UAV dans l’atelier KALGARD',
      contextLabel: 'Contexte de développement',
      contextBody: 'Travaux d’intégration hardware et essais en vol orientés vers les contraintes réelles de déploiement UAV.',
    },
    capabilities: {
      eyebrow: 'Capacités',
      title: 'Ce qu’apporte la gamme MerlinSight',
      body:
        'Les technologies KALGARD apportent aux plateformes aériennes des réponses fiables là où le positionnement par satellite fait défaut.',
      spotlight: {
        name: 'Astrel',
        label: 'Position de l’appareil',
          body:
            'Navigation embarquée qui maintient une position fiable lorsque le GNSS est brouillé, usurpé ou absent : une position continue avec correction absolue périodique. Éprouvée en vol, avec une erreur 2D moyenne inférieure à 5 m mesurée en vol réel.',
          cta: 'Découvrir Astrel',
          diagramAlt: 'Schéma d’un drone maintenant sa propre position au-dessus du terrain',
      },
      teasers: [
        {
          name: 'Arrow',
          label: 'Points observés',
          line: 'Un point observé devient une coordonnée au sol. Discrétion totale, sans aucune émission électromagnétique.',
          diagramAlt: 'Pictogramme d’un drone marquant un point observé au sol',
        },
        {
          name: 'Sillage',
          label: 'Cartographie',
          line: 'Des cartes des zones survolées, mises à jour à chaque vol.',
          diagramAlt: 'Pictogramme d’une carte quadrillée avec une zone géoréférencée',
        },
      ],
      developmentTag: 'En développement',
    },
    products: {
      eyebrow: 'Notre gamme',
      title: 'MerlinSight',
      paragraphs: [
        'MerlinSight est la gamme de produits KALGARD pour voler sans GNSS.',
        'Astrel, le module de positionnement, est le produit actuel, éprouvé en vol. Arrow et Sillage prolongent la gamme et sont en développement.',
      ],
      prototypeLabel: 'Produit éprouvé en vol',
      prototypeTitle: 'Astrel',
      prototypeBody: 'Le module de positionnement. Embarqué à bord, il préserve la navigation lorsque le GNSS est brouillé, usurpé ou indisponible.',
      deliveryLabel: 'Livraison',
      deliveryBody:
        'Disponible en module complet réunissant capteurs, calcul et logiciel. Une intégration purement logicielle sur un matériel existant dépend des capteurs, de la synchronisation, de la puissance de calcul et de l’accès au contrôle de vol de la plateforme.',
      systemOverview: 'Vue d’ensemble',
      systemBody:
        'Astrel fournit un positionnement absolu indépendant du GNSS : une position embarquée continue avec correction absolue périodique, pour les UAV qui doivent continuer à opérer lorsque le positionnement satellite devient indisponible ou non fiable.',
      pillars: [
        {
          title: 'Estimation visuo-inertielle',
          description: 'L’estimation embarquée à partir de la caméra et des capteurs inertiels maintient une solution de position continue entre les corrections.',
        },
        {
          title: 'Correction absolue sur carte',
          description: 'La vue de la caméra vers le sol est recalée sur des données de référence géoréférencées préchargées pour corriger la position par des recalages absolus en vol.',
        },
        {
          title: 'Intégration type GPS',
          description: 'Latitude, longitude et altitude sont transmises au contrôleur de vol aux formats NMEA ou MAVLink, comme un GPS. Aucune modification de l’autopilote, aucune dépendance au GNSS ni à une liaison de données en vol.',
        },
      ],
      correctionLabel: 'Approche de correction',
      correctionTitle: 'Localisation fondée sur la carte',
      correctionBody:
        'Astrel corrige son estimation embarquée en recalant la vue de la caméra vers le sol sur des données de référence géoréférencées préchargées : la position reste continue, avec une correction absolue périodique, lorsque le GNSS n’est pas exploitable.',
      mapCorrectionImageAlt: 'Visualisation publique de correction cartographique avec traces d’observation sur imagerie de référence en niveaux de gris',
      mapCorrectionDetailAlt: 'Visualisation publique de superposition d’éléments pour la correction cartographique',
      evaluationLabel: 'Évaluation',
      evaluationTitle: 'Mesuré en vol réel',
      evaluationBody:
        'En essais en vol réels, Astrel a démontré une erreur 2D moyenne inférieure à 5 m, mesurée après convergence par comparaison avec une vérité terrain GPS. La figure présente un essai en vol réalisé avec un régiment de l’armée.',
      validationImageAlt: 'Comparaison de trajectoire 2D d’un essai en vol avec un régiment de l’armée, montrant la vérité terrain GPS et l’estimation MerlinSight Astrel',
      groundTruthLabel: 'Vérité terrain GPS',
      estimateLabel: 'Estimation Astrel',
      exampleLabel: 'Essai en vol avec un régiment de l’armée',
      exampleNote:
        'La durée du vol a été définie par la zone de vol autorisée. Astrel est conçu pour maintenir une position continue avec correction absolue périodique, plutôt que de laisser l’erreur inertielle s’accumuler avec le temps ; des vols plus longs et plus variés font partie de la validation en cours.',
      exampleMetrics: [
        ['Erreur 2D moyenne', '3,43 m'],
        ['Erreur 3D moyenne', '4,24 m'],
        ['Écart type 2D', '1,76 m'],
        ['2D p90', '5,74 m'],
        ['MAE altitude', '1,55 m'],
      ],
      durationMetric: ['Durée du vol', '5m 17s'],
      lineupLabel: 'La suite de la gamme',
      lineupTag: 'En développement',
      lineup: [
        {
          name: 'Arrow',
          role: 'Géoréférencement des points observés',
          body:
            'Un point observé devient une coordonnée au sol, prête à être transmise et partagée. Discrétion totale : aucun laser, aucune émission électromagnétique, rien qui trahisse l’appareil.',
        },
        {
          name: 'Sillage',
          role: 'Cartographie au fil des vols',
          body:
            'Les vols deviennent des cartes. Chaque vol met à jour la carte de la zone survolée, géoréférencée, sans aucun GNSS.',
        },
      ],
    },
    partners: {
      eyebrow: 'Recherche partenaires',
      title: 'Nous recherchons des partenaires capables d’aider MerlinSight à donner aux drones autonomie et résilience.',
      titleAccent: 'partenaires',
      body:
        'KALGARD échange avec des organisations intéressées par la navigation UAV résiliente, la validation terrain et le déploiement opérationnel.',
      items: [
        {
          title: 'Intégrateurs UAV',
          body: 'Explorer l’intégration de MerlinSight Astrel sur des plateformes drones existantes.',
        },
        {
          title: 'Utilisateurs finaux défense / civil',
          body: 'Échanger sur les besoins opérationnels et les scénarios de validation en environnement GNSS dégradé.',
        },
        {
          title: 'Investisseurs',
          body: 'Accompagner la prochaine étape de développement produit, d’essais et d’accès marché.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Où s’appliquent nos technologies',
      body:
        'KALGARD développe des technologies embarquées de navigation et de géoréférencement pour les plateformes aériennes opérant là où le positionnement par satellite est dégradé, indisponible ou insuffisant.',
      demoLabel: 'Démonstration du système',
      demoTitle: 'Une navigation qui se recale lorsque le GNSS disparaît',
      demoBody:
        'De l’estimation visuo-inertielle à la correction par recalage terrain, cette séquence montre comment MerlinSight Astrel contient la dérive et ramène l’appareil sur une trajectoire fiable.',
      demoAlt: 'Présentation sous-titrée et démonstration de navigation MerlinSight',
      columns: [
        {
          title: 'Défense et sécurité',
          items: [
            'Opérations à travers un espace aérien brouillé ou usurpé',
            'Reconnaissance dans la profondeur, au-delà de la portée d’une liaison de données',
            'Continuité de mission lorsque le GNSS est perdu en vol',
            'Remontée de la position des points d’intérêt observés, en coordonnées géographiques',
          ],
        },
        {
          title: 'Civil et infrastructures critiques',
          items: [
            'Continuité d’exploitation pour les infrastructures critiques exposées aux interférences',
            'Inspection en environnement urbain et contraint où le GNSS se dégrade',
            'Recherche et sauvetage',
            'Corridors BVLOS indépendants de la disponibilité du GNSS',
          ],
        },
      ],
      qualifier:
        'Le détail des capacités, les performances et les données d’intégration sont partagés avec des partenaires qualifiés sous accord de confidentialité.',
    },
    credibility: {
      eyebrow: 'Crédibilité',
      title: 'De la recherche au produit',
      body: 'KALGARD Systems est une société incubée par INRIA, centrée sur la navigation résiliente pour UAV.',
      cardTitle: 'Développement technique ciblé',
      cardBody:
        'La société développe la gamme MerlinSight à l’intersection de la perception embarquée, de la navigation et de l’intégration UAV.',
      incubationLabel: 'Incubation',
      incubationBody: 'La société se développe dans le cadre d’une incubation INRIA.',
      imageAlt: 'Préparation des prototypes et essais en atelier',
    },
    team: {
      eyebrow: 'Équipe',
      title: 'L’aéronautique et la robotique réunies dans une même équipe',
      body:
        'KALGARD réunit des expertises en ingénierie aérospatiale et en robotique avancée pour développer des systèmes de navigation résilients, de la recherche à l’intégration en vol.',
      members: [
        {
          name: 'Jules',
          role: 'Fondateur · Ingénieur aéronautique',
          education: 'Imperial College London',
          body: 'Une expertise en ingénierie aéronautique tournée vers les systèmes UAV, le développement produit et l’intégration de MerlinSight dans des environnements de vol opérationnels.',
        },
        {
          name: 'Thibault',
          role: 'Docteur en robotique · Ingénieur',
          education: 'ISAE-SUPAERO',
          body: 'Une expertise en robotique et en ingénierie centrée sur la navigation autonome, la perception embarquée et la localisation résiliente.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ouvrir la discussion',
      body:
        'Nous échangeons avec des constructeurs d’UAV, des partenaires défense et aérospatial, des acteurs publics de l’innovation, des investisseurs et des ingénieurs intéressés par ce sujet.',
      ctaLabel: 'Prise de contact',
      ctaTitle: 'Partenariats, pilotes et discussions techniques.',
      ctaBody:
        'Contactez-nous si vous explorez la navigation résiliente, l’intégration sur une plateforme UAV, un sujet d’investissement ou une opportunité de collaboration.',
      infoTitle: 'Coordonnées',
      emailLabel: 'Email',
      emails: [
        {
          name: 'Jules Baldantoni',
          role: 'Fondateur',
          address: 'jules.baldantoni@inria.fr',
        },
        {
          name: 'Thibault Noël',
          role: 'Ingénieur robotique',
          address: 'thibault.noel@inria.fr',
        },
      ],
    },
    footer: {
      strapline: 'Navigation sans GPS pour UAV',
      body:
        'KALGARD développe des technologies embarquées de navigation et de géoréférencement résilientes pour les opérations drone où le GNSS ne peut pas être considéré comme fiable.',
      incubationLabel: 'Incubation',
      incubationBody: 'Société incubée par INRIA, centrée sur la navigation résiliente pour UAV.',
      copyright: '© 2026 KALGARD Systems. Tous droits réservés.',
      note: 'Pensé pour partenaires, investisseurs, institutions et recrutements.',
    },
  },
} as const
