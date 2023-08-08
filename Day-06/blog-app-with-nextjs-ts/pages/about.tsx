import React from 'react'
import Head from 'next/head'
import aboutStyles from '@/styles/About.module.css'

const about : React.FC = () => {
  return (
    <>
      <Head>
        <title>Insomniac Blogs | About</title>
      </Head>
      <div className={aboutStyles.container}>
        <h1 className={aboutStyles.title}>About</h1>
        <p className={aboutStyles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique lacinia ligula et laoreet. Nullam tincidunt felis sit amet urna aliquet, vel tincidunt ipsum malesuada. Fusce in risus id mauris convallis pellentesque. Sed feugiat elit nec fringilla rhoncus. Nam diam lectus, pulvinar eget viverra quis, elementum eu ex. Proin ac metus quis quam dapibus sollicitudin. Quisque id viverra felis, sit amet ultrices nibh. Duis faucibus justo in placerat pharetra. Maecenas tincidunt nisl ut sapien imperdiet, ut finibus metus efficitur.</p>
      </div>
    </>
  )
}

export default about