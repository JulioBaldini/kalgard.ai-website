# KALGARD Systems - Technical Overview

## Public Positioning

KALGARD develops onboard navigation and georeferencing technologies for UAVs operating where GNSS is degraded, jammed, spoofed, or unavailable.

MerlinSight is the umbrella product line. On the site, the umbrella name appears once per section; the products are then named by their code, MS-1, MS-2, MS-3, which is the main name everywhere (Jules, 2026-11-10). Astrel, Arrow and Sillage may appear beside the code as a second, quieter name, never alone and never instead of it. The family logic stays vague in public: never state or imply that the products share one module, core, estimator, registration or technology ("one module, three outputs", "the same registration that positions the aircraft also...").

### MerlinSight MS-1, Astrel (current, flight-proven product)

GNSS-independent absolute positioning. Onboard visual-inertial estimation corrected by matching the downward camera view against preloaded georeferenced reference data. Outputs lat/lon/alt to the flight controller as GPS-like NMEA/MAVLink; no autopilot modification, no GNSS or datalink dependence in flight.

Allowed performance figures: the headline claim "under 5 m mean 2D error measured in real flight", plus the full metric table of the army-regiment flight test (3.43 m mean 2D, 4.24 m mean 3D, 1.76 m 2D standard deviation, 5.74 m 2D p90, 1.55 m altitude MAE, 5m 17s duration).

Field results section (Jules, 2026-11-11): a showroom, not a flight log. Raw footage and a performance envelope share one grid, and nothing carries a flight, a site or a date, so the site never gives a table of performance by terrain. The envelope: "under 3 m median position error in cruise, live on board" with "best flight to date: 1.8 m"; 70 km/h top speed; position held from under 10 m above the ground to over 200 m; manoeuvres up to 1.4 g, 40 degrees of tilt and 160 degrees per second; fog, gusts and low cloud; position held through landing and re-take-off. Where each number comes from is noted in `components/fieldResults.data.ts`. No percentile, duration or wind figure. The section says it is a glimpse and that flight by flight detail is shared privately. No programme or partner name anywhere: traction is one sentence, "in active work with French defence stakeholders and industrial groups". Army presence is always "observers", never a test run with or by the army.

Delivery formats, if mentioned: the full module (sensors + compute + software), or software-only integration on existing hardware, always described as conditional on the platform's sensors, synchronisation, compute and flight-control access, never as off-the-shelf.

### MerlinSight MS-2, Arrow (in development)

Public label only: Targeting / Ciblage. No explanatory sentence on the site. Do not describe outputs, method, inputs, stealth, lasers, emissions, coordinates, observation, or any link to Astrel. "In development" for the product.

### MerlinSight MS-3, Sillage (in development)

Public label only: Mapping / Cartographie. No explanatory sentence on the site. Do not describe maps from flight, GNSS independence, georeferencing process, inputs, or any link to Astrel. Framed as direction / roadmap. "In development" for the product.

## Hard Wording Rules

- Never imply the products share one module, core, estimator or technology. No "one module, three outputs", no "the same registration that...". Each product is described by its public label only for Arrow and Sillage; by its outcome for Astrel.
- No accuracy figure, no timeline, no availability claim for Arrow or Sillage.
- Never "drift-free". Say "continuous position with periodic absolute correction".
- Arrow and Sillage stay at one word each (Targeting / Mapping, Ciblage / Cartographie). No sentence that would let a competitor infer capability, method, or shared technology with Astrel.
- Never quote 3.39 m anywhere. Published Astrel figures are limited to the army-regiment flight-test table above plus the "under 5 m" headline.
- Never present a ruggedised defence kit as existing.
- No em dashes in site copy, either language. French copy is written natively, not translated.

## Restricted Details

Do not publish method-level details beyond the sanctioned Astrel description above: estimation internals, environmental feature classes, reference-source assumptions, update rates, latency figures, deployment architecture, internal APIs, test trajectories, or debugging screenshots.

Flight media on the site is raw footage only: extracts from the module's camera or field shots. Never a map view, an overlay, a match or fix display, an error plot or any other algorithm visualisation, and no vehicles, faces, number plates or recognisable military buildings. The clips under `public/videos/field/*-camera.mp4` follow this; the older `public/videos/field/<site>-<date>.mp4` files are deck-style visualisations and must not be published.

These details should only be shared under an appropriate partner discussion, NDA, or controlled technical review.
