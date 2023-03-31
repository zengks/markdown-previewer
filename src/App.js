import { marked } from 'marked'

import styles from './styles.module.css'
import { useEffect, useState } from 'react'

import raw from './marked.txt'

function App() {
  const [markedDown, setMarkedDown] = useState('')

  useEffect(() => {
    fetch(raw)
      .then(r => r.text())
      .then(text => {
        setMarkedDown(text)
      })
  })

  const handleChange = (e) => {
    e.preventDefault()
    setMarkedDown(e.target.value)
  }

  return (
    <div className={styles.container}>
      <section className={styles.editor}>
        <textarea
          type="text"
          id='editor'
          rows='50'
          cols='60'
          name='editor'
          value={markedDown}
          onChange={handleChange}
        />
      </section>

      <section id='previewer' className={styles.previewer}>
        <div dangerouslySetInnerHTML={{ __html: marked.parse(markedDown) }} />
      </section>
    </div>
  );
}

export default App;
