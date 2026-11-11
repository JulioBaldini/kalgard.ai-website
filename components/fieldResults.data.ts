// Content of the Field results section. It is a showroom, not a flight log:
// footage and a performance envelope side by side, with no flight, site or
// date attached to anything (Jules, 2026-11-11). Flight by flight detail is
// only shared privately.
//
// Public copy rules (content/technical-overview.md):
// - media is raw footage only (onboard camera or field shots): no map, no
//   overlay, no algorithm visualisation, no vehicles, faces or plates;
// - a number goes here only once it is in the claims register of the company
//   brain (Kalgard/Product/Claims - register.md) or measured from the flight
//   recordings as noted beside it.

export type Clip = {
  src: string
  poster: string
  // two or three words shown on the clip: terrain or conditions, never a place
  caption: string
  alt: string
}

export const FOOTAGE: Clip[] = [
  {
    src: '/videos/field/coetquidan-2026-11-camera.mp4',
    poster: '/videos/field/coetquidan-2026-11-camera.jpg',
    caption: 'Forest and tracks · gusts',
    alt: 'Raw footage from the module’s downward camera over forest and tracks',
  },
  {
    src: '/videos/field/col-de-vence-2026-10-camera.mp4',
    poster: '/videos/field/col-de-vence-2026-10-camera.jpg',
    caption: 'Into the fog',
    alt: 'Raw footage from the module’s downward camera as the ground fades into fog',
  },
  {
    src: '/videos/field/caussols-2026-05-camera.mp4',
    poster: '/videos/field/caussols-2026-05-camera.jpg',
    caption: 'Mountain relief · strong wind',
    alt: 'Raw footage from the module’s downward camera over rocky mountain terrain and a winding road',
  },
  {
    src: '/videos/field/angouleme-2026-05-camera.mp4',
    poster: '/videos/field/angouleme-2026-05-camera.jpg',
    caption: 'Roads and forest',
    alt: 'Raw footage from the module’s downward camera over forest and a road',
  },
]

export type Spec = {
  id: 'accuracy' | 'speed' | 'height' | 'agility' | 'weather' | 'continuity'
  label: string
  value: string
  body: string
}

// The performance envelope. Where each number comes from:
// - accuracy: the two flights computed live on board, 2.6 m and 1.8 m median
//   in cruise (register: accuracy-live-median, accuracy-live-vence);
// - speed: register, speed-envelope;
// - height: evaluated flights of October and November 2026. Under 10 m above
//   take-off: 145 s of cruise at 2.0 m median error, live on board. Highest
//   flight: 216 m;
// - agility: inertial and autopilot data of the two live flights, in cruise:
//   peak load 1.4 g (0.25 s average), tilt up to 41 degrees, rotation up to
//   160 degrees per second;
// - continuity: register, retakeoff-hold.
export const ENVELOPE: Spec[] = [
  {
    id: 'accuracy',
    label: 'Accuracy',
    value: 'Under 3 m',
    body: 'Median position error in cruise, computed live on board. Best flight to date: 1.8 m.',
  },
  {
    id: 'speed',
    label: 'Speed',
    value: '70 km/h',
    body: 'Top speed flown, over mountain relief.',
  },
  {
    id: 'height',
    label: 'Height',
    value: '10 to 200 m',
    body: 'Holds its position from under 10 m above the ground to over 200 m.',
  },
  {
    id: 'agility',
    label: 'Agility',
    value: '1.4 g · 40°',
    body: 'Hard manoeuvres: up to 1.4 g, 40° of tilt and turns at 160° per second.',
  },
  {
    id: 'weather',
    label: 'Weather',
    value: 'Fog, gusts, low cloud',
    body: 'Flown when the ground is barely visible and the air is rough.',
  },
  {
    id: 'continuity',
    label: 'Continuity',
    value: 'Land, take off again',
    body: 'Position held through landing and re-take-off, without starting over.',
  },
]

// Only used by the parked map of France (FieldResultsMap.tsx), not displayed.
export type Site = { id: string; site: string; lat: number; lon: number }

export const SITES: Site[] = [
  { id: 'brittany', site: 'Brittany', lat: 47.94, lon: -2.2 },
  { id: 'col-de-vence', site: 'Col de Vence plateau', lat: 43.77, lon: 7.08 },
  { id: 'caussols', site: 'Caussols', lat: 43.75, lon: 6.92 },
  { id: 'angouleme', site: 'Angoulême', lat: 45.65, lon: 0.16 },
]
