import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/254108899189"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Pulse Ring Animation */}
      <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,50%)]/50 animate-ping" style={{ animationDuration: '2s' }} />
    </a>
  );
};

export default WhatsAppButton;
