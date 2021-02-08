import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

function Home({ data }) {
  return (
    <Layout title="Youtube MUI">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title:
        'Midnight Coding in Chicago | LoFi Jazz Hip-Hop [Code - Relax - Study]',
      authorId: 1,
      authorName: 'Code Pioneers',
      authorAvatar: 'avatarUrl',
      views: 450,
      thumb: '/thumbs/next01.webp',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      authorId: 2,
      authorName: 'Lucas Nhimi',
      authorAvatar: 'avatarUrl',
      views: 824310,
      thumb: '/thumbs/next02.webp',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title:
        'RESPONSIVE Personal PORTFOLIO Website HTML CSS And JAVASCRIPT | Mobile First',
      authorId: 3,
      authorName: 'Bedimcode',
      authorAvatar: 'avatarUrl',
      views: 20112,
      thumb: '/thumbs/next03.webp',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title:
        'Como a STARLINK vai mudar o FUTURO da Internet | A Internet do Futuro',
      authorId: 4,
      authorName: 'Elementar',
      authorAvatar: 'avatarUrl',
      views: 10937,
      thumb: '/thumbs/next04.webp',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
  ];
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Home;
