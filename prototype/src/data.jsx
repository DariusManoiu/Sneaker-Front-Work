// src/data.js

export const shoesData = {
  shoe_latest: [
    { name: 'AJ1 Retro High OG', info: 'New! | 7/16/2025', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=AJ1+High+OG', action: 'Resell' },
    { name: 'Nike Dunk Low Panda', info: 'Popular | 120 Scans', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=Dunk+Low+Panda', action: 'Resell' },
    { name: 'Yeezy Boost 350 V2', info: 'Recent Scan | 7/15/2025', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=Yeezy+350+V2', action: 'Resell' },
  ],
  shoe_trending: [
    { name: 'Nike Air Max 1', info: 'Trending | 85 Scans', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=Air+Max+1', action: 'Resell' },
    { name: 'New Balance 550', info: 'New! | 7/14/2025', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=NB+550', action: 'Resell' },
  ],
  shoe_resale: [
    { name: 'Nike Air Force 1', info: 'Resale | Size 10', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=Air+Force+1', action: 'View Listing' },
  ],
  shoe_for_you: [
    { name: 'AJ1 Retro High OG', info: 'Recommended | 95% Match', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=AJ1+Rec', action: 'Resell' },
    { name: 'Nike Dunk Low Panda', info: 'Recommended | 92% Match', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=Dunk+Rec', action: 'Resell' },
    { name: 'Adidas Forum Low', info: 'Recommended | 90% Match', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=Forum+Rec', action: 'Resell' },
    { name: 'New Balance 550', info: 'Recommended | 85% Match', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=NB+Rec', action: 'Resell' },
  ]
};

export const usersData = {
  user_top: [
    { name: 'SneakerKing', info: 'Top Collector | 1500 pts', image: 'https://placehold.co/100x100/6D8AAF/F7F7F7?text=User1', action: 'View Profile' },
    { name: 'KicksMaster', info: 'Top Collector | 1200 pts', image: 'https://placehold.co/100x100/6D8AAF/F7F7F7?text=User2', action: 'View Profile' },
  ],
  user_trending: [
    { name: 'SoleSeeker', info: 'Trending User | 1150 pts', image: 'https://placehold.co/100x100/6D8AAF/F7F7F7?text=User3', action: 'View Profile' },
    { name: 'HypeBeastPro', info: 'Active Scans | 1000 pts', image: 'https://placehold.co/100x100/6D8AAF/F7F7F7?text=User4', action: 'View Profile' },
  ],
  user_near_me: [
    { name: 'LocalKicks', info: 'Near Me | 980 pts', image: 'https://placehold.co/100x100/6D8AAF/F7F7F7?text=User5', action: 'View Profile' },
    { name: 'CitySneaker', info: 'Near Me | 920 pts', image: 'https://placehold.co/100x100/6D8AAF/F7F7F7?text=User6', action: 'View Profile' },
  ],
  user_for_you: [
    { name: 'User8', info: 'For You | 900 pts', image: 'https://placehold.co/100x100/6D8AAF/F7F7F7?text=User8', action: 'View Profile' },
    { name: 'CustomKicks', info: 'For You | 880 pts', image: 'https://placehold.co/100x100/6D8AAF/F7F7F7?text=User7', action: 'View Profile' },
  ]
};

export const filterOptions = {
  shoe: [
    { value: 'shoe_for_you', text: 'For You' },
    { value: 'shoe_latest', text: 'Latest' },
    { value: 'shoe_trending', text: 'Trending' },
    { value: 'shoe_resale', text: 'Deals' }
  ],
  user: [
    { value: 'user_for_you', text: 'For You' },
    { value: 'user_top', text: 'Top Users' },
    { value: 'user_trending', text: 'Trending' },
    { value: 'user_near_me', text: 'Nearby' }
  ]
};

export const badgesData = [
  { name: "First Scan", icon: "📸", status: "earned", description: "Scanned your first sneaker!" },
  { name: "Daily Login", icon: "🗓️", status: "earned", description: "Logged in 7 days in a row!" },
  { name: "Brand Enthusiast", icon: "👟", status: "earned", description: "Scanned 10 shoes from one brand." },
  { name: "Collector's Elite", icon: "🏆", status: "earned", description: "Reached 50 shoes in your collection!" },
  { name: "Reseller Rookie", icon: "💸", status: "locked", description: "List your first shoe for resell." },
  { name: "Color Master", icon: "🌈", status: "locked", description: "Collected shoes in 5 different colors." },
];

export const myCollectionData = [
  { name: 'AJ1 Retro High OG', info: 'Acquired: 7/10/2025', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=AJ1+Owned' },
  { name: 'Nike Dunk Low Panda', info: 'Acquired: 7/05/2025', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=Dunk+Owned' },
  { name: 'Yeezy Boost 350 V2', info: 'Acquired: 6/28/2025', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=Yeezy+Owned' },
  { name: 'Nike Air Max 1', info: 'Acquired: 6/20/2025', image: 'https://placehold.co/150x100/172F50/F7F7F7?text=AM1+Owned' },
];

export const mockNotifications = [
  { id: 1, text: 'A new scan of Air Jordan 1 was added near you.', time: '2m ago' },
  { id: 2, text: 'SneakerKing just earned the "Collector\'s Elite" badge.', time: '15m ago' },
  { id: 3, text: 'Your Nike Dunk Low Panda scan has been viewed 50 times.', time: '1h ago' },
  { id: 4, text: 'Welcome to nSneaker! Get started by scanning a shoe.', time: '1d ago' },
];