import React from 'react'; // Importing React
import Head from 'next/head'; // Importing Head component from Next.js
import aboutStyles from '@/styles/About.module.css'; // Importing CSS module for styling

/**
 * about Component - Renders the About page content.
 * @returns {JSX.Element} - The rendered about component.
 */
const about: React.FC = () => {
  return (
    <>
      {/* Setting document metadata using the 'Head' component */}
      <Head>
        <title>Insomniac Blogs | About</title>
      </Head>
      {/* Container for About page content */}
      <div className={aboutStyles.container}>
        {/* Title of the About page */}
        <h1 className={aboutStyles.title}>About</h1>
        {/* Content of the About page */}
        <p className={aboutStyles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique lacinia ligula et laoreet. Nullam tincidunt felis sit amet urna aliquet, vel tincidunt ipsum malesuada. Fusce in risus id mauris convallis pellentesque. Sed feugiat elit nec fringilla rhoncus. Nam diam lectus, pulvinar eget viverra quis, elementum eu ex. Proin ac metus quis quam dapibus sollicitudin. Quisque id viverra felis, sit amet ultrices nibh. Duis faucibus justo in placerat pharetra. Maecenas tincidunt nisl ut sapien imperdiet, ut finibus metus efficitur.</p>
      </div>
    </>
  );
};

export default about; // Exporting the 'about' component as the default export
