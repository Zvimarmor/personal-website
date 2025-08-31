import BlogPost from '../../components/BlogPost'

const SongOfMyself = () => {
  const content = `
    I celebrate myself, and sing myself,<br>
    And what I assume you shall assume,<br>
    For every atom belonging to me as good belongs to you.<br><br>

    I loafe and invite my soul,<br>
    I lean and loafe at my ease observing a spear of summer grass.<br><br>

    My tongue, every atom of my blood, form'd from this soil, this air,<br>
    Born here of parents born here from parents the same, and their parents the same,<br>
    I, now thirty-seven years old in perfect health begin,<br>
    Hoping to cease not till death.<br><br>

    Creeds and schools in abeyance,<br>
    Retiring back a while sufficed at what they are, but never forgotten,<br>
    I harbor for good or bad, I permit to speak at every hazard,<br>
    Nature without check with original energy.
  `

  return (
    <BlogPost
      title="Song of Myself"
      date="2025-07-20"
      author="Walt Whitman"
      content={content}
      direction="ltr"
    />
  )
}

export default SongOfMyself