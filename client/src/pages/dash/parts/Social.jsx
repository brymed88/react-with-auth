import React from 'react';

import './Social.min.css';
import facebook from '../../../assets/dash/facebook.svg';
import twitter from '../../../assets/dash/twitter.svg';
import github from '../../../assets/dash/github.svg';

const Social = () => {
  return (
    <section className='social'>
      <a href='https://treantlabs.com' target='_blank' rel='norefferer'>
        Treantlabs.com
      </a>
      <div>
        <ul>
          <li>
            <a
              href='https://facebook.com/treantlabs'
              target='_blank'
              rel='norefferer'>
              <img src={facebook} alt='Treantlabs - facebook' />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/treantlabs'
              target='_blank'
              rel='norefferer'>
              <img src={twitter} alt='Treantlabs - Twitter' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/brymed88'
              target='_blank'
              rel='norefferer'>
              <img src={github} alt='Treantlabs - Github' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Social;
