import styles from '../styles/Layout.module.css'
import Header from './Header'
import Nav from './Nav'

interface LayoutProps {
  children: React.ReactNode
}

const Layout : React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Nav />
      <Header/>
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout