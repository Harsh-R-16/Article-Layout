const tags = [
  "All",
  "React",
  "React16",
  "Functional-Programming",
  "React-Hook",
  "Javascript",
  "Functional-JS",
  "Golang",
  "Concurrency",
  "Parallelism",
  "Programming",
];

const articles = [
  {
    title: "Deep dive: How do React hooks really",
    author: "swyx",
    source: "netlify.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React", "React16", "Functional-Programming", "Functional-JS"],
  },
  {
    title: "React.js Introduction for People Who Know Just Enough JQuery",
    author: "phodo",
    source: "washington.post",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React", "React16", "React-Hook", "Javascript"],
  },
  {
    title: "Blueprint – A React UI toolkit for the web",
    author: "galfarragem ",
    source: "washington.post",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React", "React16", "React-Hook", "Programming"],
  },
  {
    title: "My experience upgrading to React 16",
    author: "Anechoic",
    source: "washington.post",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React16", "Functional-Programming", "React-Hook", "Javascript"],
  },
  {
    title: "Getting started with React 16",
    author: "bmelton",
    source: "indiatv.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React16", "Functional-Programming", "React-Hook", "Javascript"],
  },
  {
    title: "Listen: React 16 – Fiber and Beyond",
    author: "gjvc ",
    source: "indiatv.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React16", "Functional-Programming", "React-Hook", "Javascript"],
  },
  {
    title: "What's Functional Programming All About?",
    author: "ingve ",
    source: "indiatv.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Functional-Programming", "React-Hook", "Javascript", "Golang"],
  },
  {
    title: "Purely Functional Linux Distribution",
    author: "arbhassan ",
    source: "makeuseof.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Functional-Programming", "React-Hook", "Javascript", "Golang"],
  },
  {
    title: "Urbit: A clean-slate functional OS",
    author: "BafS",
    source: "makeuseof.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Functional-Programming", "React-Hook", "Javascript", "Golang"],
  },
  {
    title: "The Iceberg of React Hooks",
    author: "kawera",
    source: "propublica.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: [
      "React",
      "React16",
      "React-Hook",
      "Golang",
      "Parallelism",
      "Programming",
    ],
  },
  {
    title: "A React Portal Hook – UsePortal",
    author: "tessela",
    source: "propublica.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Javascript", "Functional-JS", "Parallelism", "Programming"],
  },
  {
    title: "Simple react hook-based global state library",
    author: "zengid",
    source: "propublica.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: [
      "React",
      "Functional-JS",
      "Golang",
      "Concurrency",
      "Parallelism",
      "Programming",
    ],
  },
  {
    title: "An extremely fast JavaScript bundler",
    author: "firasd",
    source: "propublica.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: [
      "React",
      "React16",
      "Functional-Programming",
      "React-Hook",
      "Parallelism",
      "Programming",
    ],
  },
  {
    title: "Modern JavaScript for Ancient Web Developers",
    author: "makeee",
    source: "fair.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: [
      "Javascript",
      "Functional-JS",
      "Golang",
      "Concurrency",
      "Parallelism",
      "Programming",
    ],
  },
  {
    title: "JavaScript is now required to sign in to Google",
    author: "pspeter3",
    source: "fair.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: [
      "React",
      "React16",
      "Functional-Programming",
      "React-Hook",
      "Javascript",
      "Programming",
    ],
  },
  {
    title: "Bacon.js - Functional Reactive Programming for JavaScript",
    author: "msoad",
    source: "fair.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: [
      "React",
      "React16",
      "Functional-Programming",
      "React-Hook",
      "Javascript",
      "Programming",
    ],
  },
  {
    title: "Insertion sort in JS, functional style",
    author: "spicyj",
    source: "www.wsj.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React", "React16", "Javascript", "Concurrency", "Programming"],
  },
  {
    title:
      "Ask HN: Design patterns resources for functional languages? (inc JavaScript)",
    author: "jordwalke",
    source: "npr.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React", "React16", "Functional-JS", "Golang", "Concurrency"],
  },
  {
    title: "Golang: Don't be afraid of makefiles",
    author: "andyl",
    source: "npr.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React", "React16", "Functional-JS", "Golang", "Concurrency"],
  },
  {
    title: "What Golang Is and Is Not",
    author: "dsego",
    source: "npr.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React", "React16", "Functional-JS", "Golang", "Concurrency"],
  },
  {
    title: "Why is Golang popular in China?",
    author: "wsj.com",
    source: "economist.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["React", "React16", "Functional-JS", "Golang", "Concurrency"],
  },
  {
    title: "Python Concurrency Decorators",
    author: "staltz",
    source: "usatoday.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Javascript", "Functional-JS", "Golang", "Concurrency"],
  },
  {
    title: "libmill - Go-style concurrency in C",
    author: "axelut",
    source: "economist.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Javascript", "Functional-JS", "Golang", "Concurrency"],
  },
  {
    title: "Proposal of a new concurrency model for Ruby 3",
    author: "jetter",
    source: "usatoday.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Javascript", "Functional-JS", "Golang", "Concurrency"],
  },
  {
    title: "List Homomorphisms and Parallelism",
    author: "htiek",
    source: "csmonitor.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Functional-JS", "Golang", "Parallelism", "Programming"],
  },
  {
    title: "Parallelism as a First Class Citizen in C and C++",
    author: "Scriptor",
    source: "usatoday.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Functional-JS", "Golang", "Parallelism", "Programming"],
  },
  {
    title: "EMS: Shared Memory Parallelism for Node.js",
    author: "leontrolski",
    source: "csmonitor.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Functional-JS", "Golang", "Parallelism", "Programming"],
  },
  {
    title: "Poll: What are your liked and disliked programming languages?",
    author: "woodpanel",
    source: "gates.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Functional-JS", "Concurrency", "Parallelism", "Programming"],
  },
  {
    title: "Music for Programming",
    author: "ihsw",
    source: "c-span.org",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Functional-JS", "Concurrency", "Parallelism", "Programming"],
  },
  {
    title: "How to Start Learning Computer Graphics Programming",
    author: "alana99",
    source: "bbc.com",
    description:
      "Hooks are a fundamentally simpler way to encapsulate stateful behavior and side effect",
    tags: ["Functional-JS", "Concurrency", "Parallelism", "Programming"],
  },
];

export { tags, articles };
