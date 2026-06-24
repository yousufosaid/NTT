const img = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: img("photo-1578662996442-48f60103fc96"),
    seed: "ntt-santorini",
    price: 1299,
    rating: 4.9,
    duration: "7 days",
    tag: "Trending",
  },
  {
    id: 2,
    name: "Kyoto",
    country: "Japan",
    image: img("photo-1545569341-9eb8b30979d9"),
    seed: "ntt-kyoto",
    price: 1899,
    rating: 4.8,
    duration: "10 days",
    tag: "Cultural",
  },
  {
    id: 3,
    name: "Maldives",
    country: "Indian Ocean",
    image: img("photo-1573843981267-be1999ff37cd"),
    seed: "ntt-maldives",
    price: 2499,
    rating: 4.9,
    duration: "5 days",
    tag: "Luxury",
  },
  {
    id: 4,
    name: "Patagonia",
    country: "Argentina",
    image: img("photo-1470071459604-3b5ec3a7fe05"),
    seed: "ntt-patagonia",
    price: 1599,
    rating: 4.7,
    duration: "12 days",
    tag: "Adventure",
  },
  {
    id: 5,
    name: "Marrakech",
    country: "Morocco",
    image: img("photo-1489749798305-4fea3ae63d43"),
    seed: "ntt-marrakech",
    price: 999,
    rating: 4.6,
    duration: "6 days",
    tag: "Exotic",
  },
  {
    id: 6,
    name: "Swiss Alps",
    country: "Switzerland",
    image: img("photo-1506905925346-21bda4d32df4"),
    seed: "ntt-swiss-alps",
    price: 1799,
    rating: 4.8,
    duration: "8 days",
    tag: "Nature",
  },
];

export const packages = [
  {
    id: 1,
    title: "European Grand Tour",
    description: "Paris, Rome, Barcelona — three iconic cities in one unforgettable journey.",
    image: img("photo-1499856871958-5b9627545d1a"),
    seed: "ntt-europe",
    price: 3299,
    duration: "14 days",
    includes: ["Flights", "Hotels", "Guided Tours"],
  },
  {
    id: 2,
    title: "Southeast Asia Explorer",
    description: "Temples, street food, and tropical beaches across Thailand and Vietnam.",
    image: img("photo-1528181304800-259b08848526"),
    seed: "ntt-seasia",
    price: 2199,
    duration: "12 days",
    includes: ["Flights", "Hotels", "Meals"],
  },
  {
    id: 3,
    title: "African Safari Adventure",
    description: "Witness the Big Five on a luxury safari through Kenya and Tanzania.",
    image: img("photo-1516426122078-c23e76319801"),
    seed: "ntt-safari",
    price: 4599,
    duration: "10 days",
    includes: ["Flights", "Lodges", "Safari Guide"],
  },
];

export const features = [
  {
    title: "Curated Experiences",
    description: "Every trip is handpicked by travel experts who've been there themselves.",
  },
  {
    title: "24/7 Support",
    description: "Real humans available around the clock, wherever you are in the world.",
  },
  {
    title: "Best Price Guarantee",
    description: "Find a lower price elsewhere? We'll match it and give you 10% back.",
  },
  {
    title: "Flexible Booking",
    description: "Free cancellation up to 48 hours before departure on most packages.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Photographer",
    avatar: img("photo-1494790108377-be9c29b29330", 150, 150),
    seed: "ntt-sarah",
    text: "NTT planned our honeymoon to Santorini flawlessly. Every detail was perfect — from the cliffside hotel to the private sunset cruise.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    role: "Software Engineer",
    avatar: img("photo-1507003211169-0a1dd7228f2d", 150, 150),
    seed: "ntt-james",
    text: "The Japan cultural tour exceeded all expectations. Our guide was incredibly knowledgeable and the itinerary balanced adventure with relaxation.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    avatar: img("photo-1438761681033-6461ffad8d80", 150, 150),
    seed: "ntt-elena",
    text: "I've used many travel agencies, but Next Trip Travel's attention to detail is unmatched. Already booked our next adventure!",
    rating: 5,
  },
];

export const stats = [
  { value: "50K+", label: "Happy Travelers" },
  { value: "120+", label: "Destinations" },
  { value: "15+", label: "Years Experience" },
  { value: "4.9", label: "Average Rating" },
];
