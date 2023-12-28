'use client'

import Apple from '~/svg/AppleColor.svg';
import Google from '~/svg/GoogleColor.svg';
import Overcast from '~/svg/OvercastColor.svg';
import Spotify from '~/svg/SpotifyColor.svg';
import styles from './styles.module.css';

export default function Modal() {
  function hideModal() {
    document.getElementById('modal').style.display = 'none';
  }
  return (
    <div className={styles.modalWrap} id="modal">
      <div className={styles.overlay} onClick={hideModal}></div>
      <div className={styles.modal}>
        <div className={styles.title}>Listen On...</div>
        <hr />
        <div className={styles.links}>
          <a href="https://open.spotify.com/show/6IDPz13PN4f2HiFKdKbV9B" target="_blank"><Spotify className="grow" /></a>
          <a href="https://podcasts.apple.com/us/podcast/improv-is-dead/id1530093214" target="_blank"><Apple className="grow" /></a>
          <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5jYXB0aXZhdGUuZm0vaW1wcm92aXNkZWFkLw?sa=X&ved=0CAIQ9sEGahcKEwjQxf7a5aiDAxUAAAAAHQAAAAAQAg" target="_blank"><Google className="grow" /></a>
          <a href="https://overcast.fm/+iItypHD3s" target="_blank"><Overcast className="grow" /></a>
        </div>
      </div>
    </div>
  )
}