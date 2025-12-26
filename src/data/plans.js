export const plans = [
  {
    id: 'basic',
    title: 'Basic',
    price: 'Free',
    specs: [
      { label: 'Custom Message', available: true },
      { label: 'RSVP', available: true },
      { label: 'Custom Domain', available: false }
    ]
  },
  {
    id: 'premium',
    title: 'Premium',
    price: '$9.99',
    specs: [
      { label: 'Custom Message', available: true },
      { label: 'RSVP', available: true },
      { label: 'Custom Domain', available: true }
    ]
  },
  {
    id: 'eksclusif',
    title: 'Eksklusif',
    price: '$29.99',
    specs: [
      { label: 'Custom Message', available: true },
      { label: 'RSVP', available: true },
      { label: 'Custom Domain', available: true }
    ]
  }
];
