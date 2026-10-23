export interface Project {
  name: string
  desc: string
  tech: string[]
  features: string[]
  highlight?: string
  repo?: string // only set when a public repository exists
  demo?: string // only set when a real demo exists
}

export const projects: Project[] = [
  {
    name: 'Free My TV (3D Cyber Edition)',
    desc: 'An ad-free, hardware-accelerated 3D Smart TV launcher engineered for Samsung Tizen 5.0+ (Series 7) and Google TV, featuring Three.js WebGL and spatial D-Pad navigation.',
    tech: ['Three.js', 'WebGL', 'JavaScript', 'Samsung Tizen SDK', 'Spatial Navigation', 'SDB'],
    features: [
      'Interactive 3D Hero Orbit Sphere rendered at 60 FPS on ARM Mali GPU via Three.js',
      'Spatial navigation engine eliminating remote D-Pad focus traps with tabindex synchronization',
      'Directional keydown escape listener from top header buttons to bottom shelf cards',
      'Dual-ID fallback resolution supporting Tizen package IDs and Samsung Store numeric IDs',
      'Automated packaging, signing (author & distributor certs), and direct SDB deployment',
    ],
    highlight: 'Real-time 3D WebGL physics and spatial remote navigation on constrained Smart TV hardware.',
    repo: 'https://github.com/akvikas/free-my-tv',
    demo: 'https://akvikas.github.io/free-my-tv/',
  },
  {
    name: 'WordTrap',
    desc: 'A real-time multiplayer social deduction game with strict server-side authority, built to keep every player in sync.',
    tech: ['Node.js', 'Express', 'Socket.IO', 'SVG', 'TypeScript'],
    features: [
      'Synchronized phases: role reveal, sequential descriptions, voting and results',
      'Sequential speaker timers and host-configurable game settings',
      'Ties replay the round automatically with the same imposter',
      'Reconnect logic restores state after a mid-game disconnect',
      'Host transfer, chat rate-limiting and deterministic SVG avatars',
    ],
    highlight: 'Server-side authority prevents cheating and keeps timers, voting and recovery consistent.',
    repo: 'https://github.com/akvikas/wordtrap',
    demo: 'https://wordtrap.vercel.app',
  },
  {
    name: 'RL Trading Lab',
    desc: 'An educational Q-learning algorithmic trading sandbox with a real-time dark cyber dashboard, trade execution ledger, and profit analytics.',
    tech: ['Python 3.10+', 'Q-Learning', 'Streamlit', 'Plotly', 'Pytest', 'CI/CD'],
    features: [
      'Interactive Streamlit Cyber Command Center with real-time equity curves and BUY/SELL execution markers',
      'Granular trade-by-trade audit ledger tracking fill prices, commission fees, and realized P&L with CSV export',
      '3 distinct market regimes: Geometric Brownian Motion, momentum Trend, and Mean Reversion',
      'Out-of-sample benchmark across 50 unseen seeds with zero data leakage and 10 bps transaction drag',
      'Automated testing with 20 Pytest suites and multi-OS GitHub Actions CI matrix',
    ],
    highlight: 'Full execution transparency with real-time profit tracking and institutional transaction cost modeling.',
    repo: 'https://github.com/akvikas/rl-trading-lab',
    demo: 'https://rl-trading-lab-ptfwpyqvttkq2k2morzc3l.streamlit.app/',
  },
  {
    name: 'EnviConnect',
    desc: 'A responsive community action platform designed to discover, pledge, and organize local sustainability initiatives with zero cold-start delay.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vitest', 'Testing Library', 'Browser Storage'],
    features: [
      'Zero-latency category filtering across clean-up drives, urban farming, and climate education',
      'Dynamic participant counts and volunteer hours pledged update instantaneously on join/leave',
      'Strict input validation guardrails with character counters and accessible error states',
      'Resilient UI handling loading skeletons, empty filtered states, and action toast banners',
      'Automated Vitest component test suite and multi-version Node.js GitHub Actions CI',
    ],
    highlight: 'Fast client-side persistence and accessible reactive state without external database overhead.',
    repo: 'https://github.com/akvikas/enviconnect',
  },
  {
    name: 'Budget Tracker',
    desc: 'A full-stack personal finance tracker for income, expenses and savings, with charts and downloadable reports.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Real-time logging with monthly tracking and savings estimation',
      'Charts and daily breakdown popups',
      'Downloadable reports and live updates',
      'Secure authentication and HSL-based color schemes',
    ],
  },
]
