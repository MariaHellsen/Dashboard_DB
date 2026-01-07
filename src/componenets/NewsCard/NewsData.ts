import awEventImage from "../../assets/aw-event.png";
import opensourceEventImage from "../../assets/opensource-event.jpg";
import newFeatureImage from "../../assets/new-feature.jpg";
import devpayImage from "../../assets/devpay.png";
import satsImage from "../../assets/sats.png";
import wintImage from "../../assets/wint.png";
import cioMeetingImage from "../../assets/cio-meeting.png";

// Import the icons
import {
  Calendar,
  Code,
  Users,
  Sparkles,
  CreditCard,
  Dumbbell,
  Calculator,
  Heart,
} from "lucide-react";

export interface NewsItem {
  id: number;
  badge: string;
  badgeColor: string;
  title: string;
  date?: string;
  location?: string;
  subtitle?: string;
  icon: any; // Using any for simplicity in the data file
  image: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    badge: "Upcoming",
    badgeColor: "#173a3e",
    title: "AW",
    date: "15 Dec",
    location: "Stockholm",
    icon: Calendar,
    image: awEventImage,
  },
  {
    id: 2,
    badge: "Tech",
    badgeColor: "#173a3e",
    title: "OpenSource Event",
    date: "20 Dec",
    location: "Malmö",
    icon: Code,
    image: opensourceEventImage,
  },
  {
    id: 3,
    badge: "Network",
    badgeColor: "#6b7280",
    title: "CIO Network Meeting",
    date: "12 Jan",
    location: "Stockholm",
    icon: Users,
    image: cioMeetingImage,
  },
  {
    id: 4,
    badge: "New",
    badgeColor: "#ffc474",
    title: "New Feature",
    subtitle: "Now Live",
    icon: Sparkles,
    image: newFeatureImage,
  },
  {
    id: 5,
    badge: "Finance",
    badgeColor: "#173a3e",
    title: "DevPay",
    subtitle: "Early payout",
    icon: CreditCard,
    image: devpayImage,
  },
  {
    id: 6,
    badge: "Benefit",
    badgeColor: "#ffc474",
    title: "Sats",
    subtitle: "12% discount",
    icon: Dumbbell,
    image: satsImage,
  },
  {
    id: 7,
    badge: "Economy",
    badgeColor: "#173a3e",
    title: "Wint",
    subtitle: "All-in-one accounting",
    icon: Calculator,
    image: wintImage,
  },
  {
    id: 8,
    badge: "Referral",
    badgeColor: "#6b7280",
    title: "Tip a Consultant",
    subtitle: "Earn rewards",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop",
  },
];
