import headerStyles from '../styles/Header.module.css'

const Header : React.FC = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Insomniac</span> Blogs
      </h1>
      <p className={headerStyles.description}>
        Stay in touch with the gaming world
      </p>
    </div>
  )
}

export default Header