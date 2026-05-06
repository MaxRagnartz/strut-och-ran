import { useState } from 'react';
import {
  ShoppingCart, Menu, X, Phone, Mail, MapPin, Minus, Plus, Trash2,
  AlertTriangle, User, LogOut, Settings, RefreshCw, ChevronDown, Send, Star
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Separator } from './components/ui/separator';

// ── SVG Product Illustrations ────────────────────────────────────────────────

function ConeImage({ premium = false }: { premium?: boolean }) {
  const cone = premium ? '#B8750A' : '#C8944A';
  const line = premium ? '#7A4E06' : '#9A6C28';
  const s1 = premium ? '#FFF3D0' : '#FDDAC5';
  const s2 = premium ? '#FFE4A0' : '#F4B8A0';
  return (
    <svg viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <polygon points="50,112 16,52 84,52" fill={cone} />
      <line x1="22" y1="65" x2="78" y2="65" stroke={line} strokeWidth="1.2" opacity="0.7" />
      <line x1="20" y1="78" x2="80" y2="78" stroke={line} strokeWidth="1.2" opacity="0.7" />
      <line x1="18" y1="91" x2="82" y2="91" stroke={line} strokeWidth="1.2" opacity="0.7" />
      <line x1="17" y1="104" x2="83" y2="104" stroke={line} strokeWidth="1.2" opacity="0.7" />
      <line x1="32" y1="52" x2="50" y2="112" stroke={line} strokeWidth="1" opacity="0.5" />
      <line x1="44" y1="52" x2="52" y2="112" stroke={line} strokeWidth="1" opacity="0.5" />
      <line x1="56" y1="52" x2="52" y2="112" stroke={line} strokeWidth="1" opacity="0.5" />
      <line x1="68" y1="52" x2="50" y2="112" stroke={line} strokeWidth="1" opacity="0.5" />
      <circle cx="50" cy="38" r="22" fill={s1} />
      <circle cx="36" cy="44" r="15" fill={s2} opacity="0.75" />
      <circle cx="64" cy="44" r="15" fill={s1} opacity="0.75" />
      {premium && <circle cx="50" cy="24" r="5" fill="#FFD700" opacity="0.85" />}
      <circle cx="43" cy="28" r="5" fill="white" opacity="0.2" />
    </svg>
  );
}

function WaferImage({ variant = 'medium' }: { variant?: 'narrow' | 'medium' | 'wide' | 'special' }) {
  const w = variant === 'narrow' ? 22 : variant === 'wide' || variant === 'special' ? 48 : 34;
  const x0 = (100 - w) / 2;
  return (
    <svg viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x={x0} y="32" width={w} height="72" rx="3" fill="#F5E0B0" stroke="#C4983C" strokeWidth="1.5" />
      {[44, 56, 68, 80, 92].map(y => (
        <line key={y} x1={x0 + 3} y1={y} x2={x0 + w - 3} y2={y} stroke="#C4983C" strokeWidth="0.8" opacity="0.55" />
      ))}
      <line x1="50" y1="35" x2="50" y2="101" stroke="#C4983C" strokeWidth="0.8" opacity="0.55" />
      <circle cx="50" cy="28" r="18" fill="#FDDAC5" />
      <circle cx="42" cy="23" r="10" fill="#F4B8A0" opacity="0.55" />
      <circle cx="41" cy="18" r="5" fill="white" opacity="0.22" />
      {variant === 'special' && (
        <>
          <circle cx={x0 + 8} cy="50" r="7" fill="#FF6B6B" opacity="0.65" />
          <circle cx={x0 + w - 8} cy="50" r="7" fill="#74B9FF" opacity="0.65" />
          <circle cx="50" cy="58" r="5" fill="#A8E063" opacity="0.65" />
        </>
      )}
    </svg>
  );
}

function CupImage({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) {
  const scale = size === 'small' ? 0.78 : size === 'large' ? 1.18 : 1;
  const tw = 42 * scale; const bw = 28 * scale; const h = 50 * scale;
  const mid = 65; const t = mid - h / 2; const b = mid + h / 2;
  const lt = 50 - tw / 2; const rt = 50 + tw / 2;
  const lb = 50 - bw / 2; const rb = 50 + bw / 2;
  return (
    <svg viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d={`M${lt},${t} L${rt},${t} L${rb},${b} L${lb},${b} Z`} fill="#E8F4FD" stroke="#80C4E8" strokeWidth="1.5" />
      <rect x={lt - 1} y={t - 4} width={tw + 2} height={6} rx="3" fill="#80C4E8" />
      <line x1={lt + 6} y1={t + 5} x2={lb + 4} y2={b - 5} stroke="#FF9F43" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <line x1={lt + 14} y1={t + 5} x2={lb + 10} y2={b - 5} stroke="#FF9F43" strokeWidth="2.5" strokeLinecap="round" opacity="0.22" />
      <ellipse cx="50" cy={t - 2} rx="22" ry="9" fill="#FDDAC5" />
      <circle cx="50" cy={t - 14} r="14" fill="#FDDAC5" />
      <circle cx="40" cy={t - 11} r="9" fill="#F4B8A0" opacity="0.6" />
      <circle cx="44" cy={t - 20} r="4" fill="white" opacity="0.25" />
    </svg>
  );
}

function MachineImage({ large = false }: { large?: boolean }) {
  return (
    <svg viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="17" y="16" width="66" height="74" rx="8" fill="#ECEFF1" stroke="#90A4AE" strokeWidth="1.5" />
      <rect x="25" y="24" width="50" height="28" rx="4" fill="#CFD8DC" stroke="#78909C" strokeWidth="1" />
      <rect x="29" y="28" width="30" height="14" rx="2" fill="#263238" />
      <text x="44" y="38" textAnchor="middle" fill="#80CBC4" fontSize="6.5" fontFamily="monospace">READY</text>
      <circle cx="68" cy="32" r="4" fill="#EF5350" />
      <circle cx="68" cy="42" r="4" fill="#66BB6A" />
      <rect x="41" y="54" width="18" height="18" rx="9" fill="#B0BEC5" stroke="#78909C" strokeWidth="1" />
      <rect x="44" y="70" width="12" height="8" rx="2" fill="#90A4AE" />
      <path d="M50,80 Q54,75 50,70 Q46,65 50,60" stroke="#FDDAC5" strokeWidth="3" strokeLinecap="round" />
      <line x1="21" y1="64" x2="33" y2="64" stroke="#90A4AE" strokeWidth="1.2" />
      <line x1="21" y1="70" x2="33" y2="70" stroke="#90A4AE" strokeWidth="1.2" />
      <line x1="21" y1="76" x2="33" y2="76" stroke="#90A4AE" strokeWidth="1.2" />
      <rect x="21" y="86" width="58" height="8" rx="3" fill="#90A4AE" />
      {large && (
        <>
          <rect x="67" y="56" width="10" height="20" rx="3" fill="#78909C" />
          <text x="72" y="69" textAnchor="middle" fill="#ECEFF1" fontSize="8" fontWeight="bold">+</text>
        </>
      )}
    </svg>
  );
}

function CleaningKitImage() {
  return (
    <svg viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="30" y="44" width="24" height="52" rx="7" fill="#64B5F6" stroke="#1565C0" strokeWidth="1.2" />
      <rect x="30" y="42" width="11" height="8" rx="2" fill="#1565C0" />
      <path d="M30,52 L20,52 L20,43 L34,43" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="17" cy="41" r="3" fill="#64B5F6" opacity="0.55" />
      <rect x="33" y="58" width="18" height="24" rx="2" fill="white" opacity="0.38" />
      <line x1="35" y1="64" x2="49" y2="64" stroke="#1565C0" strokeWidth="1" opacity="0.5" />
      <line x1="35" y1="70" x2="49" y2="70" stroke="#1565C0" strokeWidth="1" opacity="0.5" />
      <line x1="35" y1="76" x2="49" y2="76" stroke="#1565C0" strokeWidth="1" opacity="0.5" />
      <rect x="65" y="28" width="6" height="62" rx="3" fill="#6D4C41" />
      <rect x="57" y="20" width="22" height="16" rx="4" fill="#EEEEEE" stroke="#BDBDBD" strokeWidth="1" />
      <line x1="60" y1="36" x2="60" y2="22" stroke="#BDBDBD" strokeWidth="1.2" />
      <line x1="64" y1="36" x2="64" y2="22" stroke="#BDBDBD" strokeWidth="1.2" />
      <line x1="68" y1="36" x2="68" y2="22" stroke="#BDBDBD" strokeWidth="1.2" />
      <line x1="72" y1="36" x2="72" y2="22" stroke="#BDBDBD" strokeWidth="1.2" />
      <circle cx="40" cy="28" r="5" stroke="#64B5F6" strokeWidth="1.5" />
      <circle cx="50" cy="22" r="3.5" stroke="#64B5F6" strokeWidth="1.5" />
      <circle cx="34" cy="22" r="3" stroke="#64B5F6" strokeWidth="1.2" />
    </svg>
  );
}

function PartsKitImage() {
  return (
    <svg viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="13" y="60" width="74" height="46" rx="4" fill="#F5F5F5" stroke="#BDBDBD" strokeWidth="1.5" />
      <path d="M13,60 L13,46 L87,46 L87,60" fill="#EEEEEE" stroke="#BDBDBD" strokeWidth="1.5" />
      <line x1="50" y1="46" x2="50" y2="60" stroke="#BDBDBD" strokeWidth="1" />
      <line x1="27" y1="53" x2="46" y2="53" stroke="#757575" strokeWidth="3" strokeLinecap="round" />
      <circle cx="25" cy="53" r="5" stroke="#757575" strokeWidth="2" />
      <circle cx="25" cy="53" r="2" fill="#757575" />
      <circle cx="68" cy="53" r="7" stroke="#757575" strokeWidth="2" />
      <circle cx="68" cy="53" r="3" fill="#757575" />
      {[25, 40, 55, 70].map(x => (
        <g key={x}>
          <circle cx={x} cy="76" r="6" fill="#E0E0E0" stroke="#9E9E9E" strokeWidth="1" />
          <line x1={x - 4} y1="76" x2={x + 4} y2="76" stroke="#616161" strokeWidth="1.2" />
          <line x1={x} y1="72" x2={x} y2="80" stroke="#616161" strokeWidth="1.2" />
        </g>
      ))}
      <rect x="18" y="90" width="64" height="12" rx="2" fill="#E8E8E8" stroke="#BDBDBD" strokeWidth="1" />
      <line x1="40" y1="90" x2="40" y2="102" stroke="#BDBDBD" strokeWidth="1" />
      <line x1="60" y1="90" x2="60" y2="102" stroke="#BDBDBD" strokeWidth="1" />
    </svg>
  );
}

function getProductImage(productId: string) {
  switch (productId) {
    case 's1': return <ConeImage />;
    case 's2': return <ConeImage />;
    case 's3': return <ConeImage />;
    case 's4': return <ConeImage premium />;
    case 'r1': return <WaferImage variant="narrow" />;
    case 'r2': return <WaferImage variant="medium" />;
    case 'r3': return <WaferImage variant="wide" />;
    case 'r4': return <WaferImage variant="special" />;
    case 'b1': return <CupImage size="small" />;
    case 'b2': return <CupImage size="medium" />;
    case 'b3': return <CupImage size="large" />;
    case 'm1': return <MachineImage />;
    case 'm2': return <MachineImage large />;
    case 'm3': return <CleaningKitImage />;
    case 'm4': return <PartsKitImage />;
    default: return <span className="text-6xl">📦</span>;
  }
}

// ── Types ────────────────────────────────────────────────────────────────────

type Product = {
  id: string;
  name: string;
  category: 'strutar' | 'ran' | 'bagare' | 'maskiner';
  description: string;
  price: number;
  unit: string;
  variants?: string[];
};

type CartItem = {
  product: Product;
  quantity: number;
  variant?: string;
};

type AppUser = {
  email: string;
  name: string;
  role: 'admin' | 'customer';
};

type Order = {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
};

// ── Data ─────────────────────────────────────────────────────────────────────

const products: Product[] = [
  { id: 's1', name: 'Standard Strut 10cm', category: 'strutar', description: 'Klassisk glasstrut, perfekt för mjukglass', price: 125, unit: 'förpackning (200 st)' },
  { id: 's2', name: 'Standard Strut 12cm', category: 'strutar', description: 'Mellanstorlek, populäraste valet', price: 145, unit: 'förpackning (200 st)' },
  { id: 's3', name: 'Standard Strut 15cm', category: 'strutar', description: 'Stor strut för extra stora portioner', price: 165, unit: 'förpackning (200 st)' },
  { id: 's4', name: 'Premium Våffelstrut', category: 'strutar', description: 'Exklusiv våffelstrut med guldkant', price: 285, unit: 'förpackning (150 st)' },
  { id: 'r1', name: 'Två-kulors Rån Smal', category: 'ran', description: 'Kompakt rån för två glasskulor', price: 165, unit: 'förpackning (500 st)', variants: ['Smal', 'Medium', 'Bred'] },
  { id: 'r2', name: 'Tre-kulors Rån Medium', category: 'ran', description: 'Standard rån för tre glasskulor', price: 185, unit: 'förpackning (500 st)', variants: ['Smal', 'Medium', 'Bred'] },
  { id: 'r3', name: 'Fyr-kulors Rån Bred', category: 'ran', description: 'Extra brett rån för fyra glasskulor', price: 205, unit: 'förpackning (500 st)', variants: ['Smal', 'Medium', 'Bred'] },
  { id: 'r4', name: 'Karnevalsrånet Special', category: 'ran', description: 'Med plats för glass, sylt, grädde och skumboll', price: 245, unit: 'förpackning (300 st)' },
  { id: 'b1', name: 'Glassbägare 250ml', category: 'bagare', description: 'Mindre bägare för enskilda portioner', price: 95, unit: 'förpackning (500 st)' },
  { id: 'b2', name: 'Glassbägare 400ml', category: 'bagare', description: 'Standard bägare, mest populär', price: 115, unit: 'förpackning (500 st)' },
  { id: 'b3', name: 'Glassbägare 600ml', category: 'bagare', description: 'Stor bägare för familjeportioner', price: 135, unit: 'förpackning (400 st)' },
  { id: 'm1', name: 'Carpigiani Soft Plus', category: 'maskiner', description: 'Italiensk mjukglassmaskin för mindre verksamheter. Kapacitet: 15-20 liter/timme', price: 45900, unit: 'st' },
  { id: 'm2', name: 'Carpigiani Magistra', category: 'maskiner', description: 'Professionell maskin med dubbla kylsystem. Kapacitet: 30-40 liter/timme', price: 78500, unit: 'st' },
  { id: 'm3', name: 'Maskinrengöring Complete', category: 'maskiner', description: 'Komplett rengöringskit för glassmaskiner', price: 850, unit: 'kit' },
  { id: 'm4', name: 'Reservdelspaket Standard', category: 'maskiner', description: 'De mest frekventa reservdelarna för underhåll', price: 3200, unit: 'paket' },
];

const initialStock: Record<string, number> = {
  s1: 45, s2: 120, s3: 38, s4: 12,
  r1: 85, r2: 95, r3: 62, r4: 8,
  b1: 150, b2: 200, b3: 75,
  m1: 3, m2: 1, m3: 22, m4: 15,
};

type Combo = {
  id: string;
  name: string;
  description: string;
  badge: string;
  items: { productId: string; quantity: number }[];
  discountPercent: number;
};

const combos: Combo[] = [
  {
    id: 'c1',
    name: 'Kiosk Starter',
    description: 'Det perfekta startpaketet för en ny glasskiosk. Täcker alla basbehovet.',
    badge: 'Populärast',
    items: [{ productId: 's2', quantity: 3 }, { productId: 'b2', quantity: 2 }, { productId: 'r2', quantity: 1 }],
    discountPercent: 10,
  },
  {
    id: 'c2',
    name: 'Strut & Rån Kombo',
    description: 'Bästa kombinationen av klassiska strutar och rån för hela sommarsäsongen.',
    badge: 'Bästsäljare',
    items: [{ productId: 's2', quantity: 2 }, { productId: 'r2', quantity: 2 }, { productId: 's4', quantity: 1 }],
    discountPercent: 8,
  },
  {
    id: 'c3',
    name: 'Maskinpaketet',
    description: 'Allt du behöver för din mjukglassmaskin — maskin, rengöring och reservdelar.',
    badge: 'Spara mest',
    items: [{ productId: 'm1', quantity: 1 }, { productId: 'm3', quantity: 2 }, { productId: 'm4', quantity: 1 }],
    discountPercent: 12,
  },
  {
    id: 'c4',
    name: 'Sommarsäsongen',
    description: 'Maxa säsongen med denna populära kombination — täcker en hel sommarmånad.',
    badge: 'Nytt',
    items: [
      { productId: 's2', quantity: 5 },
      { productId: 'r2', quantity: 3 },
      { productId: 'b2', quantity: 3 },
      { productId: 'r4', quantity: 1 },
    ],
    discountPercent: 15,
  },
];

// ── Helper components ────────────────────────────────────────────────────────

function StockBadge({ stock }: { stock: number }) {
  if (stock === 0)
    return <Badge variant="outline" className="text-red-600 border-red-500 text-xs">Slut i lager</Badge>;
  if (stock <= 10)
    return (
      <Badge variant="outline" className="text-amber-600 border-amber-500 text-xs flex items-center gap-1">
        <AlertTriangle className="w-3 h-3" /> Snart slut ({stock} kvar)
      </Badge>
    );
  return <Badge variant="outline" className="text-green-600 border-green-500 text-xs">I lager ({stock} st)</Badge>;
}

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  // Navigation & UI
  const [activeCategory, setActiveCategory] = useState<string>('alla');
  const [activeMainTab, setActiveMainTab] = useState<'produkter' | 'kombos'>('produkter');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Cart
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Inventory & prices (mutable by admin)
  const [inventory, setInventory] = useState<Record<string, number>>(initialStock);
  const [prices, setPrices] = useState<Record<string, number>>(
    Object.fromEntries(products.map(p => [p.id, p.price]))
  );

  // Auth
  const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
  // Per-user order history keyed by email
  const [orderHistories, setOrderHistories] = useState<Record<string, Order[]>>({});
  const currentUserOrders: Order[] = currentUser ? (orderHistories[currentUser.email] ?? []) : [];
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Admin panel
  const [adminTab, setAdminTab] = useState<'stock' | 'prices'>('stock');
  const [restockValues, setRestockValues] = useState<Record<string, number>>({});
  const [editPrices, setEditPrices] = useState<Record<string, string>>({});

  // Contact form
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactSent, setContactSent] = useState(false);

  // ── Helpers ──

  const getPrice = (productId: string) => prices[productId] ?? products.find(p => p.id === productId)?.price ?? 0;

  const categories = [
    { id: 'alla', name: 'Alla produkter' },
    { id: 'strutar', name: 'Strutar' },
    { id: 'ran', name: 'Rån' },
    { id: 'bagare', name: 'Bägare' },
    { id: 'maskiner', name: 'Glassmaskiner' },
  ];

  const filteredProducts = activeCategory === 'alla'
    ? products
    : products.filter(p => p.category === activeCategory);

  const addToCart = (product: Product, variant?: string) => {
    const stock = inventory[product.id] ?? 0;
    if (stock === 0) return;
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.variant === variant);
      const currentQty = existing?.quantity ?? 0;
      if (currentQty >= stock) return prev;
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, quantity: 1, variant }];
    });
  };

  const addComboToCart = (combo: Combo) => {
    combo.items.forEach(({ productId, quantity }) => {
      const product = products.find(p => p.id === productId);
      if (!product) return;
      for (let i = 0; i < quantity; i++) addToCart(product);
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, variant: string | undefined, delta: number) => {
    const stock = inventory[productId] ?? 0;
    setCart(prev =>
      prev.map(item => {
        if (item.product.id === productId && item.variant === variant) {
          const newQty = Math.min(item.quantity + delta, stock);
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string, variant: string | undefined) => {
    setCart(prev => prev.filter(i => !(i.product.id === productId && i.variant === variant)));
  };

  const cartTotal = cart.reduce((sum, item) => sum + getPrice(item.product.id) * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handlePlaceOrder = () => {
    const newInventory = { ...inventory };
    cart.forEach(item => {
      newInventory[item.product.id] = Math.max(0, (newInventory[item.product.id] ?? 0) - item.quantity);
    });
    setInventory(newInventory);
    if (currentUser) {
      const order: Order = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('sv-SE'),
        items: [...cart],
        total: cartTotal,
      };
      setOrderHistories(prev => ({
        ...prev,
        [currentUser.email]: [order, ...(prev[currentUser.email] ?? [])],
      }));
    }
    alert('Tack för din beställning! Vi kontaktar dig inom kort.');
    setIsCheckoutOpen(false);
    setCart([]);
  };

  const repeatOrder = (order: Order) => {
    order.items.forEach(item => {
      for (let i = 0; i < item.quantity; i++) addToCart(item.product, item.variant);
    });
    setIsAccountOpen(false);
    setIsCartOpen(true);
  };

  // ── Auth ──

  const handleLogin = () => {
    setLoginError('');
    if (loginEmail === 'admin@strutochran.se' && loginPassword === 'admin123') {
      setCurrentUser({ email: loginEmail, name: 'Admin', role: 'admin' });
      setIsLoginOpen(false);
      setLoginEmail(''); setLoginPassword('');
    } else if (loginEmail.includes('@') && loginPassword.length >= 4) {
      const name = loginEmail.split('@')[0].replace(/[._]/g, ' ');
      setCurrentUser({ email: loginEmail, name, role: 'customer' });
      setIsLoginOpen(false);
      setLoginEmail(''); setLoginPassword('');
    } else {
      setLoginError('Fel e-post eller lösenord (min 4 tecken)');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsUserMenuOpen(false);
  };

  // ── Admin actions ──

  const handleRestock = (productId: string) => {
    const amount = restockValues[productId] ?? 0;
    if (amount <= 0) return;
    setInventory(prev => ({ ...prev, [productId]: (prev[productId] ?? 0) + amount }));
    setRestockValues(prev => ({ ...prev, [productId]: 0 }));
  };

  const handleClearStock = (productId: string) => {
    if (confirm('Nollställa lagret för denna produkt?')) {
      setInventory(prev => ({ ...prev, [productId]: 0 }));
    }
  };

  const handleSavePrices = () => {
    const updated = { ...prices };
    Object.entries(editPrices).forEach(([id, val]) => {
      const num = parseFloat(val);
      if (!isNaN(num) && num > 0) updated[id] = num;
    });
    setPrices(updated);
    setEditPrices({});
    alert('Priser uppdaterade!');
  };

  // ── Contact form ──

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  // ── Combo price helper ──

  const comboBaseTotal = (combo: Combo) =>
    combo.items.reduce((sum, { productId, quantity }) => sum + getPrice(productId) * quantity, 0);

  const comboDiscountedTotal = (combo: Combo) =>
    Math.round(comboBaseTotal(combo) * (1 - combo.discountPercent / 100));

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <div className="min-h-screen bg-white">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-orange-600">Strut&amp;Rån</h1>
              <nav className="hidden md:flex gap-6">
                <a href="#produkter" className="text-sm font-medium hover:text-orange-600 transition">Produkter</a>
                <a href="#om-oss" className="text-sm font-medium hover:text-orange-600 transition">Om oss</a>
                <a href="#kontakt" className="text-sm font-medium hover:text-orange-600 transition">Kontakt</a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setIsCartOpen(true)} className="relative p-2 hover:bg-gray-100 rounded-lg transition">
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* User menu */}
              {currentUser ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition text-sm font-medium text-orange-800"
                  >
                    <User className="w-4 h-4" />
                    {currentUser.name}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-10 bg-white border rounded-lg shadow-lg w-48 z-50">
                      {currentUser.role === 'customer' && (
                        <button
                          onClick={() => { setIsAccountOpen(true); setIsUserMenuOpen(false); }}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-2"
                        >
                          <User className="w-4 h-4" /> Mitt konto
                        </button>
                      )}
                      {currentUser.role === 'admin' && (
                        <button
                          onClick={() => { setIsAdminOpen(true); setIsUserMenuOpen(false); }}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 flex items-center gap-2"
                        >
                          <Settings className="w-4 h-4" /> Adminpanel
                        </button>
                      )}
                      <Separator />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 text-red-600 flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" /> Logga ut
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button variant="outline" size="sm" onClick={() => setIsLoginOpen(true)}>
                  <User className="w-4 h-4 mr-1" /> Logga in
                </Button>
              )}

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="px-4 py-4 flex flex-col gap-2">
              <a href="#produkter" className="px-4 py-2 hover:bg-gray-100 rounded-lg transition">Produkter</a>
              <a href="#om-oss" className="px-4 py-2 hover:bg-gray-100 rounded-lg transition">Om oss</a>
              <a href="#kontakt" className="px-4 py-2 hover:bg-gray-100 rounded-lg transition">Kontakt</a>
            </nav>
          </div>
        )}
      </header>

      {/* ── Admin toolbar ── */}
      {currentUser?.role === 'admin' && (
        <div className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between text-sm">
          <span className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-orange-400" />
            <span className="font-medium">Adminläge aktivt</span>
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => { setAdminTab('stock'); setIsAdminOpen(true); }}
              className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 px-3 py-1 rounded-md transition font-medium"
            >
              <Settings className="w-3.5 h-3.5" /> Lagerhantering
            </button>
            <button
              onClick={() => { setAdminTab('prices'); setIsAdminOpen(true); }}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-md transition"
            >
              Prisändring
            </button>
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Din bästa partner för glassförpackningar</h2>
            <p className="text-xl text-gray-700 mb-8">
              Vi levererar strutar, rån, bägare och mjukglassmaskiner till glasskiosker och restauranger i hela Sverige.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700"
                onClick={() => document.getElementById('produkter')?.scrollIntoView({ behavior: 'smooth' })}>
                Se våra produkter
              </Button>
              <Button size="lg" variant="outline"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
                Kontakta oss
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10 w-96 h-96">
          <ConeImage />
        </div>
      </section>

      {/* ── Products + Combos Section ── */}
      <section id="produkter" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vårt sortiment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strutar i 16 storlekar, rån i olika konvinklar, bägare och professionella glassmaskiner från Italien.
            </p>
          </div>

          {/* Main tab toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 rounded-xl p-1 flex gap-1">
              <button
                onClick={() => setActiveMainTab('produkter')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition ${activeMainTab === 'produkter' ? 'bg-white shadow text-orange-600' : 'text-gray-600 hover:text-gray-800'}`}
              >
                Alla produkter
              </button>
              <button
                onClick={() => setActiveMainTab('kombos')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${activeMainTab === 'kombos' ? 'bg-white shadow text-orange-600' : 'text-gray-600 hover:text-gray-800'}`}
              >
                <Star className="w-4 h-4" /> Populära kombos
              </button>
            </div>
          </div>

          {/* ── Kombos tab ── */}
          {activeMainTab === 'kombos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {combos.map(combo => {
                const base = comboBaseTotal(combo);
                const discounted = comboDiscountedTotal(combo);
                return (
                  <div key={combo.id} className="bg-white border-2 border-orange-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{combo.name}</h3>
                        <Badge className="bg-orange-600 text-white">{combo.badge}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm">{combo.description}</p>
                    </div>
                    <div className="p-5">
                      <div className="space-y-2 mb-4">
                        {combo.items.map(({ productId, quantity }) => {
                          const prod = products.find(p => p.id === productId);
                          if (!prod) return null;
                          return (
                            <div key={productId} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-orange-50 rounded flex items-center justify-center">
                                  {getProductImage(productId)}
                                </div>
                                <span className="text-gray-700">{prod.name} × {quantity}</span>
                              </div>
                              <span className="text-gray-500">{(getPrice(productId) * quantity).toLocaleString('sv-SE')} kr</span>
                            </div>
                          );
                        })}
                      </div>
                      <Separator className="mb-4" />
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-sm text-gray-400 line-through">{base.toLocaleString('sv-SE')} kr</div>
                          <div className="text-2xl font-bold text-orange-600">{discounted.toLocaleString('sv-SE')} kr</div>
                          <div className="text-xs text-green-600 font-medium">Du sparar {(base - discounted).toLocaleString('sv-SE')} kr ({combo.discountPercent}%)</div>
                        </div>
                        <Button
                          className="bg-orange-600 hover:bg-orange-700"
                          onClick={() => addComboToCart(combo)}
                        >
                          Lägg till allt
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Products tab ── */}
          {activeMainTab === 'produkter' && (
            <>
              <div className="flex flex-wrap gap-3 justify-center mb-10">
                {categories.map(cat => (
                  <Button
                    key={cat.id}
                    variant={activeCategory === cat.id ? 'default' : 'outline'}
                    onClick={() => setActiveCategory(cat.id)}
                    className={activeCategory === cat.id ? 'bg-orange-600 hover:bg-orange-700' : ''}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => {
                  const stock = inventory[product.id] ?? 0;
                  const isOut = stock === 0;
                  return (
                    <div
                      key={product.id}
                      className={`bg-white border rounded-lg overflow-hidden transition-shadow cursor-pointer ${isOut ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg'}`}
                      onClick={() => !isOut && setSelectedProduct(product)}
                    >
                      <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-6">
                        {getProductImage(product.id)}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 text-sm mb-2">{product.name}</h3>
                        <div className="mb-2"><StockBadge stock={stock} /></div>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{getPrice(product.id).toLocaleString('sv-SE')} kr</div>
                            <div className="text-xs text-gray-500">per {product.unit}</div>
                          </div>
                          <Button
                            size="sm"
                            className="bg-orange-600 hover:bg-orange-700"
                            disabled={isOut}
                            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                          >
                            {isOut ? 'Slut' : 'Lägg till'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="om-oss" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Om AB Strut&amp;Rån</h2>
              <div className="space-y-4 text-gray-700">
                <p>Vi är ett familjeföretag med huvudkontor i Lund som sedan många år tillbaka levererar förbrukningsvaror och mjukglassmaskiner till glasskiosker på den svenska marknaden.</p>
                <p>Vår affärsidé är att vara glassförsäljarens bästa partner. Vi erbjuder bästa pris/prestanda, hög kvalitet, skräddarsydda rabatt- och leveransvillkor samt snabb leverans direkt till kund.</p>
                <p>Med lager i Lund, Göteborg och Stockholm kan vi leverera snabbt när strutläget blir akut.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[['16', 'Olika strutstorlekar'], ['3', 'Lagerplatser i Sverige'], ['24h', 'Snabb leverans'], ['100+', 'Nöjda kunder']].map(([val, label]) => (
                <div key={label} className="bg-white p-6 rounded-lg border">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{val}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="kontakt" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakta oss</h2>
            <p className="text-lg text-gray-600">Vi hjälper dig gärna med frågor och beställningar</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Phone, title: 'Telefon', line1: '046-123 45 67', line2: 'Vardagar 8-17' },
              { icon: Mail, title: 'E-post', line1: 'order@strutochran.se', line2: 'Vi svarar inom 24h' },
              { icon: MapPin, title: 'Huvudkontor', line1: 'Glassgatan 12', line2: '222 22 Lund' },
            ].map(({ icon: Icon, title, line1, line2 }) => (
              <div key={title} className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{line1}</p>
                <p className="text-sm text-gray-500 mt-1">{line2}</p>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="max-w-2xl mx-auto bg-white border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skicka ett meddelande</h3>
            {contactSent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Meddelande skickat!</h4>
                <p className="text-gray-600 mb-6">Tack för ditt meddelande. Vi återkommer inom 24 timmar.</p>
                <Button variant="outline" onClick={() => setContactSent(false)}>Skicka ett till</Button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cf-name">Namn *</Label>
                    <Input id="cf-name" placeholder="Anna Andersson" required
                      value={contactForm.name}
                      onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div>
                    <Label htmlFor="cf-email">E-post *</Label>
                    <Input id="cf-email" type="email" placeholder="anna@foretag.se" required
                      value={contactForm.email}
                      onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cf-subject">Ämne *</Label>
                  <Input id="cf-subject" placeholder="Fråga om leverans" required
                    value={contactForm.subject}
                    onChange={e => setContactForm(f => ({ ...f, subject: e.target.value }))} />
                </div>
                <div>
                  <Label htmlFor="cf-message">Meddelande *</Label>
                  <Textarea id="cf-message" placeholder="Beskriv ditt ärende..." rows={5} required
                    value={contactForm.message}
                    onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                  <Send className="w-4 h-4 mr-2" /> Skicka meddelande
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Strut&amp;Rån</h3>
              <p className="text-sm">Glassförsäljarens bästa partner sedan 1985</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Lagerplatser</h4>
              <ul className="text-sm space-y-2"><li>Lund (Huvudlager)</li><li>Stockholm</li><li>Göteborg</li></ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produkter</h4>
              <ul className="text-sm space-y-2"><li>Glasstrutar</li><li>Glassrån</li><li>Glassbägare</li><li>Mjukglassmaskiner</li></ul>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-8" />
          <p className="text-center text-sm">&copy; 2024 AB Strut&amp;Rån. Alla rättigheter förbehållna.</p>
        </div>
      </footer>

      {/* ════════════════════════════════════════════════════════════════════
          MODALS & OVERLAYS
      ════════════════════════════════════════════════════════════════════ */}

      {/* ── Cart Drawer ── */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200" onClick={() => setIsCartOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">Varukorg</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition"><X className="w-6 h-6" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>Din varukorg är tom</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => {
                    const stock = inventory[item.product.id] ?? 0;
                    return (
                      <div key={`${item.product.id}-${item.variant ?? 'default'}-${index}`} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                            {getProductImage(item.product.id)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm mb-1">{item.product.name}</h3>
                            {item.variant && <p className="text-xs text-gray-600 mb-1">Variant: {item.variant}</p>}
                            <p className="text-sm font-bold text-orange-600">{getPrice(item.product.id).toLocaleString('sv-SE')} kr</p>
                          </div>
                          <button onClick={() => removeFromCart(item.product.id, item.variant)} className="p-2 hover:bg-red-50 rounded-lg transition h-fit">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <button onClick={() => updateQuantity(item.product.id, item.variant, -1)} className="w-8 h-8 bg-white border rounded-lg flex items-center justify-center hover:bg-gray-50 transition">
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product.id, item.variant, 1)} disabled={item.quantity >= stock} className="w-8 h-8 bg-white border rounded-lg flex items-center justify-center hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed">
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold">{(getPrice(item.product.id) * item.quantity).toLocaleString('sv-SE')} kr</div>
                            <div className="text-xs text-gray-400">{stock} st kvar</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="border-t p-6 bg-gray-50">
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-semibold">Totalt:</span>
                  <span className="text-2xl font-bold text-orange-600">{cartTotal.toLocaleString('sv-SE')} kr</span>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg" onClick={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }}>
                  Gå till kassan
                </Button>
              </div>
            )}
          </div>
        </>
      )}

      {/* ── Product Detail Modal ── */}
      {selectedProduct && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200" onClick={() => setSelectedProduct(null)} />
          <div className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-lg shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col h-full max-h-[90vh]">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                <button onClick={() => setSelectedProduct(null)} className="p-2 hover:bg-gray-100 rounded-lg transition"><X className="w-6 h-6" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center p-12 mb-6">
                  {getProductImage(selectedProduct.id)}
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Beskrivning</h3>
                    <p className="text-gray-700">{selectedProduct.description}</p>
                  </div>
                  {selectedProduct.variants && (
                    <div>
                      <h3 className="font-semibold mb-2">Tillgängliga varianter</h3>
                      <div className="flex flex-wrap gap-2">{selectedProduct.variants.map(v => <Badge key={v} variant="outline">{v}</Badge>)}</div>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-orange-600">{getPrice(selectedProduct.id).toLocaleString('sv-SE')} kr</span>
                    <span className="text-gray-600">per {selectedProduct.unit}</span>
                  </div>
                  <StockBadge stock={inventory[selectedProduct.id] ?? 0} />
                </div>
              </div>
              <div className="border-t p-6 bg-gray-50">
                <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg"
                  disabled={(inventory[selectedProduct.id] ?? 0) === 0}
                  onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}>
                  Lägg till i varukorgen
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Checkout Modal ── */}
      {isCheckoutOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200" onClick={() => setIsCheckoutOpen(false)} />
          <div className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl bg-white rounded-lg shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col h-full max-h-[90vh]">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-bold">Slutför beställning</h2>
                <button onClick={() => setIsCheckoutOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition"><X className="w-6 h-6" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <form className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Företagsinformation</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><Label htmlFor="company">Företagsnamn *</Label><Input id="company" placeholder="Ditt företag AB" /></div>
                      <div><Label htmlFor="customer-number">Kundnummer</Label><Input id="customer-number" placeholder="123456" /></div>
                      <div><Label htmlFor="contact-name">Kontaktperson *</Label><Input id="contact-name" placeholder="Anna Andersson" /></div>
                      <div><Label htmlFor="phone">Telefon *</Label><Input id="phone" type="tel" placeholder="070-123 45 67" /></div>
                      <div className="md:col-span-2"><Label htmlFor="email">E-post *</Label><Input id="email" type="email" placeholder="anna@foretag.se" /></div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Leveransadress</h3>
                    <div className="space-y-4">
                      <div><Label htmlFor="address">Gatuadress *</Label><Input id="address" placeholder="Storgatan 1" /></div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div><Label htmlFor="postal-code">Postnummer *</Label><Input id="postal-code" placeholder="123 45" /></div>
                        <div><Label htmlFor="city">Ort *</Label><Input id="city" placeholder="Stockholm" /></div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div><h3 className="text-lg font-semibold mb-4">Meddelande</h3><Textarea placeholder="Särskilda önskemål..." rows={3} /></div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Ordersammanfattning</h3>
                    <div className="space-y-2 bg-gray-50 rounded-lg p-4">
                      {cart.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span>{item.product.name} {item.variant && `(${item.variant})`} × {item.quantity}</span>
                          <span className="font-semibold">{(getPrice(item.product.id) * item.quantity).toLocaleString('sv-SE')} kr</span>
                        </div>
                      ))}
                      <Separator className="my-3" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Totalt:</span>
                        <span className="text-orange-600">{cartTotal.toLocaleString('sv-SE')} kr</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">Priser exkl. moms.</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="border-t p-6 bg-gray-50">
                <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg" onClick={handlePlaceOrder}>Skicka beställning</Button>
                <p className="text-xs text-center text-gray-600 mt-3">Vi kontaktar dig för att bekräfta pris och leveranstid.</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Login Modal ── */}
      {isLoginOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200" onClick={() => setIsLoginOpen(false)} />
          <div className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md bg-white rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">Logga in</h2>
              <button onClick={() => setIsLoginOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition"><X className="w-6 h-6" /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <Label htmlFor="login-email">E-post</Label>
                <Input id="login-email" type="email" placeholder="din@epost.se" value={loginEmail} onChange={e => setLoginEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()} />
              </div>
              <div>
                <Label htmlFor="login-password">Lösenord</Label>
                <Input id="login-password" type="password" placeholder="••••••••" value={loginPassword} onChange={e => setLoginPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()} />
              </div>
              {loginError && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{loginError}</p>}
              <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg" onClick={handleLogin}>Logga in</Button>
              <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-700 space-y-1">
                <p className="font-semibold">Testinloggningar:</p>
                <p>Admin: admin@strutochran.se / admin123</p>
                <p>Kund: valfri e-post + minst 4 tecken</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Customer Account Modal ── */}
      {isAccountOpen && currentUser?.role === 'customer' && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200" onClick={() => setIsAccountOpen(false)} />
          <div className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col h-full max-h-[90vh]">
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h2 className="text-2xl font-bold">Mitt konto</h2>
                  <p className="text-sm text-gray-500">{currentUser.email}</p>
                </div>
                <button onClick={() => setIsAccountOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition"><X className="w-6 h-6" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <h3 className="text-lg font-semibold mb-4">Köphistorik</h3>
                {currentUserOrders.length === 0 ? (
                  <div className="text-center text-gray-500 py-12">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-20" />
                    <p>Inga tidigare köp</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {currentUserOrders.map(order => (
                      <div key={order.id} className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 flex items-center justify-between">
                          <div>
                            <span className="text-sm font-semibold text-gray-700">Order #{order.id.slice(-6)}</span>
                            <span className="text-xs text-gray-500 ml-3">{order.date}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-orange-600">{order.total.toLocaleString('sv-SE')} kr</span>
                            <Button size="sm" variant="outline" onClick={() => repeatOrder(order)}
                              className="flex items-center gap-1 text-xs">
                              <RefreshCw className="w-3 h-3" /> Upprepa
                            </Button>
                          </div>
                        </div>
                        <div className="p-4 space-y-1">
                          {order.items.map((item, i) => (
                            <div key={i} className="flex justify-between text-sm text-gray-600">
                              <span>{item.product.name} {item.variant && `(${item.variant})`} × {item.quantity}</span>
                              <span>{(item.product.price * item.quantity).toLocaleString('sv-SE')} kr</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Admin Panel ── */}
      {isAdminOpen && currentUser?.role === 'admin' && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200" onClick={() => setIsAdminOpen(false)} />
          <div className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-white rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col h-full max-h-[90vh]">
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold">Adminpanel</h2>
                </div>
                <button onClick={() => setIsAdminOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition"><X className="w-6 h-6" /></button>
              </div>

              {/* Admin tabs */}
              <div className="border-b px-6 flex gap-4">
                {[['stock', 'Lagerhantering'], ['prices', 'Prisändring']].map(([key, label]) => (
                  <button key={key} onClick={() => setAdminTab(key as 'stock' | 'prices')}
                    className={`py-3 text-sm font-medium border-b-2 transition ${adminTab === key ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {/* Stock management */}
                {adminTab === 'stock' && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-500 mb-4">Fyll på lager, justera eller nollställ saldo för varje produkt.</p>
                    {products.map(product => {
                      const stock = inventory[product.id] ?? 0;
                      const status = stock === 0 ? 'out' : stock <= 10 ? 'low' : 'ok';
                      return (
                        <div key={product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-10 h-10 flex-shrink-0 bg-white rounded border p-1">
                            {getProductImage(product.id)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm text-gray-900 truncate">{product.name}</div>
                            <div className={`text-xs font-semibold ${status === 'ok' ? 'text-green-600' : status === 'low' ? 'text-amber-600' : 'text-red-600'}`}>
                              {stock} st i lager
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Input
                              type="number"
                              min="0"
                              placeholder="Antal"
                              className="w-24 text-sm"
                              value={restockValues[product.id] ?? ''}
                              onChange={e => setRestockValues(prev => ({ ...prev, [product.id]: parseInt(e.target.value) || 0 }))}
                            />
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs" onClick={() => handleRestock(product.id)}>
                              + Fyll på
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 border-red-300 hover:bg-red-50 text-xs" onClick={() => handleClearStock(product.id)}>
                              Nollställ
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Price management */}
                {adminTab === 'prices' && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-500 mb-4">Ändra priser för produkterna. Klicka "Spara alla priser" för att bekräfta.</p>
                    {products.map(product => (
                      <div key={product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 flex-shrink-0 bg-white rounded border p-1">
                          {getProductImage(product.id)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-gray-900 truncate">{product.name}</div>
                          <div className="text-xs text-gray-500">per {product.unit}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <Input
                              type="number"
                              min="1"
                              className="w-32 text-sm pr-8"
                              value={editPrices[product.id] ?? getPrice(product.id)}
                              onChange={e => setEditPrices(prev => ({ ...prev, [product.id]: e.target.value }))}
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">kr</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="pt-4">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700" onClick={handleSavePrices}>
                        Spara alla priser
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
}
