export type Language = 'en' | 'fr'

export const siteCopy = {
  en: {
    nav: {
      links: [
        ['Mission', '#about'],
        ['MerlinSight', '#products'],
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
        'KALGARD Systems develops onboard navigation technology for drones operating in GNSS-denied, jammed, spoofed, or unreliable environments.',
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
          description: 'Onboard estimation with correction from observed environmental features.',
        },
        {
          label: 'Stage',
          value: 'Prototype',
          description: 'Active development, flight testing, and technical validation.',
        },
      ],
      programLabel: 'Current program',
      programName: 'MerlinSight',
      systemNoteLabel: 'System note',
      systemNote:
        'MerlinSight is being developed as an onboard module for resilient localization in degraded environments.',
      validationLabel: 'Flight validation',
      validationNote:
        'Test flights have demonstrated localization error below 5 m, including a flight test with an army regiment.',
      moduleAlt: 'MerlinSight prototype navigation module',
      heroVideoAlt: 'Drone returning to its corrected trajectory with MerlinSight',
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
    products: {
      eyebrow: 'What We Build',
      title: 'MerlinSight',
      paragraphs: [
        'MerlinSight is an onboard navigation system for UAVs designed for GPS-denied operation.',
        'It combines onboard navigation with map-based correction from observed environmental features to support robust localization in degraded environments.',
      ],
      prototypeLabel: 'Prototype module',
      prototypeTitle: 'Onboard architecture',
      prototypeBody: 'Designed to sit on the aircraft and preserve navigation when GNSS quality breaks down.',
      systemOverview: 'System overview',
      systemBody:
        'MerlinSight provides a resilient onboard localization layer for UAVs that need to keep operating when satellite positioning becomes unavailable or untrustworthy.',
      pillars: [
        {
          title: 'Visual-inertial navigation',
          description: 'Onboard estimation from camera and inertial sensing to maintain a continuous position solution.',
        },
        {
          title: 'Map-based correction',
          description: 'Uses observed environmental features and trusted reference data to correct drift during flight.',
        },
        {
          title: 'UAV integration',
          description: 'Built to support onboard navigation decisions on operational UAVs, not just post-flight analysis.',
        },
      ],
      correctionLabel: 'Correction approach',
      correctionTitle: 'Map-based localization',
      correctionBody:
        'MerlinSight performs map-based correction by comparing observed environmental features with trusted reference data, reducing drift when GNSS cannot be relied on.',
      mapCorrectionImageAlt: 'Public-safe map correction visualization with observation tracks over grayscale reference imagery',
      mapCorrectionDetailAlt: 'Public-safe feature overlay visualization for map-based correction',
      evaluationLabel: 'Evaluation',
      evaluationTitle: 'Flight-tested precision',
      evaluationBody:
        'Across flight testing, MerlinSight has demonstrated sub-5 m mean localization error. The figure below shows a flight test performed with an army regiment, using post-convergence comparison against GPS ground truth.',
      validationImageAlt: '2D trajectory comparison from a flight test with an army regiment, showing GPS ground truth and MerlinSight estimate colored by DTC 2D error',
      groundTruthLabel: 'GPS ground truth',
      estimateLabel: 'MerlinSight estimate',
      exampleLabel: 'Flight test with an army regiment',
      exampleNote:
        'The flight duration was set by the authorized flight zone. MerlinSight is designed to correct drift against reference observations during flight, rather than let dead-reckoning error accumulate with elapsed time; longer and more varied flights are part of ongoing validation.',
      exampleMetrics: [
        ['Mean 2D error', '3.43 m'],
        ['Mean 3D error', '4.24 m'],
        ['2D standard deviation', '1.76 m'],
        ['2D p90', '5.74 m'],
        ['Altitude MAE', '1.55 m'],
      ],
      durationMetric: ['Flight duration', '5m 17s'],
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
          body: 'Explore MerlinSight integration on existing drone platforms.',
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
      title: 'Where it fits',
      body:
        'MerlinSight is relevant to UAV operations that need resilient localization when GNSS performance becomes unreliable.',
      demoLabel: 'System walkthrough',
      demoTitle: 'Navigation that recovers when GNSS disappears',
      demoBody:
        'From visual-inertial estimation to terrain-matched correction, this sequence shows how MerlinSight contains drift and brings the aircraft back onto a trusted trajectory.',
      demoAlt: 'Subtitled MerlinSight pitch and navigation demonstration',
      items: [
        'Defense and security UAVs',
        'Critical infrastructure monitoring',
        'Operations in GNSS-degraded environments',
      ],
    },
    credibility: {
      eyebrow: 'Credibility',
      title: 'Research to product',
      body: 'KALGARD Systems is an INRIA-incubated company focused on resilient UAV navigation.',
      cardTitle: 'Focused technical development',
      cardBody:
        'The company is building MerlinSight at the intersection of onboard perception, navigation, and UAV integration.',
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
        'KALGARD develops resilient onboard navigation technology for drone operations where GNSS cannot be trusted.',
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
        'KALGARD Systems développe une technologie de navigation embarquée pour drones opérant dans des environnements GNSS dégradés, brouillés, usurpés ou indisponibles.',
      primaryCta: 'Notre système',
      secondaryCta: 'Contact',
      stats: [
        {
          label: 'Cible',
          value: 'GNSS dégradé',
          description: 'Navigation pour environnements où le signal satellite est absent ou non fiable.',
        },
        {
          label: 'Approche',
          value: 'Embarquée',
          description: 'Estimation embarquée avec correction à partir d’éléments observés dans l’environnement.',
        },
        {
          label: 'Avancement',
          value: 'Prototype',
          description: 'Développement, essais en vol et validation technique en cours.',
        },
      ],
      programLabel: 'Programme en cours',
      programName: 'MerlinSight',
      systemNoteLabel: 'Note système',
      systemNote:
        'MerlinSight est développé comme un module embarqué de localisation robuste pour environnements dégradés.',
      validationLabel: 'Validation en vol',
      validationNote:
        'Des essais en vol ont démontré une erreur de localisation inférieure à 5 m, y compris lors d’un essai réalisé avec un régiment de l’armée.',
      moduleAlt: 'Prototype du module de navigation MerlinSight',
      heroVideoAlt: 'Drone retrouvant sa trajectoire corrigée grâce à MerlinSight',
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
    products: {
      eyebrow: 'Notre système',
      title: 'MerlinSight',
      paragraphs: [
        'MerlinSight est un système de navigation embarqué pour UAV conçu pour fonctionner sans GPS.',
        'Il combine navigation embarquée et correction cartographique à partir d’éléments observés dans l’environnement afin de maintenir une localisation robuste en environnement dégradé.',
      ],
      prototypeLabel: 'Module prototype',
      prototypeTitle: 'Architecture embarquée',
      prototypeBody: 'Conçu pour être embarqué à bord et préserver la navigation lorsque la qualité GNSS se dégrade.',
      systemOverview: 'Vue d’ensemble',
      systemBody:
        'MerlinSight fournit une couche de localisation embarquée robuste pour les UAV qui doivent continuer à opérer lorsque le positionnement satellite devient indisponible ou non fiable.',
      pillars: [
        {
          title: 'Navigation visuo-inertielle',
          description: 'Estimation embarquée à partir de la caméra et des capteurs inertiels pour maintenir une solution de position continue.',
        },
        {
          title: 'Correction cartographique',
          description: 'Utilisation d’éléments observés dans l’environnement et de données de référence fiables pour corriger la dérive en vol.',
        },
        {
          title: 'Intégration UAV',
          description: 'Conçu pour soutenir les décisions de navigation embarquées sur des UAV opérationnels, pas seulement l’analyse après vol.',
        },
      ],
      correctionLabel: 'Approche de correction',
      correctionTitle: 'Localisation fondée sur la carte',
      correctionBody:
        'MerlinSight effectue une correction cartographique à partir d’éléments observés dans l’environnement et de données de référence fiables, afin de réduire la dérive lorsque le GNSS n’est pas exploitable.',
      mapCorrectionImageAlt: 'Visualisation publique de correction cartographique avec traces d’observation sur imagerie de référence en niveaux de gris',
      mapCorrectionDetailAlt: 'Visualisation publique de superposition d’éléments pour la correction cartographique',
      evaluationLabel: 'Évaluation',
      evaluationTitle: 'Précision validée en vol',
      evaluationBody:
        'Sur les essais en vol, MerlinSight a démontré une erreur moyenne de localisation inférieure à 5 m. La figure ci-dessous présente un essai en vol réalisé avec un régiment de l’armée, après convergence et par comparaison avec une vérité terrain GPS.',
      validationImageAlt: 'Comparaison de trajectoire 2D d’un essai en vol avec un régiment de l’armée, montrant la vérité terrain GPS et l’estimation MerlinSight colorée selon l’erreur DTC 2D',
      groundTruthLabel: 'Vérité terrain GPS',
      estimateLabel: 'Estimation MerlinSight',
      exampleLabel: 'Essai en vol avec un régiment de l’armée',
      exampleNote:
        'La durée du vol a été définie par la zone de vol autorisée. MerlinSight est conçu pour corriger la dérive à partir d’observations de référence pendant le vol, plutôt que de laisser l’erreur inertielle s’accumuler avec le temps ; des vols plus longs et plus variés font partie de la validation en cours.',
      exampleMetrics: [
        ['Erreur 2D moyenne', '3,43 m'],
        ['Erreur 3D moyenne', '4,24 m'],
        ['Écart type 2D', '1,76 m'],
        ['2D p90', '5,74 m'],
        ['MAE altitude', '1,55 m'],
      ],
      durationMetric: ['Durée du vol', '5m 17s'],
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
          body: 'Explorer l’intégration de MerlinSight sur des plateformes drones existantes.',
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
      title: 'Domaines d’usage',
      body:
        'MerlinSight s’adresse aux opérations UAV nécessitant une localisation robuste lorsque les performances GNSS deviennent insuffisantes.',
      demoLabel: 'Démonstration du système',
      demoTitle: 'Une navigation qui se recale lorsque le GNSS disparaît',
      demoBody:
        'De l’estimation visuo-inertielle à la correction par recalage terrain, cette séquence montre comment MerlinSight contient la dérive et ramène l’appareil sur une trajectoire fiable.',
      demoAlt: 'Présentation sous-titrée et démonstration de navigation MerlinSight',
      items: [
        'UAV de défense et de sécurité',
        'Surveillance d’infrastructures critiques',
        'Opérations en environnements GNSS dégradés',
      ],
    },
    credibility: {
      eyebrow: 'Crédibilité',
      title: 'De la recherche au produit',
      body: 'KALGARD Systems est une société incubée par INRIA, centrée sur la navigation résiliente pour UAV.',
      cardTitle: 'Développement technique ciblé',
      cardBody:
        'La société développe MerlinSight à l’intersection de la perception embarquée, de la navigation et de l’intégration UAV.',
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
        'KALGARD développe une technologie de navigation embarquée résiliente pour les opérations drone où le GNSS ne peut pas être considéré comme fiable.',
      incubationLabel: 'Incubation',
      incubationBody: 'Société incubée par INRIA, centrée sur la navigation résiliente pour UAV.',
      copyright: '© 2026 KALGARD Systems. Tous droits réservés.',
      note: 'Pensé pour partenaires, investisseurs, institutions et recrutements.',
    },
  },
} as const
