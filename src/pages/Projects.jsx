import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

const Projects = () => {
  const projects = [
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
    // Add more projects here...
  ];

  return (
    <Layout>
      <section id="main-content">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </Layout>
  )
}

export default Projects