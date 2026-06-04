export const projectsData = [
  // =============================================
  //  NEW PROJECTS (from GitHub README analysis)
  // =============================================
  {
    title: "Astra – AI Personal WhatsApp Secretary",
    description: `
      <strong>Astra</strong> is an autonomous AI assistant that lives inside WhatsApp, acting as a personal secretary
      for managing calendars, tasks, habits, expenses, and knowledge — all through natural conversation.<br><br>

      <strong>Architecture:</strong><br>
      – The latest version (<strong>Astra-local</strong>) runs entirely on local hardware (Mac Mini M4) via
      <a href="https://github.com/openclaw/openclaw" target="_blank">OpenClaw</a> and
      <a href="https://ollama.com/" target="_blank">Ollama</a>, keeping all data private.<br>
      – Earlier cloud version powered by <strong>Gemini 1.5 Flash</strong> with
      <a href="https://github.com/adiwajshing/Baileys" target="_blank">Baileys</a> as the WhatsApp gateway.<br><br>

      <strong>Key Features:</strong><br>
      – Google Calendar integration (create & list events via service account).<br>
      – Task management synced with Google Tasks.<br>
      – Habit tracking stored in a local SQLite database.<br>
      – Persistent conversational memory for context-aware responses.<br>
      – Markdown-based RAG knowledge system for personal notes and documents.<br>
      – Privacy-first: locked to "Message Yourself" chat; secrets never committed.<br><br>

      <strong>Tech Stack:</strong> TypeScript, Ollama, OpenClaw, Baileys, Better-SQLite3, Google Calendar API
    `,
    image: '/images/projects/Astra_chat.png',
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/Astra-local',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'Astra-local (Latest)'
      },
      {
        href: 'https://github.com/Zvimarmor/WhatsApp_Bot',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'Astra Cloud Version'
      }
    ]
  },
  {
    title: "LectureSync – Synchronized Dual-Media Player",
    description: `
      A premium, distraction-free web player that synchronizes separate video and audio tracks in perfect unison —
      built for students who receive lectures as two separate files (screen capture + lecturer audio).<br><br>

      <strong>Key Features:</strong><br>
      – <strong>Zero-dependency, local-first</strong>: compiled into a single self-contained HTML file. No server, no
      data tracking.<br>
      – Unified play/pause, scrubbable progress slider, and speed controls (1×–2×) operating both tracks in
      lockstep.<br>
      – Dual-video presentation mode with side-by-side view and audio source toggle.<br>
      – Strict sync engine using <code>requestAnimationFrame</code> for sub-frame temporal alignment plus a buffer
      blocker for seamless resume.<br>
      – Full keyboard shortcuts (Space, arrows, M, F, P) and bilingual interface (English & Hebrew with RTL).<br>
      – Sleek dark theme with glassmorphic aesthetic and micro-animations.<br><br>

      <strong>Tech Stack:</strong> Vanilla HTML/CSS/JS (single-file build), Web Audio API, <code>requestAnimationFrame</code> sync
    `,
    image: '/images/projects/lectures_sync.png',
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/LectureSync',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "WISE-Llama – Scaling Model Editing to Llama 3.1",
    description: `
      A research project scaling and validating the <strong>WISE (Writing Into Subspaces)</strong> model editing
      framework on <strong>Llama-3.1-8B-Instruct</strong>, conducted as part of the Sompolinski Lab.<br><br>

      <strong>Project Overview:</strong><br>
      – Transitioned the WISE algorithm from GPT-J to Llama-3.1-Instruct with fp16 memory optimizations and Chat
      Template integration.<br>
      – Evaluated sequential editing performance using TIES merge and Gradient Masking techniques.<br>
      – Developed validation scripts with batch SBERT semantic similarity scoring and custom stop criteria for
      Llama-specific end-of-turn tokens.<br><br>

      <strong>Key Optimizations:</strong><br>
      – Learning rate tuning (edit_lr → 0.1) to prevent generation degradation.<br>
      – Forced Chat Template usage to ensure grounded, context-following edits.<br>
      – SLURM cluster execution on high-VRAM GPUs (RTX Pro / A100) with configurable smoke and full-scale runs.<br><br>

      <strong>Tech Stack:</strong> Python, PyTorch, EasyEdit, Sentence-BERT, SLURM, Hugging Face Transformers
    `,
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/WISE_project',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "LecturesToSummaries – AI-Powered Lecture Summarizer",
    description: `
      A multimodal tool that transforms lecture recordings and slides into study-ready summaries by combining
      <strong>Whisper</strong> transcription with <strong>Gemini</strong> LLM summarization.<br><br>

      <strong>Key Features:</strong><br>
      – Accepts audio files (<code>.mp3</code>, <code>.wav</code>), slides (<code>.pdf</code>, <code>.pptx</code>),
      or both as input.<br>
      – Automatic silence detection and trimming to optimize processing time.<br>
      – High-accuracy Speech-to-Text via Whisper with <strong>English and Hebrew</strong> support.<br>
      – Three summary styles: <strong>Normal</strong> (balanced review), <strong>Informative</strong> (textbook-style
      deep dive with auto-segmentation), and <strong>Brief</strong> (cheat-sheet).<br>
      – Context-aware summaries grounded in actual slide content for accuracy.<br><br>

      <strong>Tech Stack:</strong> Python, OpenAI Whisper, Google Gemini API, pydub, FFmpeg
    `,
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/LecturesToSummeries',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "Azimut Kosher Kravi – IDF Fitness Training App",
    description: `
      A comprehensive fitness and tactical training application designed for IDF soldiers, combining modern fitness
      tracking, AI-powered coaching, GPS-enabled workouts, and cultural heritage education.<br><br>

      <strong>Core Features:</strong><br>
      – Personalized workout plans with automated shift scheduling across warmup, cardio, strength, and tactical
      exercises.<br>
      – AI chat assistant powered by OpenAI for real-time coaching and training guidance.<br>
      – GPS-tracked running workouts using Browser Geolocation API.<br>
      – Heritage education module with cultural stories for soldiers.<br>
      – Full onboarding flow with fitness assessment and progressive training.<br><br>

      <strong>Tech Stack:</strong> React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Firebase (Auth + Firestore
      + Storage), OpenAI API, Netlify Functions
    `,
    image: '/images/projects/Azimut-kosher.png',
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/azimut-kosher-kravi',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "Guard Duty System – Automated Shift Scheduler",
    description: `
      A full-stack guard duty scheduling and management system that automates shift assignments and ensures fair
      distribution of hours among guards.<br><br>

      <strong>Key Features:</strong><br>
      – Intelligent scheduling algorithm with equitable hour distribution across all guards.<br>
      – Morning readiness management with specialized shift handling (05:30–11:00).<br>
      – Activity session support to pause normal scheduling for drills and training events.<br>
      – Real-time dashboard with current/upcoming shifts, plus filtering by date, post, and guard.<br>
      – Guard management with mid-period add/remove and automatic schedule rebalancing.<br>
      – Responsive design with full dark mode support.<br><br>

      <strong>Tech Stack:</strong> Next.js 15, React 19, TypeScript, Tailwind CSS 4, Prisma 6, PostgreSQL (Supabase),
      Netlify
    `,
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/RoadGuardProgram',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "Combat Equipment Check – Military Gear Verification",
    description: `
      A web application for tracking and verifying combat equipment assignments in military units. Soldiers verify
      their assigned gear through a mobile-friendly interface, and commanders monitor status via an admin
      dashboard.<br><br>

      <strong>Key Features:</strong><br>
      – <strong>Soldier view</strong>: team → soldier → checklist verification flow with partial submission
      support.<br>
      – <strong>Admin dashboard</strong> with 4 tabs: tri-state status tracking (Full / Partial / None),
      equipment inventory grid with drill-down, soldier onboarding, and full CRUD management.<br>
      – Admin-protected routes with cookie-based auth, Hebrew RTL interface, mobile-optimized.<br>
      – Live deployment at <a href="https://checkingTzelem.zvimarmor.com" target="_blank">checkingTzelem.zvimarmor.com</a>.<br><br>

      <strong>Tech Stack:</strong> Next.js 16 (App Router, Turbopack), TypeScript, Prisma 7, PostgreSQL (Supabase),
      Netlify, Vanilla CSS (dark tactical theme, RTL)
    `,
    image: '/images/projects/cobat_equipment.png',
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/CombatEquipmentCheckWebsite',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      },
      {
        href: 'https://checkingTzelem.zvimarmor.com',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png',
        text: 'Live Site'
      }
    ]
  },

  // =============================================
  //  EXISTING PROJECTS (preserved from original)
  // =============================================
  {
    title: "Spotify Track Popularity Predictor",
    description: `
      This project predicts <strong>Spotify track popularity levels</strong> using machine learning, formulated as a
      10-class classification task instead of a regression problem.<br><br>

      <strong>Key Features:</strong><br>
      – Transforms Spotify popularity score (0–100) into 10 discrete popularity buckets (0–9).<br>
      – Designed to emphasize general popularity trends rather than precise scores.<br><br>

      <strong>Neural Network Architecture:</strong><br>
      – 3 dense layers: [256, 128, 64] with ReLU activations.<br>
      – Dropout (0.3) regularization, softmax output, categorical crossentropy loss.<br>
      – Early stopping and class weighting for improved generalization.<br><br>

      <strong>Baseline Comparisons:</strong><br>
      – Compared to KNN, Decision Tree, and naive baselines (most frequent & random).<br>
      – Neural model achieved <strong>Top-1 Accuracy: 0.50</strong> and <strong>Top-3 Accuracy: 0.87</strong>.<br><br>

      <strong>GUI App:</strong><br>
      – Upload an MP3 file, select a genre, and predict the popularity range.<br>
      – Built with <code>tkinter</code>, <code>librosa</code>, and the trained neural model.<br><br>

      The project was built by <strong>Zvi Marmor</strong>, <strong>Shaked Hartal</strong> and <strong>Shai
        Abu</strong> during the course <strong>A Needle in a Data Haystack</strong> in The Hebrew University.<br>
    `,
    image: '/images/projects/SpotifyPopularityPredictor.png',
    imageCaption: 'Screenshot of the GUI app predicting the popularity class of a track based on an uploaded MP3 and selected genre.',
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/SpotifyDataAnalysis',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "Telegram Multilingual Translation Bot",
    description: `
      This project is a fully automated Telegram bot that enables seamless multilingual communication in any group
      chat.<br><br>

      <strong>Key Features:</strong><br>
      – Automatically translates every group message into each user's preferred language.<br>
      – Language preferences collected via free text ("English", "עברית", etc.)<br>
      – Supports multiple languages per group with easy dynamic updates.<br>
      – Stores preferences in a lightweight local SQLite database.<br>
      – Translates via Google Translate using deep-translator.<br>
      – Fully asynchronous Python bot using <code>python-telegram-bot</code> and optimized for cloud deployments (AWS EC2).<br><br>

      <strong>How It Works:</strong><br>
      – Each group member sends their preferred language as a simple text message.<br>
      – The bot responds with confirmation and stores the choice.<br>
      – Every future message gets automatically translated and grouped in one clear reply.<br><br>
    `,
    buttons: [
      {
        href: 'https://t.me/+AOUJseXoUqQxNWNk',
        icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png',
        text: 'Link to Telegram group'
      },
      {
        href: 'https://github.com/Zvimarmor/TelegramLiveTranslationBot',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "NES Classifier – GNN-based Protein Signal Detection",
    description: `
      This project was completed as part of a hackathon at The Hebrew University of Jerusalem, during a university
      course on protein bioinformatics. The project was conducted in a team of four students, and I served as the team
      coordinator, managing coordination between different parts of the project including data processing, model
      training, and evaluation.<br><br>

      <strong>Project Overview:</strong><br>
      The NES Classifier is a deep learning pipeline designed to detect Nuclear Export Signals (NES) in proteins using
      their 3D structures. The pipeline is based on a Graph Neural Network (GNN) architecture and provides
      classification results directly from .pdb protein files.<br><br>

      <strong>Key Highlights:</strong><br>
      – GNN-based classification of NES signals using 3D spatial data.<br>
      – Automatic graph construction from protein residues with spatial filtering.<br>
      – Node features include amino acid encoding and NES region marking.<br>
      – Multiple models supported (EGNN by default), trained on positive/negative NES datasets.<br>
      – Full training and inference pipeline with easy user interface.<br><br>

      <strong>Outcome:</strong><br>
      The project achieved robust classification results with clear separation between NES-positive and NES-negative
      proteins. ROC curves and boxplots were generated for evaluation.<br><br>

      <strong>Technologies:</strong> PyTorch, PyTorch Geometric, BioPython, scikit-learn, matplotlib
    `,
    imageRow: {
      images: [
        { src: '/images/projects/roc_curve.png', alt: 'ROC Curve for NES Classifier' },
        { src: '/images/projects/boxplot.png', alt: 'Boxplot for NES Classifier' }
      ],
      caption: 'Left: ROC Curve demonstrates classification performance.<br>Right: Boxplot shows the distribution of confidence scores between NES-positive and NES-negative samples.'
    },
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/ProteinEMSHackaton/',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "Pepse Game – Dynamic 2D Open World Simulation",
    description: `
      A dynamic 2D open world game.<br><br>

      <strong>Highlights:</strong><br>
      – Procedurally generated terrain using Perlin noise.<br>
      – Day-night cycles with sun movement, halo effects, and smooth transitions.<br>
      – Avatar with energy mechanics: depletion while moving, regeneration via collectible fruits.<br>
      – Animated weather with floating clouds and rain triggered on avatar jumps.<br>
      – Interactive flora: trees with swaying leaves and regenerating fruits.<br><br>

      <strong>Features:</strong><br>
      – Component-based design for flexible object composition.<br>
      – Observer pattern for event-driven rain mechanics.<br><br>
      – Intuitive avatar controls (arrow keys), environmental interaction, and real-time feedback through energy bars
      and animations.<br>
      – Fully configurable cycle durations, world scale, and energy parameters via constants.
    `,
    image: '/images/projects/pepse_screenshot.png',
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/PreciseEnvironmentalSimulator',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "Categorizing Cognitive Simulator – Prototype vs. Example-Based Image Categorization",
    description: `
      This project investigates two key cognitive theories of image categorization: prototype-based and example-based
      classification strategies. Using a subset of the MNIST dataset (digits 0 and 1), the project compares both
      methods by varying the training data size and analyzing classification accuracy.<br><br>

      <strong>Key Features:</strong><br>
      – Prototype vs. Example-based classification for cognitive modeling.<br>
      – Scalable evaluation with adjustable training percentages (1% to 100%).<br>
      – Extended experiments on all digits (0-9) using additional scripts.<br>
      – Visualizations showing accuracy tradeoffs and categorization efficiency.<br><br>

      <strong>Methods & Tools:</strong><br>
      – NumPy for data handling, Matplotlib for visualizations.<br>
      – IDX file reading and low-level data processing from MNIST dataset.<br>
      – Modular Python structure for experiments with minimal external dependencies.<br><br>
    `,
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/Categorizing_Cognitive_simulator',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      },
      {
        href: 'https://www.linkedin.com/posts/zvimarmor_%D7%9E%D7%94-%D7%94%D7%94%D7%92%D7%93%D7%A8%D7%94-%D7%A9%D7%9C-%D7%A1%D7%9C%D7%98-%D7%90%D7%95-%D7%94%D7%9C%D7%9B%D7%AA-%D7%91%D7%A8%D7%97%D7%95%D7%91-%D7%95%D7%A8%D7%90%D7%99%D7%AA-%D7%A7%D7%A2%D7%A8%D7%94-activity-7211969384574009344-mU1G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHAWB0Bh36O5GGHsz-6Ot2Tuatwqe_WzgQ',
        icon: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
        text: 'View LinkedIn Post'
      }
    ]
  },
  {
    title: "Bricker Game – Java Breakout Clone with Advanced Collision Mechanics",
    description: `
      A Java-based Breakout-style game.<br><br>

      <strong>Features:</strong><br>
      – Multiple collision strategies: extra balls, paddle duplication, turbo mode, and life restoration.<br>
      – Lives panel with animated heart indicators.<br>
      – Adjustable grid size via command-line arguments.<br>
      – Constants-based configuration for easy game balancing.<br><br>

      <strong>Tech Stack:</strong> Java 17, Danogl game framework.<br><br>

      <strong>Note:</strong> This game runs as a standalone Java application and is not directly playable in-browser.
    `,
    image: '/images/projects/bricker_screenshot.png',
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/BrickerGame',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "Personal Website – Portfolio Site",
    description: `
      This website was developed as a personal portfolio to showcase projects and technical capabilities. Originally
      built with raw HTML/CSS, it was later migrated to a <strong>React + Vite</strong> stack with component-based
      architecture and deployed via Netlify.<br><br>

      <strong>Project Scope:</strong><br>
      – Full website design and implementation, from static HTML to a modern React SPA.<br>
      – Custom earthy color palette derived from personal photography.<br>
      – Photo collage landing page, responsive navigation with mobile hamburger menu, and blog system.<br><br>

      <strong>Technical Highlights:</strong><br>
      – Hands-on experience with <strong>DNS configuration</strong> and <strong>domain registration</strong>.<br>
      – Setup of a custom domain with live hosting, including <strong>Google Search Console</strong> integration.<br>
      – Linking the site to external platforms (GitHub repositories, LinkedIn posts, email contact forms).<br>
      – Continuous deployment via Netlify from the React/Vite build.<br><br>
    `,
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/personal-website',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      }
    ]
  },
  {
    title: "Sfirat HaOmer WhatsApp Reminder – Automated Daily Notification",
    description: `
      A lightweight Python program that sends automated WhatsApp reminders for the daily count of Sfirat HaOmer,
      including the corresponding Sefira.<br><br>

      <strong>Project Highlights:</strong><br>
      – Calculates the current day of the Sefira count based on the Jewish calendar.<br>
      – Determines and formats the relevant Sefira for each day.<br>
      – Uses <strong>pywhatkit</strong> library to send scheduled WhatsApp messages directly to the user.<br>
      – Minimal setup: no servers, no cron jobs – runs locally with WhatsApp Web.<br><br>

      <strong>Technical Notes:</strong><br>
      – Python program with zero backend dependencies.<br>
      – Sends messages via WhatsApp Web browser session, using <strong>pywhatkit</strong>.<br>
      – Simple command-line usage with real-time feedback.<br><br>

      <strong>Note:</strong> This script is intended for personal use and requires a logged-in WhatsApp Web session.
    `,
    image: '/images/projects/sfirat_haomer_screenshot.png',
    imageCaption: 'Screenshot: Example of a WhatsApp message automatically generated and sent by the program.',
    buttons: [
      {
        href: 'https://github.com/Zvimarmor/sfirat_haomer',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        text: 'View on GitHub'
      },
      {
        href: 'https://www.linkedin.com/posts/zvimarmor_%D7%94%D7%99%D7%99-%D7%9C%D7%99%D7%A0%D7%A7%D7%93%D7%90%D7%99%D7%9F-%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98-%D7%A7%D7%98%D7%A0%D7%A6%D7%99%D7%A7-%D7%A9%D7%A2%D7%A9%D7%99%D7%AA%D7%99-%D7%9C%D7%98%D7%95%D7%91%D7%AA%D7%99-activity-7191068185893179393-NvVC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHAWB0Bh36O5GGHsz-6Ot2Tuatwqe_WzgQ',
        icon: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
        text: 'View LinkedIn Post'
      }
    ]
  }
];