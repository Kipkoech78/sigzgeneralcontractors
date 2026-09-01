import {
  Phone,
  Mail,
  MapPin,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  HardHat,
  MessageCircle,
} from "lucide-react";

const ICONS = {
  phone: Phone,
  mail: Mail,
  pin: MapPin,
  check: Check,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  arrowRight: ArrowRight,
  star: Star,
  hardHat: HardHat,
  whatsapp: MessageCircle,
};

function Icon({ name, className = "w-5 h-5" }) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp className={className} strokeWidth={2} />;
}

export default Icon;