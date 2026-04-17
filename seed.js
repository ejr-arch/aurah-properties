const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "aurah-properties",
});

const db = admin.firestore();

const MOCK = [
  {
    id: "p1",
    title: "The Bugolobi Residence",
    location: "Bugolobi, Kampala",
    neighborhood: "Bugolobi",
    price: 850000000,
    beds: 4,
    baths: 3,
    area: "320 sqm",
    type: "house",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&auto=format&fit=crop",
    description: "A stunning 4-bedroom home in the heart of Bugolobi.",
    amenities: [
      "Swimming Pool",
      "Backup Generator",
      "CCTV",
      "Borehole",
      "Servant Quarters",
      "Double Garage",
      "Solar Panels",
      "Fiber Internet",
    ],
    interiors: [
      {label: "Grand Living Room", img: "assets/bugolobi/WhatsApp Image 2026-03-18 at 22.08.50.jpeg", video: "assets/new/Open Concept Living Room ｜ Home Tour.mp4"},
      {label: "Master Bedroom", img: "assets/bugolobi/WhatsApp Image 2026-03-18 at 22.08.50(1).jpeg", video: "https://assets.mixkit.co/videos/4196/4196-720.mp4"},
      {label: "Modern Kitchen", img: "assets/bugolobi/WhatsApp Image 2026-03-18 at 22.08.50(2).jpeg", video: "https://assets.mixkit.co/videos/43033/43033-720.mp4"},
      {label: "En-suite Bathroom", img: "assets/bugolobi/WhatsApp Image 2026-03-18 at 22.08.51.jpeg", video: "https://assets.mixkit.co/videos/21766/21766-720.mp4"},
      {label: "Swimming Pool", img: "assets/bugolobi/WhatsApp Image 2026-03-18 at 22.08.51(1).jpeg", video: "https://assets.mixkit.co/videos/8179/8179-720.mp4"}
    ]
  },
  {
    id: "p2",
    title: "Naguru Heights Apartment",
    location: "Naguru, Kampala",
    neighborhood: "Naguru",
    price: 320000000,
    beds: 3,
    baths: 2,
    area: "180 sqm",
    type: "apartment",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop",
    description: "Contemporary 3-bedroom apartment with panoramic views.",
    amenities: [
      "Rooftop Terrace",
      "Parking",
      "Security",
      "Elevator",
      "Gym",
      "Fiber Internet",
    ],
    interiors: [
      {label: "Open-plan Living", img: "assets/naguru/WhatsApp Image 2026-03-18 at 22.18.24.jpeg", video: "https://assets.mixkit.co/videos/4198/4198-720.mp4"},
      {label: "Master Bedroom", img: "assets/naguru/WhatsApp Image 2026-03-18 at 22.18.25.jpeg", video: "https://assets.mixkit.co/videos/4046/4046-720.mp4"},
      {label: "City-view Balcony", img: "assets/naguru/WhatsApp Image 2026-03-18 at 22.18.25(1).jpeg", video: "https://assets.mixkit.co/videos/39424/39424-720.mp4"},
      {label: "Modern Kitchen", img: "assets/naguru/WhatsApp Image 2026-03-18 at 22.18.25(2).jpeg", video: "https://assets.mixkit.co/videos/43033/43033-720.mp4"},
      {label: "Rooftop Terrace", img: "assets/naguru/WhatsApp Image 2026-03-18 at 22.18.26.jpeg", video: "https://assets.mixkit.co/videos/4490/4490-720.mp4"}
    ]
  },
  {
    id: "p3",
    title: "Muyenga Lake View Villa",
    location: "Muyenga, Kampala",
    neighborhood: "Muyenga",
    price: 1200000000,
    beds: 5,
    baths: 4,
    area: "500 sqm",
    type: "villa",
    status: "reserved",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop",
    description: "Luxurious villa with Lake Victoria views.",
    amenities: [
      "Lake View",
      "Infinity Pool",
      "Home Theatre",
      "Smart Home",
      "6-Car Garage",
      "Wine Cellar",
    ],
    interiors: [
      {label: "Luxury Living Room", img: "assets/kokomo/WhatsApp Image 2026-03-18 at 22.08.44.jpeg", video: "assets/new/Furniture collection that is Trendy, Luxurious, Stylish, Cozy & Elegant only at Pepperfry.com.mp4"},
      {label: "Infinity Pool", img: "assets/kokomo/WhatsApp Image 2026-03-18 at 22.08.46.jpeg", video: "https://assets.mixkit.co/videos/47286/47286-720.mp4"},
      {label: "Master Suite", img: "assets/kokomo/WhatsApp Image 2026-03-18 at 22.08.47.jpeg", video: "https://assets.mixkit.co/videos/4196/4196-720.mp4"},
      {label: "Home Theatre", img: "assets/kokomo/WhatsApp Image 2026-03-18 at 22.08.49.jpeg", video: "https://assets.mixkit.co/videos/4029/4029-720.mp4"},
      {label: "Chef Kitchen", img: "assets/kokomo/WhatsApp Image 2026-03-18 at 22.08.49(1).jpeg", video: "https://assets.mixkit.co/videos/43033/43033-720.mp4"}
    ]
  },
  {
    id: "p4",
    title: "Kisaasi Family Home",
    location: "Kisaasi, Kampala",
    neighborhood: "Kisaasi",
    price: 480000000,
    beds: 4,
    baths: 3,
    area: "280 sqm",
    type: "house",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop",
    description: "Spacious family home in quiet Kisaasi.",
    amenities: [
      "Large Garden",
      "Servant Quarters",
      "Parking x3",
      "Borehole",
      "Generator",
      "CCTV",
    ],
    interiors: [
      {label: "Family Living Room", img: "assets/kisasi/WhatsApp Image 2026-03-18 at 22.08.52.jpeg", video: "assets/new/Open Concept Living Room ｜ Home Tour.mp4"},
      {label: "Dining Room", img: "assets/kisasi/WhatsApp Image 2026-03-18 at 22.08.52(1).jpeg", video: "https://assets.mixkit.co/videos/4198/4198-720.mp4"},
      {label: "Master Bedroom", img: "assets/kisasi/WhatsApp Image 2026-03-18 at 22.08.52(2).jpeg", video: "https://assets.mixkit.co/videos/4046/4046-720.mp4"},
      {label: "Kitchen", img: "assets/kisasi/WhatsApp Image 2026-03-18 at 22.08.53.jpeg", video: "https://assets.mixkit.co/videos/43033/43033-720.mp4"},
      {label: "Mature Garden", img: "assets/kisasi/WhatsApp Image 2026-03-18 at 22.08.51(1).jpeg", video: "https://assets.mixkit.co/videos/6773/6773-720.mp4"}
    ]
  },
  {
    id: "p5",
    title: "Kololo Hill Penthouse",
    location: "Kololo, Kampala",
    neighborhood: "Kololo",
    price: 650000000,
    beds: 3,
    baths: 3,
    area: "240 sqm",
    type: "apartment",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop",
    description: "Rare penthouse with private rooftop in Kololo.",
    amenities: [
      "Private Rooftop",
      "City Views",
      "Smart Home",
      "2 Parking",
      "Concierge",
      "Gym",
      "Pool",
    ],
    interiors: [
      {label: "Designer Living", img: "https://i.pinimg.com/736x/7d/f7/60/7df760231a086366708d43f0b9158a52.jpg", video: "https://assets.mixkit.co/videos/4196/4196-720.mp4"},
      {label: "Private Rooftop", img: "https://i.pinimg.com/736x/b8/32/7a/b8327a598ef482ffee348f93d755c1c7.jpg", video: "https://assets.mixkit.co/videos/39424/39424-720.mp4"},
      {label: "Master Suite", img: "https://i.pinimg.com/736x/d8/2e/72/d82e72ea8dc619c61f5d36677204b7f0.jpg", video: "https://assets.mixkit.co/videos/4046/4046-720.mp4"},
      {label: "Spa Bathroom", img: "https://i.pinimg.com/736x/35/59/13/355913d66e1068f3614a14564c196a11.jpg", video: "https://assets.mixkit.co/videos/21766/21766-720.mp4"},
      {label: "Smart Kitchen", img: "https://i.pinimg.com/736x/4a/70/5f/4a705fd126a91c898ef20e0aa49a4ceb.jpg", video: "https://assets.mixkit.co/videos/43033/43033-720.mp4"}
    ]
  },
  {
    id: "p6",
    title: "Ntinda Modern Townhouse",
    location: "Ntinda, Kampala",
    neighborhood: "Ntinda",
    price: 290000000,
    beds: 3,
    baths: 2,
    area: "160 sqm",
    type: "townhouse",
    status: "sold",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop",
    description: "Sleek townhouse with high-end finishes.",
    amenities: [
      "Solar Power",
      "Parking",
      "Security",
      "Garden",
      "Fiber Internet",
    ],
    interiors: [
      {label: "Minimalist Living", img: "https://i.pinimg.com/736x/35/59/13/355913d66e1068f3614a14564c196a11.jpg", video: "https://assets.mixkit.co/videos/4198/4198-720.mp4"},
      {label: "Bedroom", img: "https://i.pinimg.com/736x/4a/70/5f/4a705fd126a91c898ef20e0aa49a4ceb.jpg", video: "https://assets.mixkit.co/videos/4196/4196-720.mp4"},
      {label: "Kitchen & Dining", img: "https://i.pinimg.com/736x/b8/32/7a/b8327a598ef482ffee348f93d755c1c7.jpg", video: "https://assets.mixkit.co/videos/43033/43033-720.mp4"},
      {label: "Private Garden", img: "https://i.pinimg.com/736x/d8/2e/72/d82e72ea8dc619c61f5d36677204b7f0.jpg", video: "https://assets.mixkit.co/videos/6773/6773-720.mp4"}
    ]
  },
  {
    id: "p7",
    title: "Lubowa Estate Home",
    location: "Lubowa, Entebbe Road",
    neighborhood: "Lubowa",
    price: 730000000,
    beds: 5,
    baths: 4,
    area: "420 sqm",
    type: "house",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop",
    description: "Expansive estate home on Lubowa estate.",
    amenities: [
      "Swimming Pool",
      "4-Car Garage",
      "Servants Qtrs",
      "Borehole",
      "Generator",
      "Tennis Court",
    ],
    interiors: [
      {label: "Grand Entrance", img: "https://i.pinimg.com/736x/d8/2e/72/d82e72ea8dc619c61f5d36677204b7f0.jpg", video: "https://assets.mixkit.co/videos/4198/4198-720.mp4"},
      {label: "Living Room", img: "https://i.pinimg.com/736x/b8/32/7a/b8327a598ef482ffee348f93d755c1c7.jpg", video: "assets/new/Open Concept Living Room ｜ Home Tour.mp4"},
      {label: "Pool & Grounds", img: "https://i.pinimg.com/736x/7d/f7/60/7df760231a086366708d43f0b9158a52.jpg", video: "https://assets.mixkit.co/videos/8179/8179-720.mp4"},
      {label: "Master Bedroom", img: "https://i.pinimg.com/736x/35/59/13/355913d66e1068f3614a14564c196a11.jpg", video: "https://assets.mixkit.co/videos/4196/4196-720.mp4"},
      {label: "Kitchen", img: "https://i.pinimg.com/736x/4a/70/5f/4a705fd126a91c898ef20e0aa49a4ceb.jpg", video: "https://assets.mixkit.co/videos/43033/43033-720.mp4"}
    ]
  },
  {
    id: "p8",
    title: "Bukoto Studio Loft",
    location: "Bukoto, Kampala",
    neighborhood: "Bukoto",
    price: 95000000,
    beds: 1,
    baths: 1,
    area: "65 sqm",
    type: "apartment",
    status: "available",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&auto=format&fit=crop",
    description: "Chic studio loft in artsy Bukoto.",
    amenities: ["Parking", "Security", "Rooftop Access", "Fiber Internet"],
    interiors: [
      {label: "Studio Space", img: "https://i.pinimg.com/736x/4a/70/5f/4a705fd126a91c898ef20e0aa49a4ceb.jpg", video: "https://assets.mixkit.co/videos/4198/4198-720.mp4"},
      {label: "Kitchen Corner", img: "https://i.pinimg.com/736x/d8/2e/72/d82e72ea8dc619c61f5d36677204b7f0.jpg", video: "https://assets.mixkit.co/videos/43033/43033-720.mp4"},
      {label: "Sleeping Area", img: "https://i.pinimg.com/736x/b8/32/7a/b8327a598ef482ffee348f93d755c1c7.jpg", video: "https://assets.mixkit.co/videos/4196/4196-720.mp4"},
      {label: "Rooftop Access", img: "https://i.pinimg.com/736x/35/59/13/355913d66e1068f3614a14564c196a11.jpg", video: "https://assets.mixkit.co/videos/39424/39424-720.mp4"}
    ]
  },
];

async function seed() {
  console.log("🚀 Seeding properties...");
  for (const p of MOCK) {
    await db.collection("properties").doc(p.id).set(p);
    console.log(`✓ ${p.title}`);
  }
  console.log("\n✅ Properties seeded!");
  console.log(
    "\n👉 Now go to Firebase Console → Authentication → Get Started → enable Email/Password",
  );
  console.log(
    "👉 Then add users manually or run seed-users.js after enabling Auth",
  );
  process.exit(0);
}

seed().catch((e) => {
  console.error("❌", e.message);
  process.exit(1);
});
