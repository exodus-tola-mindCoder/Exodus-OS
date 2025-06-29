'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Zap, Code, Cpu, Database, Globe } from 'lucide-react';

interface CommandHistory {
  command: string;
  output: string[];
  timestamp: Date;
  type?: 'success' | 'error' | 'info' | 'warning';
}

interface SystemStats {
  uptime: string;
  projects: number;
  linesOfCode: string;
  coffeeConsumed: string;
}

export default function TerminalWindow() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'system_boot',
      output: [
        '╔══════════════════════════════════════════════════════════════╗',
        '║                    🚀 EXODUS OS TERMINAL v2.0                ║',
        '║                  Advanced Developer Interface                ║',
        '╚══════════════════════════════════════════════════════════════╝',
        '',
        '⚡ SYSTEM INITIALIZATION COMPLETE',
        '🔥 Welcome to the most interactive portfolio terminal!',
        '',
        '💡 This isn\'t just a terminal - it\'s a gateway to my world.',
        '   Type "help" to discover what makes this special.',
        '',
        '🎯 Pro tip: Try "matrix", "skills", or "projects" for something cool!',
        ''
      ],
      timestamp: new Date(),
      type: 'success'
    }
  ]);
  const [systemStats, setSystemStats] = useState<SystemStats>({
    uptime: '0d 0h 0m',
    projects: 8,
    linesOfCode: '50K+',
    coffeeConsumed: '∞'
  });
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const [currentUser, setCurrentUser] = useState('guest');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Update system uptime
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
      setSystemStats(prev => ({
        ...prev,
        uptime: `${days}d ${hours}h ${minutes}m`
      }));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const commands = {
    help: () => [
      '🎮 EXODUS OS TERMINAL - COMMAND REFERENCE',
      '═══════════════════════════════════════════',
      '',
      '🔥 SPECIAL COMMANDS:',
      '  matrix           - Enter the Matrix (visual effect)',
      '  hack             - Simulate hacking sequence',
      '  skills           - Interactive skills visualization',
      '  projects         - Project tree with stats',
      '  system           - Show system information',
      '',
      '👨‍💻 PROFILE COMMANDS:',
      '  whoami           - User information',
      '  sudo pitch       - Elevator pitch',
      '  contact          - Contact information',
      '  achievements     - Awards and recognition',
      '  social           - Social media links',
      '',
      '🛠️ TECHNICAL COMMANDS:',
      '  ps aux           - Running processes',
      '  top              - System performance',
      '  git status       - Current projects status',
      '  docker ps        - Container status',
      '',
      '🎯 FUN COMMANDS:',
      '  fortune          - Random tech quote',
      '  cowsay <text>    - ASCII art with message',
      '  weather addis    - Addis Ababa weather',
      '  coffee           - Coffee status',
      '',
      '⚡ SYSTEM COMMANDS:',
      '  clear            - Clear terminal',
      '  exit             - Close terminal',
      '  login <name>     - Change user',
      ''
    ],

    matrix: () => {
      setIsMatrixMode(true);
      setTimeout(() => setIsMatrixMode(false), 5000);
      return [
        '🔴 ENTERING THE MATRIX...',
        '',
        '01001000 01100101 01101100 01101100 01101111',
        '01010111 01101111 01110010 01101100 01100100',
        '',
        '🟢 MATRIX MODE ACTIVATED',
        '   Reality is just code...',
        '   And I write the code.',
        '',
        '💊 Red pill taken. Welcome to the real world.',
        ''
      ];
    },

    hack: () => [
      '🔴 INITIATING HACKING SEQUENCE...',
      '',
      '[████████████████████████████████] 100%',
      '',
      '🔓 ACCESS GRANTED',
      '📁 Accessing mainframe...',
      '🔍 Scanning for vulnerabilities...',
      '⚡ Exploiting buffer overflow...',
      '🎯 Payload delivered successfully!',
      '',
      '😎 Just kidding! This is just for fun.',
      '   Real hacking is about ethical security research.',
      ''
    ],

    skills: () => [
      '🎨 INTERACTIVE SKILLS VISUALIZATION',
      '═══════════════════════════════════',
      '',
      '🔥 Frontend:     ████████████████████ 95%',
      '⚛️  React/Next:   ████████████████████ 90%',
      '📱 React Native: ██████████████████   85%',
      '🎨 UI/UX:        ███████████████████  88%',
      '',
      '⚙️  Backend:      ████████████████████ 92%',
      '🟢 Node.js:      ████████████████████ 90%',
      '🐍 Python:       ██████████████████   85%',
      '🗄️  Databases:    ███████████████████  87%',
      '',
      '☁️  DevOps:       ██████████████████   80%',
      '🐳 Docker:       ███████████████████  85%',
      '☁️  AWS:          ██████████████████   82%',
      '🔧 CI/CD:        ███████████████████  83%',
      '',
      '🤖 AI/ML:        ████████████████     75%',
      '🧠 TensorFlow:   ███████████████      70%',
      '🔮 APIs:         ████████████████     78%',
      ''
    ],

    'skills --visual': () => [
      '🎨 INTERACTIVE SKILLS VISUALIZATION',
      '═══════════════════════════════════',
      '',
      '🔥 Frontend:     ████████████████████ 95%',
      '⚛️  React/Next:   ████████████████████ 90%',
      '📱 React Native: ██████████████████   85%',
      '🎨 UI/UX:        ███████████████████  88%',
      '',
      '⚙️  Backend:      ████████████████████ 92%',
      '🟢 Node.js:      ████████████████████ 90%',
      '🐍 Python:       ██████████████████   85%',
      '🗄️  Databases:    ███████████████████  87%',
      '',
      '☁️  DevOps:       ██████████████████   80%',
      '🐳 Docker:       ███████████████████  85%',
      '☁️  AWS:          ██████████████████   82%',
      '🔧 CI/CD:        ███████████████████  83%',
      '',
      '🤖 AI/ML:        ████████████████     75%',
      '🧠 TensorFlow:   ███████████████      70%',
      '🔮 APIs:         ████████████████     78%',
      ''
    ],

    projects: () => [
      '📁 PROJECT TREE STRUCTURE',
      '═══════════════════════════',
      '',
      '🌱 agrix/',
      '├── 📊 5,000+ active users',
      '├── 🏆 Winner - Agricultural Innovation',
      '├── 💰 $15K funding secured',
      '└── 🚀 Status: Production',
      '',
      '🩸 bloodhero-ethiopia/',
      '├── 📊 12,000+ users',
      '├── 🏥 50+ hospitals connected',
      '├── 🏆 Healthcare Innovation Award',
      '└── 🚀 Status: Production',
      '',
      '🎓 freshman-placement/',
      '├── 📊 50,000+ students processed',
      '├── 💰 $25K grant received',
      '├── 🏫 100+ institutions',
      '└── 🚀 Status: Deployed',
      '',
      '📱 unigo/',
      '├── 📊 2,000+ beta users',
      '├── 🗺️  AR navigation features',
      '├── 🎯 Campus-focused',
      '└── 🚀 Status: Beta',
      '',
      '📊 TOTAL IMPACT:',
      '├── 👥 69,000+ users served',
      '├── 💰 $40K+ funding raised',
      '├── 🏆 5+ awards won',
      '└── 🌍 Real-world impact achieved',
      ''
    ],

    'projects --tree': () => [
      '📁 PROJECT TREE STRUCTURE',
      '═══════════════════════════',
      '',
      '🌱 agrix/',
      '├── 📊 5,000+ active users',
      '├── 🏆 Winner - Agricultural Innovation',
      '├── 💰 $15K funding secured',
      '└── 🚀 Status: Production',
      '',
      '🩸 bloodhero-ethiopia/',
      '├── 📊 12,000+ users',
      '├── 🏥 50+ hospitals connected',
      '├── 🏆 Healthcare Innovation Award',
      '└── 🚀 Status: Production',
      '',
      '🎓 freshman-placement/',
      '├── 📊 50,000+ students processed',
      '├── 💰 $25K grant received',
      '├── 🏫 100+ institutions',
      '└── 🚀 Status: Deployed',
      '',
      '📱 unigo/',
      '├── 📊 2,000+ beta users',
      '├── 🗺️  AR navigation features',
      '├── 🎯 Campus-focused',
      '└── 🚀 Status: Beta',
      '',
      '📊 TOTAL IMPACT:',
      '├── 👥 69,000+ users served',
      '├── 💰 $40K+ funding raised',
      '├── 🏆 5+ awards won',
      '└── 🌍 Real-world impact achieved',
      ''
    ],

    system: () => [
      '💻 EXODUS OS SYSTEM INFORMATION',
      '═══════════════════════════════',
      '',
      `⏱️  System Uptime:    ${systemStats.uptime}`,
      `🚀 Active Projects:   ${systemStats.projects}`,
      `📝 Lines of Code:     ${systemStats.linesOfCode}`,
      `☕ Coffee Consumed:   ${systemStats.coffeeConsumed}`,
      '',
      '🔧 SYSTEM SPECS:',
      '├── CPU: Intel i7 Developer Brain',
      '├── RAM: 16GB + Unlimited Creativity',
      '├── Storage: Cloud-first Architecture',
      '├── GPU: Imagination Engine v2.0',
      '└── OS: Exodus OS (Custom Linux)',
      '',
      '🌐 NETWORK STATUS:',
      '├── Internet: ✅ Connected',
      '├── GitHub: ✅ Active',
      '├── AWS: ✅ Deployed',
      '└── Telegram: ✅ 2,500+ subscribers',
      ''
    ],

    whoami: () => [
      '👨‍💻 CURRENT USER: EXODUS TOLA',
      '═══════════════════════════════',
      '',
      '🆔 Username: exodus',
      '🏠 Home: /home/exodus',
      '🌍 Location: Addis Ababa, Ethiopia',
      '💼 Role: Full-Stack Developer & Entrepreneur',
      '🎯 Mission: Building technology for local impact',
      '',
      '🔑 PERMISSIONS:',
      '├── sudo: ✅ (Can solve any problem)',
      '├── create: ✅ (Unlimited innovation)',
      '├── deploy: ✅ (Production-ready solutions)',
      '└── inspire: ✅ (Community leadership)',
      '',
      '📊 USER STATS:',
      '├── Experience: 3+ years',
      '├── Projects: 8 major applications',
      '├── Users Impacted: 69,000+',
      '└── Coffee Consumed: ∞',
      ''
    ],

    'sudo pitch': () => [
      '🎯 EXODUS TOLA - ELEVATOR PITCH',
      '═══════════════════════════════',
      '',
      '👋 Hi! I\'m Exodus, a full-stack developer and entrepreneur',
      '   from Addis Ababa, Ethiopia.',
      '',
      '🚀 WHAT I DO:',
      '├── Build scalable web and mobile applications',
      '├── Solve real-world problems with technology',
      '├── Focus on local impact and community development',
      '└── Mentor and inspire the next generation of developers',
      '',
      '📊 PROVEN TRACK RECORD:',
      '├── 69,000+ users across my applications',
      '├── $40K+ in funding and grants secured',
      '├── 5+ awards for innovation and impact',
      '└── 2,500+ followers on my tech channel',
      '',
      '💡 MY MISSION:',
      '   "To leverage technology in creating sustainable solutions',
      '    that address local challenges while building a thriving',
      '    tech ecosystem in Ethiopia and beyond."',
      '',
      '🤝 Let\'s build something amazing together!',
      ''
    ],

    contact: () => [
      '📧 CONTACT INFORMATION',
      '═════════════════════',
      '',
      '📧 Email: exodus.tola@example.com',
      '📱 Phone: +251 9XX XXX XXX',
      '📍 Location: Addis Ababa, Ethiopia',
      '',
      '🌐 SOCIAL MEDIA:',
      '├── LinkedIn: /in/exodus-tola',
      '├── GitHub: /exodus-tola',
      '├── Telegram: @exodus_tech (2,500+ subscribers)',
      '└── Twitter: @exodus_tola',
      '',
      '💼 BUSINESS INQUIRIES:',
      '├── Project consultations',
      '├── Speaking engagements',
      '├── Technical mentoring',
      '└── Collaboration opportunities',
      '',
      '⚡ Response time: Usually within 24 hours',
      ''
    ],

    achievements: () => [
      '🏆 ACHIEVEMENTS & RECOGNITION',
      '════════════════════════════',
      '',
      '🥇 AWARDS:',
      '├── AgriX Platform Winner - Agricultural Innovation',
      '├── Healthcare Innovation Award - BloodHero Ethiopia',
      '├── Education Technology Grant - $25K',
      '└── Tech Conference Speaker - Addis Tech Community',
      '',
      '📜 CERTIFICATIONS:',
      '├── AWS Solutions Architect',
      '├── Google Cloud Professional',
      '└── MongoDB Certified Developer',
      '',
      '📊 IMPACT METRICS:',
      '├── 69,000+ users served',
      '├── $40K+ funding raised',
      '├── 8 major projects completed',
      '└── 2,500+ community members',
      '',
      '🎯 2024 GOALS:',
      '├── Scale AgriX to 10,000+ farmers',
      '├── Launch EastLink Market',
      '├── Win national innovation competition',
      '└── Expand to other East African countries',
      ''
    ],

    social: () => [
      '🌐 SOCIAL MEDIA & COMMUNITY',
      '══════════════════════════',
      '',
      '📢 TELEGRAM CHANNEL (Featured):',
      '├── @exodus_tech',
      '├── 2,500+ subscribers',
      '├── Daily tech insights',
      '└── Ethiopian tech ecosystem news',
      '',
      '💼 PROFESSIONAL:',
      '├── LinkedIn: 1,200+ connections',
      '├── GitHub: 42 repositories, 156 stars',
      '└── Tech Blog: Weekly articles',
      '',
      '🎯 COMMUNITY IMPACT:',
      '├── Mentored 50+ developers',
      '├── Organized 10+ tech meetups',
      '├── Contributed to open source',
      '└── Built local tech network',
      '',
      '📈 ENGAGEMENT STATS:',
      '├── 87% engagement rate',
      '├── 12% monthly growth',
      '└── Active in 5+ tech communities',
      ''
    ],

    'ps aux': () => [
      '📊 RUNNING PROCESSES',
      '═══════════════════',
      '',
      'PID  USER     CPU  MEM  COMMAND',
      '1    exodus   15%  8%   agrix-backend',
      '2    exodus   12%  6%   bloodhero-api',
      '3    exodus   8%   4%   unigo-mobile-sync',
      '4    exodus   5%   3%   portfolio-server',
      '5    exodus   3%   2%   telegram-bot',
      '6    exodus   2%   1%   github-webhook',
      '7    exodus   1%   1%   system-monitor',
      '',
      '💻 SYSTEM RESOURCES:',
      '├── Total CPU Usage: 46%',
      '├── Total Memory: 25%',
      '├── Active Connections: 247',
      '└── Uptime: ' + systemStats.uptime,
      ''
    ],

    top: () => [
      '📈 SYSTEM PERFORMANCE MONITOR',
      '════════════════════════════',
      '',
      `⏱️  Uptime: ${systemStats.uptime}`,
      '🔥 Load Average: 0.45, 0.52, 0.48',
      '💾 Memory: 6.2GB / 16GB (38%)',
      '💽 Disk: 120GB / 512GB (23%)',
      '',
      '🚀 TOP PROCESSES:',
      '├── AgriX Backend      - 15% CPU',
      '├── BloodHero API      - 12% CPU',
      '├── UniGo Mobile Sync  - 8% CPU',
      '├── Portfolio Server   - 5% CPU',
      '└── Telegram Bot       - 3% CPU',
      '',
      '🌐 NETWORK:',
      '├── Download: 45.2 Mbps',
      '├── Upload: 12.8 Mbps',
      '├── Latency: 23ms',
      '└── Active Connections: 247',
      ''
    ],

    'git status': () => [
      '📂 GIT REPOSITORY STATUS',
      '═══════════════════════',
      '',
      '🌿 Current Branch: main',
      '📊 Commits Ahead: 3',
      '🔄 Last Commit: 2 hours ago',
      '',
      '📝 MODIFIED FILES:',
      '├── agrix/src/api/weather.js',
      '├── bloodhero/components/DonorMap.tsx',
      '├── unigo/features/navigation.dart',
      '└── portfolio/components/terminal.tsx',
      '',
      '➕ STAGED CHANGES:',
      '├── Add: AI recommendation engine',
      '├── Fix: Mobile responsiveness',
      '└── Update: API documentation',
      '',
      '🚀 READY TO PUSH:',
      '   3 commits ready for deployment',
      ''
    ],

    'docker ps': () => [
      '🐳 DOCKER CONTAINERS',
      '═══════════════════',
      '',
      'CONTAINER ID  IMAGE           STATUS    PORTS',
      'a1b2c3d4      agrix:latest    Up 2h     :3001',
      'e5f6g7h8      bloodhero:v2    Up 1h     :3002',
      'i9j0k1l2      postgres:13     Up 3h     :5432',
      'm3n4o5p6      redis:alpine    Up 3h     :6379',
      'q7r8s9t0      nginx:latest    Up 4h     :80,:443',
      '',
      '📊 CONTAINER STATS:',
      '├── Total Containers: 5',
      '├── Running: 5',
      '├── Stopped: 0',
      '└── Memory Usage: 2.1GB',
      '',
      '🔧 SERVICES:',
      '├── Web Applications: 2',
      '├── Databases: 2',
      '└── Reverse Proxy: 1',
      ''
    ],

    'weather addis': () => [
      '🌤️  ADDIS ABABA WEATHER',
      '═════════════════════',
      '',
      '📍 Location: Addis Ababa, Ethiopia',
      '🌡️  Temperature: 22°C (72°F)',
      '☁️  Condition: Partly Cloudy',
      '💨 Wind: 8 km/h NE',
      '💧 Humidity: 65%',
      '👁️  Visibility: 10 km',
      '',
      '📅 5-DAY FORECAST:',
      '├── Today:    22°C  ☁️  Partly Cloudy',
      '├── Tomorrow: 24°C  ☀️  Sunny',
      '├── Wed:      21°C  🌧️  Light Rain',
      '├── Thu:      23°C  ☁️  Cloudy',
      '└── Fri:      25°C  ☀️  Sunny',
      '',
      '💡 Perfect weather for coding! ☕',
      ''
    ],

    coffee: () => [
      '☕ COFFEE STATUS MONITOR',
      '══════════════════════',
      '',
      '📊 Current Status: CAFFEINATED ✅',
      '☕ Cups Today: 4',
      '⏰ Last Cup: 30 minutes ago',
      '🔋 Energy Level: 87%',
      '',
      '📈 COFFEE ANALYTICS:',
      '├── Daily Average: 3.5 cups',
      '├── Weekly Total: 24 cups',
      '├── Favorite: Ethiopian Single Origin',
      '└── Productivity Boost: +42%',
      '',
      '🇪🇹 ETHIOPIAN COFFEE FACTS:',
      '├── Birthplace of coffee',
      '├── Over 1000 varieties',
      '├── Traditional ceremony culture',
      '└── World\'s finest beans',
      '',
      '💡 "Code is poetry, coffee is fuel" ☕',
      ''
    ],

    fortune: () => {
      const quotes = [
        '"The best way to predict the future is to invent it." - Alan Kay',
        '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
        '"First, solve the problem. Then, write the code." - John Johnson',
        '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
        '"The computer was born to solve problems that did not exist before." - Bill Gates',
        '"Talk is cheap. Show me the code." - Linus Torvalds',
        '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
        '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
        '"In order to be irreplaceable, one must always be different." - Coco Chanel',
        '"The only way to do great work is to love what you do." - Steve Jobs'
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      return [
        '🔮 FORTUNE COOKIE',
        '═══════════════════',
        '',
        randomQuote,
        '',
        '✨ May your code compile on the first try!',
        ''
      ];
    },

    clear: () => []
  };

  const executeCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().split(' ');
    const lowerCmd = command.toLowerCase();
    let output: string[];
    let type: 'success' | 'error' | 'info' | 'warning' = 'info';

    if (lowerCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (lowerCmd === 'exit') {
      output = [
        '👋 Thanks for exploring Exodus OS Terminal!',
        '   Feel free to close this window or try more commands.',
        ''
      ];
      type = 'success';
    } else if (cmd.startsWith('login ')) {
      const newUser = cmd.substring(6).trim();
      if (newUser) {
        setCurrentUser(newUser);
        output = [
          `✅ Successfully logged in as: ${newUser}`,
          '🎉 Welcome to Exodus OS!',
          ''
        ];
        type = 'success';
      } else {
        output = [
          '❌ Please provide a username',
          '💡 Usage: login <username>',
          ''
        ];
        type = 'error';
      }
    } else if (commands[cmd.toLowerCase() as keyof typeof commands]) {
      output = commands[cmd.toLowerCase() as keyof typeof commands]();
      type = 'success';
    } else if (cmd.startsWith('cowsay ')) {
      const message = cmd.substring(7);
      output = [
        ' ' + '_'.repeat(message.length + 2),
        `< ${message} >`,
        ' ' + '-'.repeat(message.length + 2),
        '        \\   ^__^',
        '         \\  (oo)\\_______',
        '            (__)\\       )\\/\\',
        '                ||----w |',
        '                ||     ||',
        ''
      ];
      type = 'success';
    } else if (cmd.trim() === '') {
      output = [''];
    } else {
      output = [
        `❌ Command not found: ${cmd}`,
        '',
        '💡 Try these popular commands:',
        '   help, matrix, hack, skills, projects',
        '   whoami, system, fortune, coffee',
        '',
        '🎯 Or just type "help" to see all available commands!',
        ''
      ];
      type = 'error';
    }

    setHistory(prev => [...prev, {
      command: cmd,
      output,
      timestamp: new Date(),
      type
    }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const getPrompt = () => {
    return `${currentUser}@exodus-os:~$ `;
  };

  const getTypeColor = (type?: string) => {
    switch (type) {
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      default: return 'text-green-300';
    }
  };

  return (
    <div className="relative h-96 bg-black text-green-400 font-mono text-sm overflow-hidden">
      {/* Matrix Effect Overlay */}
      <AnimatePresence>
        {isMatrixMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-black"
          >
            <div className="matrix-rain h-full w-full">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -100 }}
                  animate={{ y: 500 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "linear"
                  }}
                  className="absolute text-green-400 text-xs"
                  style={{ left: `${i * 5}%` }}
                >
                  {Array.from({ length: 10 }).map((_, j) => (
                    <div key={j} className="mb-1">
                      {Math.random() > 0.5 ? '1' : '0'}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-bold">Exodus OS Terminal</span>
          <span className="text-gray-400 text-xs">v2.0</span>
        </div>
        <div className="flex items-center space-x-4 text-xs text-gray-400">
          <div className="flex items-center space-x-1">
            <Cpu className="w-3 h-3" />
            <span>CPU: 47%</span>
          </div>
          <div className="flex items-center space-x-1">
            <Database className="w-3 h-3" />
            <span>MEM: 68%</span>
          </div>
          <div className="flex items-center space-x-1">
            <Globe className="w-3 h-3" />
            <span>Online</span>
          </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="h-full p-4 overflow-y-auto space-y-1"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {entry.command && (
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">{getPrompt()}</span>
                <span className="text-white">{entry.command}</span>
              </div>
            )}
            {entry.output.map((line, lineIndex) => (
              <div key={lineIndex} className={getTypeColor(entry.type)}>
                {line}
              </div>
            ))}
          </motion.div>
        ))}
        
        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <span className="text-blue-400">{getPrompt()}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none"
            autoComplete="off"
            spellCheck="false"
            placeholder="Type 'help' for commands or 'matrix' for fun..."
          />
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-4 bg-green-400"
          />
        </form>
      </div>

      {/* Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 px-4 py-1 flex items-center justify-between text-xs text-gray-400 border-t border-gray-700">
        <div className="flex items-center space-x-4">
          <span>User: {currentUser}</span>
          <span>Uptime: {systemStats.uptime}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Projects: {systemStats.projects}</span>
          <span>Lines: {systemStats.linesOfCode}</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}