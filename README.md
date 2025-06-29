# Exodus OS - Interactive Developer Portfolio

An innovative operating system-style portfolio showcasing the work and skills of Exodus Tola, a full-stack developer and entrepreneur from Ethiopia.

## 🚀 Features

- **Interactive Terminal**: Fully functional command-line interface with 20+ commands
- **OS-Style Interface**: Desktop environment with draggable windows and taskbar
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Multi-language Support**: English, Amharic, and Afaan Oromo
- **Dark/Light Theme**: Seamless theme switching
- **Real Projects**: Showcases actual applications with real impact metrics
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Local Inter font files
- **Deployment**: Vercel (optimized)

## 📊 Portfolio Highlights

- **69,000+ users** served across applications
- **$40K+ funding** raised for projects
- **5+ awards** for innovation and impact
- **8 major projects** including AgriX, BloodHero Ethiopia, and UniGo

## 🎮 Terminal Commands

Try these commands in the interactive terminal:

### Special Effects
- `matrix` - Enter the Matrix
- `hack` - Hacking simulation
- `clear` - Clear terminal

### Profile & Info
- `whoami` - User information
- `skills` - Interactive skills visualization
- `projects` - Project tree with stats
- `achievements` - Awards and recognition
- `contact` - Contact information
- `social` - Social media links

### System Commands
- `system` - System information
- `ps aux` - Running processes
- `top` - Performance monitor
- `git status` - Repository status
- `docker ps` - Container status

### Fun Commands
- `fortune` - Random tech quotes
- `coffee` - Coffee status
- `weather addis` - Addis Ababa weather
- `cowsay <text>` - ASCII art

## 🚀 Deployment

This project is optimized for Vercel deployment:

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd exodus-os
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy
   - Or use Vercel CLI: `vercel --prod`

## 📁 Project Structure

```
exodus-os/
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── desktop.tsx       # Main desktop interface
│   ├── terminal-window.tsx # Interactive terminal
│   └── window-manager.tsx # Window management
├── lib/                  # Utilities and data
├── public/              # Static assets
│   ├── fonts/          # Local font files
│   └── manifest.json   # PWA manifest
└── vercel.json         # Vercel configuration
```

## 🎯 Key Features

### Interactive Terminal
- 20+ custom commands
- Real-time system stats
- Matrix effect and animations
- Command history and autocomplete

### Desktop Environment
- Draggable windows
- Window management (minimize, maximize, close)
- Taskbar with running applications
- Quick access dock

### Portfolio Sections
- About & Background
- Technical Skills
- Project Showcases
- Client Testimonials
- Contact Information
- Blog & Articles

## 🌍 Localization

Supports three languages:
- **English** (default)
- **Amharic** (አማርኛ)
- **Afaan Oromo**

## 📱 Mobile Optimization

- Touch-friendly interface
- Responsive design
- Mobile-specific interactions
- Optimized performance

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### Customization
- Update `lib/projects-data.ts` for project information
- Modify `lib/skills-data.ts` for skills
- Edit `lib/testimonials-data.ts` for testimonials
- Customize terminal commands in `components/terminal-window.tsx`

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome!

## 📄 License

This project is for portfolio purposes. Please don't use the personal content, but feel free to use the code structure as inspiration for your own portfolio.

## 📞 Contact

- **Email**: exodus.tola@example.com
- **LinkedIn**: [Exodus Tola](https://linkedin.com/in/exodus-tola)
- **GitHub**: [exodus-tola](https://github.com/exodus-tola)
- **Telegram**: [@exodus_tech](https://t.me/exodus_tech)

---

Built with ❤️ by Exodus Tola in Addis Ababa, Ethiopia 🇪🇹