export type Language = 'en' | 'fr'

export const siteCopy = {
  en: {
    nav: {
      links: [
        ['Mission', '#about'],
        ['MerlinSight', '#products'],
        ['Recruiting', '#recruiting'],
        ['Contact', '#contact'],
      ],
      strapline: 'UAV Navigation Systems',
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
          description: 'Visual-inertial estimation combined with map-based correction.',
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
      moduleAlt: 'MerlinSight prototype navigation module',
      pipelineAlt: 'Overview of the MerlinSight processing pipeline',
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
        'It combines visual-inertial navigation with in-flight correction from map and satellite imagery to support robust localization in degraded environments.',
      ],
      prototypeLabel: 'Prototype module',
      prototypeTitle: 'Onboard architecture',
      prototypeBody: 'Designed to sit on the aircraft and preserve navigation when GNSS quality breaks down.',
      systemOverview: 'System overview',
      pillars: [
        {
          title: 'Visual-inertial navigation',
          description: 'Onboard estimation from camera and inertial sensing to maintain a continuous position solution.',
        },
        {
          title: 'Map-based correction',
          description: 'Uses live camera imagery with map and satellite references to correct drift during flight.',
        },
        {
          title: 'UAV integration',
          description: 'Built to support onboard navigation decisions on operational UAVs, not just post-flight analysis.',
        },
      ],
      roadAlt: 'Road and map matching visualization',
      keypointAlt: 'Keypoint matching detail',
      trajectoryAlt: 'Trajectory error performance visualization',
      correctionLabel: 'Correction approach',
      correctionTitle: 'Map-based localization',
      correctionBody:
        'MerlinSight uses environmental structure and reference data to help correct drift when GNSS cannot be relied on.',
      evaluationLabel: 'Evaluation',
      evaluationTitle: 'Flight-test analysis',
      evaluationBody:
        'Performance is assessed through trajectory-level analysis to track localization behavior across a full flight path.',
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Where it fits',
      body:
        'MerlinSight is relevant to UAV operations that need resilient localization when GNSS performance becomes unreliable.',
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
    recruiting: {
      eyebrow: 'Recruiting',
      title: 'Join the engineering effort',
      body:
        'KALGARD is currently recruiting an R&D Engineer in Autonomous Navigation and Embedded Systems through INRIA incubation.',
      openRole: 'Open role',
      roleTitle: 'R&D Engineer, Autonomous Navigation and Embedded Systems',
      roleBody:
        'The role focuses on MerlinSight development across embedded navigation, onboard perception, hardware integration, and field validation.',
      details: [
        ['Location', 'Sophia Antipolis'],
        ['Contract', 'Full-time CDD, 10 months'],
        ['Target start date', 'July 1, 2026'],
        ['Apply by', 'May 24, 2026'],
      ],
      profileLabel: 'Profile',
      profileTitle: 'Advanced C++ or Python, embedded systems, navigation.',
      profileBody:
        'The position is aimed at engineers comfortable with real-time systems, state estimation, and onboard UAV software.',
      cta: 'View Official Job Offer',
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
    },
    footer: {
      strapline: 'GPS-denied navigation for UAVs',
      body:
        'KALGARD develops resilient onboard navigation technology for drone operations where GNSS cannot be trusted.',
      incubationLabel: 'Incubation',
      incubationBody: 'INRIA-incubated company focused on resilient UAV navigation.',
      copyright: '© 2026 KALGARD Systems. All rights reserved.',
      note: 'Built for partners, investors, institutions, and recruits.',
    },
  },
  fr: {
    nav: {
      links: [
        ['Mission', '#about'],
        ['MerlinSight', '#products'],
        ['Recrutement', '#recruiting'],
        ['Contact', '#contact'],
      ],
      strapline: 'Systèmes de navigation pour UAV',
      incubationLabel: 'Incubation',
      incubationValue: 'INRIA',
      languageLabel: 'Langue',
    },
    hero: {
      eyebrow: 'Navigation sans GPS',
      title: 'Une navigation UAV fiable',
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
          description: 'Estimation visuo-inertielle combinée à une correction fondée sur des références cartographiques.',
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
      moduleAlt: 'Prototype du module de navigation MerlinSight',
      pipelineAlt: 'Vue d’ensemble de la chaîne de traitement MerlinSight',
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
        'Il combine navigation visuo-inertielle et correction en vol à partir de cartes et d’images satellites afin de maintenir une localisation robuste en environnement dégradé.',
      ],
      prototypeLabel: 'Module prototype',
      prototypeTitle: 'Architecture embarquée',
      prototypeBody: 'Conçu pour être embarqué à bord et préserver la navigation lorsque la qualité GNSS se dégrade.',
      systemOverview: 'Vue d’ensemble',
      pillars: [
        {
          title: 'Navigation visuo-inertielle',
          description: 'Estimation embarquée à partir de la caméra et des capteurs inertiels pour maintenir une solution de position continue.',
        },
        {
          title: 'Correction cartographique',
          description: 'Utilisation d’images en vol et de références cartographiques ou satellites pour corriger la dérive.',
        },
        {
          title: 'Intégration UAV',
          description: 'Conçu pour soutenir les décisions de navigation embarquées sur des UAV opérationnels, pas seulement l’analyse après vol.',
        },
      ],
      roadAlt: 'Visualisation de matching route et carte',
      keypointAlt: 'Détail de matching de points caractéristiques',
      trajectoryAlt: 'Visualisation de performance sur erreur de trajectoire',
      correctionLabel: 'Approche de correction',
      correctionTitle: 'Localisation fondée sur la carte',
      correctionBody:
        'MerlinSight exploite la structure de l’environnement et des données de référence pour corriger la dérive lorsque le GNSS ne peut plus être utilisé de manière fiable.',
      evaluationLabel: 'Évaluation',
      evaluationTitle: 'Analyse des essais en vol',
      evaluationBody:
        'Les performances sont évaluées à l’échelle de trajectoires complètes afin de suivre le comportement de localisation sur l’ensemble du vol.',
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Domaines d’usage',
      body:
        'MerlinSight s’adresse aux opérations UAV nécessitant une localisation robuste lorsque les performances GNSS deviennent insuffisantes.',
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
    recruiting: {
      eyebrow: 'Recrutement',
      title: 'Rejoindre l’effort d’ingénierie',
      body:
        'KALGARD recrute actuellement un(e) ingénieur(e) R&D en navigation autonome et systèmes embarqués dans le cadre de l’incubation INRIA.',
      openRole: 'Poste ouvert',
      roleTitle: 'Ingénieur(e) R&D, navigation autonome et systèmes embarqués',
      roleBody:
        'Le poste porte sur le développement de MerlinSight, entre navigation embarquée, perception à bord, intégration hardware et validation terrain.',
      details: [
        ['Localisation', 'Sophia Antipolis'],
        ['Contrat', 'CDD temps plein, 10 mois'],
        ['Prise de poste visée', '1 juillet 2026'],
        ['Date limite', '24 mai 2026'],
      ],
      profileLabel: 'Profil',
      profileTitle: 'C++ ou Python avancé, systèmes embarqués, navigation.',
      profileBody:
        'Le poste vise des ingénieurs à l’aise avec les systèmes temps réel, l’estimation d’état et le logiciel embarqué pour UAV.',
      cta: 'Voir l’offre officielle',
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
