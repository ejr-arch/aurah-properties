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
