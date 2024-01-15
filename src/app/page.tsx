import type { Metadata } from 'next'
import Image from 'next/image';
import * as React from 'react';
import styles from './main.module.css'
import { clsx } from 'clsx';

import PodcastPlayer from '@/components/PodcastPlayer';
import Modal from '@/components/Modal';
import ModalTrigger from '@/components/ModalTrigger';
import Navbar from '@/components/Navbar';
import Dust from '@/components/Dust';
import IntersectionObserver from '@/components/IntersectionObserver';

import Triangle from '~/svg/Triangle.svg';
import Youtube from '~/svg/Youtube.svg';
import Twitter from '~/svg/Twitter.svg';
import Instagram from '~/svg/Instagram.svg';
import Discord from '~/svg/Discord.svg';
import Tiktok from '~/svg/Tiktok.svg';
import Apple from '~/svg/Apple.svg';
import Google from '~/svg/Google.svg';
import Patreon from '~/svg/Patreon.svg';
import Overcast from '~/svg/Overcast.svg';
import Spotify from '~/svg/Spotify.svg';
import Spotlight from '~/svg/Spotlight.svg';
import chair from '~/images/chair.png'

export const metadata: Metadata = {
  title: 'Improv Is Dead'
}

export default function HomePage() {
  return (
    <main id="main" >
      <Modal />
      <IntersectionObserver />
      <section className={styles.landingSection}>
        <Navbar />
        <div className={styles.staticDust} />
        <div className={styles.mobileOverlay} />
        <div className={styles.center}>
          <Dust />
          <PodcastPlayer />
          <Triangle className={styles.triangle} />
          <div className={styles.chairWrap}>
            <Image className={styles.chair} src={chair} alt='dust' />
          </div>
          <div className={styles.sloganWrap}>
            <div><span>THE PODCAST</span></div>
            <div><span>WHERE IMPROV COMEDY</span></div>
            <div><span>MEETS AUDIO-DRAMA FICTION</span></div>
            <ModalTrigger>
              <button className={`${styles.button} button button--bestia`}>
                <div className="button__bg"></div><span>Listen Now</span>
              </button>
            </ModalTrigger>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.socialBar}>
          <div className={styles.socialWrap}>
            <div className={styles.follow}>Follow Us</div>
            <a href="https://discord.gg/dqS6hkfVGE" target="_blank" ><Discord className="grow" /></a>
            <a href="https://www.instagram.com/improvisdead" target="_blank" ><Instagram className="grow" /></a>
            <a href="https://twitter.com/ImprovIsDead" target="_blank" ><Twitter className="grow" /></a>
            <a href="https://www.youtube.com/@improvisdead4508/videos" target="_blank" ><Youtube className="grow" /></a>
          </div>
        </div>
        <div className={styles.patreon}>
          <div className={styles.patreonTitle}>
            JOIN THE PATREON
          </div>
          <div className={styles.patreonSubtitle}>SUPPORT THE POD</div>
          <div className={styles.patreonDescription}>For as low as $2 a month, you can get access to bonus content, archived episodes, make scene requests and more!</div>
          <a href="https://patreon.com/improvisdead" target="_blank">
            <button className={`${styles.patreonButton} button button--bestia`}>
              <div className="button__bg" style={{ background: '#fff' }}></div><span>CHECK OUT THE PATREON</span>
            </button>
          </a>
        </div>
      </section >
      <section className={styles.hosts} id='hosts'>
        <div className={styles.chicagoBackground} />
        <div className={styles.hostsTitle}>Meet the Hosts!</div>
        <div className={styles.hostsColumns}>
          <div>
            <div className={clsx(styles.hostsCircleWrap, styles.tim)}>
              <Spotlight className={styles.spotlight} id="tim" />
              <div className={styles.hostsCircle} />
            </div>
            <div className={styles.timWrap}>
              <div className={styles.largeFont}>TIM LYONS</div>
              <div className={styles.socialTab}>
                <a href="https://twitter.com/TimLyons" target="_blank"><Twitter className="grow" /></a>
                <a href="https://www.tiktok.com/@thrsttraptim" target="_blank"> <Tiktok className="grow" /></a>
              </div>
            </div>
          </div>
          <div className={styles.danColumn}>
            <div className={styles.danSubColumn}>
              <div className={clsx(styles.hostsCircleWrap, styles.dan)}>
                <Spotlight className={styles.spotlight} id="dan" />
                <div className={styles.hostsCircle} />
              </div>
              <div className={styles.largeFont}>DAN WHITE</div>
              <div className={styles.socialTab}>
                <a href="https://twitter.com/atdanwhite" target="_blank"><Twitter className="grow" /></a>
                <a href="https://www.instagram.com/atdanwhite/" target="_blank"><Instagram className="grow" /></a>
              </div>
            </div>
          </div>
          <div>
            <div className={clsx(styles.hostsCircleWrap, styles.damian)}>
              <Spotlight className={styles.spotlight} id="damian" />
              <div className={styles.hostsCircle} />
            </div>
            <div className={styles.damianWrap}>
              <div className={styles.largeFont}>DAMIAN ANAYA</div>
              <div className={styles.socialTab}>
                <a href="https://twitter.com/damiananaya" target="_blank"><Twitter className="grow" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hostText}>
          <p>
            <span className={styles.hostSpan}>
              Tim, Dan, and Damian are three best buds who've been weaving comedy gold for nearly a decade. Famous for their performances with Chicago's legendary FUDGE team, they rocked iO Chicago's stage for five fun-filled years. Today, they're keeping the laughs alive from the comfort of their apartments with the uproarious 'IMPROV IS DEAD' podcast - weekly shenanigans guaranteed.
            </span>
          </p>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.sitemap}>
          <a href="mailto:improvisdeadpod@gmail.com"><div>Contact</div></a>
          <a href="mailto:improvisdeadpod@gmail.com"><div>Advertising</div></a>
          <a href="https://improvisdead.captivate.fm/" target="_blank"><div>Episodes</div></a>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.socialListWrap}>
            <div className={styles.socialList}>
              <div>LISTEN</div>
              <hr />
              <div className={styles.socialLinks}>
                <a href="https://open.spotify.com/show/6IDPz13PN4f2HiFKdKbV9B" target="_blank"><Spotify className="grow" /></a>
                <a href="https://podcasts.apple.com/us/podcast/improv-is-dead/id1530093214" target="_blank"><Apple className="grow" /></a>
                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5jYXB0aXZhdGUuZm0vaW1wcm92aXNkZWFkLw?sa=X&ved=0CAIQ9sEGahcKEwjQxf7a5aiDAxUAAAAAHQAAAAAQAg" target="_blank"><Google className="grow" /></a>
                <a href="https://overcast.fm/+iItypHD3s" target="_blank"><Overcast className="grow" /></a>
              </div>
            </div>
            <div className={styles.socialList}>
              <div>FOLLOW</div>
              <hr />
              <div className={styles.socialLinks}>
                <a href="https://discord.gg/dqS6hkfVGE" target="_blank"><Discord className="grow" /></a>
                <a href="https://www.instagram.com/improvisdead" target="_blank"><Instagram className="grow" /></a>
                <a href="https://twitter.com/ImprovIsDead" target="_blank"><Twitter className="grow" /></a>
                <a href="https://www.youtube.com/@improvisdead4508/videos" target="_blank"><Youtube className="grow" /></a>
              </div>
            </div>
            <div className={styles.socialList}>
              <div>JOIN</div>
              <hr />
              <div className={styles.socialLinks}>
                <a href="https://patreon.com/improvisdead" target="_blank"><Patreon className="grow" /></a>
                <a href="https://discord.gg/dqS6hkfVGE" target="_blank"><Discord className="grow" /></a>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <div>© 2023 IMPROV IS DEAD</div>
            <div>Cobbled by <a href="https://www.linkedin.com/in/mattwilliams85/" target="_blank" className={styles.link}>Matthew Williams</a></div>
          </div>
        </div>
      </footer>
    </main >
  );
}
