import React from 'react';
import { GetServerSideProps, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const data = new Date().toLocaleTimeString();

  return {
    props: {
      data,
    },
  };
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = new Date().toLocaleTimeString();

//   return {
//     props: {
//       data,
//     },
//   };
// }

interface AboutPageProps {
  data: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  return (
    <>
      <h1>About page {data}</h1>
    </>
  );
}

export default AboutPage;