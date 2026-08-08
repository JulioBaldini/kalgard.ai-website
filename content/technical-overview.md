# KALGARD Systems - Technical Overview

## Public Positioning

KALGARD develops onboard navigation and georeferencing technologies for UAVs operating where GNSS is degraded, jammed, spoofed, or unavailable.

MerlinSight is the umbrella product line. On the site, the umbrella name appears once per section; the products are then shown by bare sub-name: Astrel, Arrow, Sillage. The family logic stays vague in public: never state or imply that the products share one module, core, estimator, registration or technology ("one module, three outputs", "the same registration that positions the aircraft also...").

### MerlinSight Astrel (current, flight-proven product)

GNSS-independent absolute positioning. Onboard visual-inertial estimation corrected by matching the downward camera view against preloaded georeferenced reference data. Outputs lat/lon/alt to the flight controller as GPS-like NMEA/MAVLink; no autopilot modification, no GNSS or datalink dependence in flight.

Allowed performance figures: the headline claim "under 5 m mean 2D error measured in real flight", plus the full metric table of the army-regiment flight test (3.43 m mean 2D, 4.24 m mean 3D, 1.76 m 2D standard deviation, 5.74 m 2D p90, 1.55 m altitude MAE, 5m 17s duration). No figures from any other test.

Delivery formats, if mentioned: the full module (sensors + compute + software), or software-only integration on existing hardware, always described as conditional on the platform's sensors, synchronisation, compute and flight-control access, never as off-the-shelf.

### MerlinSight Arrow (in development)

Georeferencing of observed points. Output + advantage only, never inputs or method: an observed point becomes a ground coordinate, ready to report and share. The advantage is stated as an end-user consequence, stealth: no laser, no EM wave emission, nothing that gives the aircraft away. Do not mention the camera, observation of the scene by a sensor, registration, or any link to how Astrel works; do not use "passive" mechanism framing such as "no emission toward the scene". "In development" for the product.

### MerlinSight Sillage (in development)

Mapping from flight. Output + advantage only: flights become maps, every flight updates the map of the area it covers, georeferenced, without any GNSS. Do not name inputs such as "flight video". Framed as direction / roadmap.

## Hard Wording Rules

- Never imply the products share one module, core, estimator or technology. No "one module, three outputs", no "the same registration that...". Each product is described by its outcome only.
- No accuracy figure, no timeline, no availability claim for Arrow or Sillage.
- Never "drift-free". Say "continuous position with periodic absolute correction".
- No targeting language for Arrow: no "targeting", "target acquisition", "designation for effects", "ciblage". Allowed framing: coordinates for "reporting, cueing and situational awareness" / "observation et remontée de coordonnées".
- Arrow and Sillage are described by output and advantage only (passive / no laser for Arrow, no GNSS for Sillage). Never inputs, never method, never the GNSS-pose-chain comparison (retired 2026-08-07 as too revealing), never a link to Astrel. Do not claim passive geolocation is novel.
- Never quote 3.39 m anywhere. Published Astrel figures are limited to the army-regiment flight-test table above plus the "under 5 m" headline.
- Never present a ruggedised defence kit as existing.
- No em dashes in site copy, either language. French copy is written natively, not translated.

## Restricted Details

Do not publish method-level details beyond the sanctioned Astrel description above: estimation internals, environmental feature classes, reference-source assumptions, update rates, latency figures, deployment architecture, internal APIs, test trajectories, or debugging screenshots.

These details should only be shared under an appropriate partner discussion, NDA, or controlled technical review.
