import React, { useState } from 'react'
import { withTranslation, Trans } from 'react-i18next'
import { localesList } from '../../i18n'
import i18n from 'i18next'
import Dropdown from '../dropdown/Dropdown'

import plLogoText from '../../media/logos/protocol-labs-text.svg'
import LanguagePicker from '../../media/images/Language'

const Footer = ({ t }) => {
  const anchorClass = 'no-underline underline-hover aqua'
  const defaultLanguage = window.localStorage.getItem('i18nextLng')?.split('-')[0]
  const [selectedLanguage, setLanguage] = useState(defaultLanguage)

  const onLocaleChange = (locale) => {
    window.localStorage.setItem('i18nextLng', locale)
    setLanguage(locale)
    i18n.changeLanguage(locale)
  }

  return (
    <div className='flex-ns items-center pt5 pb3 ph4 f7 white '>
      <div>
        <a href='https://protocol.ai' target='_blank' rel='noopener noreferrer'>
          <img src={plLogoText} height='50px' alt='Protocol Labs' />
        </a>
      </div>
      <div className='mr2 pb1 dn dib-ns'>
          |
      </div>
      <div className='pb1'>
        <Trans i18nKey='footer'>
          Licensed <a className={anchorClass} href='https://creativecommons.org/licenses/by/3.0/' target='_blank' rel='noopener noreferrer'>CC-BY 3.0</a> except as <a className={anchorClass} href='https://protocol.ai/legal/' target='_blank' rel='noopener noreferrer'>noted</a>
        </Trans>
      </div>
      <div className='flex items-center pv2'>
        <div className='mh2 pb1 dn dib-ns'>
          |
        </div>
        <div className="mh1">Select Language: 
        </div>
        <Dropdown className="ml1" options={localesList} Icon={LanguagePicker} onChange={onLocaleChange} selectedOption={selectedLanguage}/>
      </div>
    </div>
  )
}

export default withTranslation('translation')(Footer)
