import { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '@/components/Logo';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication - username: admin, password: sempresef2024
    if (username === 'admin' && password === 'sempresef2024') {
      localStorage.setItem('isAuthenticated', 'true');
      onLogin();
    } else {
      setError('Nume utilizator sau parolă greșite!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Logo className="justify-center mb-4" />
          <h1 className="font-bebas text-2xl tracking-wide text-foreground">
            PANEL ADMINISTRARE
          </h1>
        </div>

        {/* Login Form */}
        <div className="glass rounded-3xl p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="font-inter text-sm font-medium text-foreground">
                Nume utilizator
              </label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Introdu numele de utilizator"
                className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="font-inter text-sm font-medium text-foreground">
                Parolă
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Introdu parola"
                  className="bg-background/50 border-glass-border focus:border-primary transition-colors pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm font-inter text-center">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-radio hover:scale-105 transition-all duration-300 glow-primary font-bebas text-lg tracking-wide py-3"
            >
              <LogIn className="w-5 h-5 mr-2" />
              CONECTARE
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="font-inter text-xs text-muted-foreground">
              Conectează-te pentru a gestiona anunțurile site-ului
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;