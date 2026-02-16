import { Instagram, Mail, MessageCircle } from 'lucide-react';
import phTeamLogo from '../../assets/55e335312512861d8a06e54d00b45ef824a2c347.png';

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-8">
          {/* Brand */}
          <div>
            <img src={phTeamLogo} alt="PH TEAM" className="h-16 w-auto mb-4" />
            <p className="text-white/60 leading-relaxed">
              Consultoria fitness de alta performance com metodologia PH TEAM.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4 text-[#E10600]">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5575992179232"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-[#E10600] transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="mailto:contato@phteam.com.br"
                className="flex items-center gap-2 text-white/60 hover:text-[#E10600] transition-colors"
              >
                <Mail size={18} />
                contato@phteam.com.br
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl mb-4 text-[#E10600]">Redes Sociais</h3>
            <a
              href="https://www.instagram.com/pedroreiss_s/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-[#E10600] transition-colors"
            >
              <Instagram size={18} />
              @pedroreiss_s
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} PH TEAM • Pedro Henrique - Consultoria Fitness
          </p>
        </div>
      </div>
    </footer>
  );
}
