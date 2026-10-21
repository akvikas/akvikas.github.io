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
    name: 'WordTrap',
    desc: 'A real-time multiplayer social deduction game with strict server-side authority, built to keep every player in sync.',
    tech: ['Node.js', 'Express', 'Socket.IO', 'SVG'],
    features: [
      'Synchronized phases: role reveal, sequential descriptions, voting and results',
      'Sequential speaker timers and host-configurable game settings',
      'Ties replay the round automatically with the same imposter',
      'Reconnect logic restores state after a mid-game disconnect',
      'Host transfer, chat rate-limiting and deterministic SVG avatars',
    ],
    highlight: 'Server-side authority prevents cheating and keeps timers, voting and recovery consistent.',
  },
  {
    name: 'EnviConnect',
    desc: 'A community platform that connects urban youth with sustainability projects to discover, join, create and collaborate.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Discover, join, create and collaborate on eco-friendly initiatives',
      'Real-time tracking of participation',
      'One central hub for fragmented communication and low awareness',
    ],
    highlight: 'Participation tracking gives measurable contributions and accountability.',
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
  {
    name: 'RL Trading Lab',
    desc: 'An educational Q-learning trading sandbox that compares a learned policy with buy-and-hold on synthetic prices.',
    tech: ['Python', 'Q-learning', 'Simulation', 'Unit tests'],
    features: [
      'Generates synthetic market prices',
      'Trains a tabular Q-learning agent',
      'Compares the learned policy with buy-and-hold',
      'Includes unit tests',
    ],
    highlight: 'Dependency-free: the environment and agent run on plain Python.',
    repo: 'https://github.com/akvikas/rl-trading-lab',
  },
]
