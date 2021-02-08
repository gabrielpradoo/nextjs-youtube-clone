import nc from 'next-connect';
import upload from 'src/utils/upload';

const handler = nc()
  .use(upload.single('file'))
  .post((req, res) => {
    // Receive our image and another data by endpoint
    // MongoDB database
    const { title, authorName, authorAvatar, videoUrl } = req.body;

    res.json({ hello: 'world' });
  })

  .patch(async (req, res) => {
    throw new Error('Throws me around! Erros can be caught and handled.');
  });

export default handler;
