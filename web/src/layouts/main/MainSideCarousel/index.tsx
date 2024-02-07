import { Box, Paper } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card/Card';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Side2 from '../../../assets/images/Group3.png';
import Side1 from '../../../assets/images/Group2.png';

export default function MainSideCarousel() {
  const items = [Side1, Side2];

  const [ImageList, setImageList] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:4080/api/Image`).then(response => {
      const { data } = response;
      if (data) {
        const tmp: any[] = [[], []];
        data.data.forEach((item: any, index: number) => {
          if (index < 3) tmp[0].push(item);
          else tmp[1].push(item);
        });
        setImageList(tmp);
      }
    });
  }, []);

  return (
    <Carousel>
      {ImageList.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }: any) {
  return (
    <Box>
      <Typography
        variant="h5"
        fontFamily="logoFont"
        textAlign="center"
        sx={{ mt: 1 }}
      >
        {' '}
        {'<'} 오늘의 추천 책 {'>'}
      </Typography>
      <Box
        height="500px"
        display="flex"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        {item.map((item: any) => (
          <PaperItem item={item} />
        ))}
      </Box>
    </Box>
  );
}

function PaperItem({ item }: any) {
  return (
    <Card>
      <Link to={`/DtlPage/${item.productSeq}`}>
        <Box>
          <Box
            width="100%"
            height="400px"
            component="img"
            src={item.productImageUrl}
          />
        </Box>
      </Link>
    </Card>
  );
}
