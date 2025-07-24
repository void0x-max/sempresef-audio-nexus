import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, LogOut, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Logo from '@/components/Logo';

interface Anunt {
  id: string;
  titlu: string;
  descriere: string;
  data: string;
}

interface AdminPanelProps {
  onLogout: () => void;
}

const AdminPanel = ({ onLogout }: AdminPanelProps) => {
  const [anunturi, setAnunturi] = useState<Anunt[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    titlu: '',
    descriere: ''
  });

  // Load anunturi from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('anunturi');
    if (saved) {
      setAnunturi(JSON.parse(saved));
    }
  }, []);

  // Save anunturi to localStorage
  const saveAnunturi = (newAnunturi: Anunt[]) => {
    setAnunturi(newAnunturi);
    localStorage.setItem('anunturi', JSON.stringify(newAnunturi));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      // Edit existing
      const updated = anunturi.map(anunt => 
        anunt.id === editingId 
          ? { ...anunt, titlu: formData.titlu, descriere: formData.descriere }
          : anunt
      );
      saveAnunturi(updated);
    } else {
      // Add new
      const newAnunt: Anunt = {
        id: Date.now().toString(),
        titlu: formData.titlu,
        descriere: formData.descriere,
        data: new Date().toLocaleDateString('ro-RO')
      };
      saveAnunturi([newAnunt, ...anunturi]);
    }

    // Reset form
    setFormData({ titlu: '', descriere: '' });
    setShowForm(false);
    setEditingId(null);
  };

  const handleEdit = (anunt: Anunt) => {
    setFormData({ titlu: anunt.titlu, descriere: anunt.descriere });
    setEditingId(anunt.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Ești sigur că vrei să ștergi acest anunț?')) {
      saveAnunturi(anunturi.filter(anunt => anunt.id !== id));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    onLogout();
  };

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Deconectare
          </Button>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="font-bebas text-5xl tracking-wider text-foreground mb-4">
            PANEL ADMINISTRARE
          </h1>
          <p className="font-inter text-muted-foreground">
            Gestionează anunțurile site-ului SempreSef Media
          </p>
        </div>

        {/* Add Button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
              setFormData({ titlu: '', descriere: '' });
            }}
            className="bg-gradient-radio hover:scale-105 transition-all duration-300 glow-primary font-bebas text-lg tracking-wide"
          >
            <Plus className="w-5 h-5 mr-2" />
            ADAUGĂ ANUNȚ
          </Button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="glass rounded-3xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bebas text-2xl tracking-wide text-foreground">
                {editingId ? 'EDITEAZĂ ANUNȚ' : 'ANUNȚ NOU'}
              </h2>
              <Button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({ titlu: '', descriere: '' });
                }}
                variant="ghost"
                size="sm"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-inter text-sm font-medium text-foreground">
                  Titlu anunț *
                </label>
                <Input
                  value={formData.titlu}
                  onChange={(e) => setFormData({ ...formData, titlu: e.target.value })}
                  placeholder="Introdu titlul anunțului"
                  className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-inter text-sm font-medium text-foreground">
                  Descriere *
                </label>
                <Textarea
                  value={formData.descriere}
                  onChange={(e) => setFormData({ ...formData, descriere: e.target.value })}
                  placeholder="Scrie descrierea anunțului..."
                  rows={4}
                  className="bg-background/50 border-glass-border focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-radio hover:scale-105 transition-all duration-300 glow-primary font-bebas text-lg tracking-wide"
              >
                <Save className="w-5 h-5 mr-2" />
                {editingId ? 'ACTUALIZEAZĂ' : 'SALVEAZĂ'}
              </Button>
            </form>
          </div>
        )}

        {/* Anunturi List */}
        <div className="space-y-6">
          {anunturi.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="font-bebas text-2xl text-muted-foreground mb-2">
                NICIUN ANUNȚ
              </h3>
              <p className="font-inter text-muted-foreground">
                Adaugă primul anunț pentru site
              </p>
            </div>
          ) : (
            anunturi.map((anunt) => (
              <div key={anunt.id} className="glass rounded-3xl p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bebas text-2xl tracking-wide text-foreground mb-2">
                      {anunt.titlu}
                    </h3>
                    <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                      {anunt.descriere}
                    </p>
                    <div className="font-inter text-xs text-muted-foreground">
                      Adăugat la: {anunt.data}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(anunt)}
                      variant="outline"
                      size="sm"
                      className="border-secondary text-secondary hover:bg-secondary hover:text-background"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(anunt.id)}
                      variant="outline"
                      size="sm"
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;