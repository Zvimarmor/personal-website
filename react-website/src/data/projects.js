export const projectsData = [
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
      This website was developed as a personal portfolio to showcase projects and technical capabilities. Beyond just
      front-end development, this project involved learning and applying essential concepts of web hosting, domain
      management, and modern website deployment.<br><br>

      <strong>Project Scope:</strong><br>
      – Full website design and implementation using raw <strong>HTML</strong> and <strong>CSS</strong>.<br>
      – Minimalist UI design focused on clean and clear user experience.<br>
      – Structuring of multiple pages with easy navigation and styling.<br><br>

      <strong>Technical Highlights:</strong><br>
      – Hands-on experience with <strong>DNS configuration</strong> and <strong>domain registration</strong>.<br>
      – Setup of a custom domain with live hosting, including <strong>Google Search Console</strong> integration.<br>
      – Linking the site to external platforms (GitHub repositories, LinkedIn posts, email contact forms).<br>
      – Experience in managing file hosting via GitHub Pages and connecting site updates to version control.<br><br>
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