import { Home, Heart, Clock, Menu as MenuIcon } from 'lucide-react';

export default function BottomNav() {
    return (
        <footer
            className="h-16 flex justify-around items-center shadow-lg"
            style={{ backgroundColor: '#2C3E50' }}
        >
            <Home size={28} color="#C17B7B" strokeWidth={2.5} />
            <Heart size={28} color="#FFFFFF" strokeWidth={2} />
            <Clock size={28} color="#FFFFFF" strokeWidth={2} />
            <MenuIcon size={28} color="#FFFFFF" strokeWidth={2} />
        </footer>
    );
}