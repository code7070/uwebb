import { useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import styles from './login.module.scss'
import ButtonLogin from './ButtonLogin'
import TimerDot from 'components/TimerDot/TimerDot'

const text = {
  before: {
    title: (
      <>
        Jangan kalah dari
        <br />
        yang lain
      </>
    ),
    sub: 'Miliki website Anda sendiri, mudah, praktis, sekarang!'
  },
  loading: {
    title: (
      <>
        Verifikasi&nbsp;&nbsp;
        <LoadingOutlined />
      </>
    ),
    sub: 'Kami sedang melakukan verifikasi, mohon tunggu'
  },
  success: {
    title: 'Login berhasil',
    sub: (
      <>
        Tunggu, kami sedang mengalihkan&nbsp;&nbsp;
        <LoadingOutlined />
      </>
    )
  }
}

export default function Login() {
  const [word, setWord] = useState('before')

  const onSuccess = () => {
    setWord('loading')
    setTimeout(() => {
      setWord('success')
    }, 3000)
  }

  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginForm}>
            <div className={styles.loginFormSet}>
              <div className={`${styles.textTitle} textH1`}>
                {text[word].title}
              </div>
              <div className={`${styles.textSub} textBody`}>
                {text[word].sub}
              </div>
              <ButtonLogin onSuccess={onSuccess} />
            </div>
          </div>
          <div className={styles.loginVisual}>
            <picture>
              <source srcSet='./image/visual-login1.jpg' type='image/jpg' />
              <img src='./image/visual-login1.jpg' alt='Login Visual' />
            </picture>
          </div>
        </div>
      </div>
    </>
  )
}
