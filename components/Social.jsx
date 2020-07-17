import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';


export default function SocialFollow() {
  return (
      <React.Fragment>
        <a href={'https://www.twitter.com/maumercado'} style={{ margin: '0 7px', color: 'white' }} className={'twitter social'}>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        <a href={'https://www.github.com/maumercado'} style={{ margin: '0 7px', color: 'white' }} className={'github social'}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

      <a href={'https://www.instagram.com/maumercado'} style={{ margin: '0 7px', color: 'white' }} className={'instagram social'}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a href={'https://www.linkedin.com/in/mauromercado/'} style={{ margin: '0 7px', color: 'white' }} className={'linkedin social'}>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a href={'https://codigo.sh/'} style={{ margin: '0 7px', color: 'white' }} className={'blog social'}>
        <FontAwesomeIcon icon={faBlog} size="2x" />
     </a>
      </React.Fragment>
  );
}
