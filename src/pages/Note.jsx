import { Icon } from '@/features/ui'
import styles from './Note.module.css'

const Note = ({ note }) => {
  return (
    <article>
      <h2 className={styles.content}>
        {note.important ? (
          <Icon name="star_rate" />
        ) : (
          <Icon name="star_border" />
        )}
        {note.content}
      </h2>
      <div>{note.user}</div>
      <div></div>
    </article>
  )
}

export default Note
