import { useState } from 'react'
import Link from 'next/link'
import { GoogleLogin } from 'react-google-login'
import { Button as ButtonAntd } from 'antd'
import { GoogleOutlined as GIcon } from '@ant-design/icons'
import styles from './login.module.scss'
import 'antd/dist/antd.css'

export default function ButtonLogin({ onSuccess, onFailure, hideOnSuccess }) {
  const [loading, setLoading] = useState(false)

  const successLogin = (e) => {
    if (typeof onSuccess === 'function') onSuccess(e)
    setLoading('success')
    setWord('success')
    console.log('Login Success: ', e)
    alert('Login Success!')
  }

  const failureLogin = (e) => {
    if (typeof onFailure === 'function') onFailure(e)
    setLoading(false)
    console.log('Login Failure: ', e)
    alert('Login Failure!')
  }

  if (loading === 'success') return ''

  const gClick = (gProps) => {
    if (!gProps) return ''
    setLoading('loading')
    gProps.onClick()
  }

  return (
    <div className={styles.loginActGroup}>
      <div className={styles.loginBtn}>
        <GoogleLogin
          clientId='719263281239-h845c9p76oa9hgp29nuu95f94babisnp.apps.googleusercontent.com'
          onSuccess={successLogin}
          onFailure={failureLogin}
          render={(gProps) => {
            return (
              <ButtonAntd
                loading={gProps.disabled || loading === 'loading'}
                type='primary fullWidth'
                disabled={gProps.disabled || loading === 'loading'}
                onClick={() => gClick(gProps)}
                icon={<GIcon />}
                size='large'
              >
                Masuk dengan Akun Google
              </ButtonAntd>
            )
          }}
        />
      </div>
      <div className={`${styles.loginOffer} textBody`}>
        Belum memiliki akun?
        <Link href='/register'>Daftar Gratis Sekarang</Link>
      </div>
    </div>
  )
}
