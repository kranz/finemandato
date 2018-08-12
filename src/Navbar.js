import React from 'react';
import { I18n } from 'react-i18next'
import { Flag, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default function Navbar () {
  return (
    <I18n ns='translations'>
      {
        (t, {i18n}) => (
            <Menu widths={5} inverted>
                <Menu.Item name='espflag'>
                  <div onClick={() => i18n.changeLanguage('es')}>
                    <Flag name='es' />
                  </div>
                </Menu.Item>
                <Menu.Item name='gerflag'>
                  <div onClick={() => i18n.changeLanguage('de')}>
                    <Flag name='de' />
                  </div>
                </Menu.Item>
                <Menu.Item name='itaflag'>
                  <div onClick={() => i18n.changeLanguage('it')}>
                    <Flag name='it' />
                  </div>
                </Menu.Item>
                <Menu.Item name='engflag'>
                  <div onClick={() => i18n.changeLanguage('en')}>
                    <Flag name='gb' />
                  </div>
                </Menu.Item>
                <Menu.Item name='fraflag'>
                  <div onClick={() => i18n.changeLanguage('fr')}>
                    <Flag name='fr' />
                  </div>
                </Menu.Item>
            </Menu>
        )
      }
    </I18n>
  )
}
