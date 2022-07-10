import React from 'react';

import { Box, Card, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Image from 'next/image';

import { Product } from '@/types/Prodct';

import Link from './Link';

type Props = {
  data: Product;
};

function ProductItem({ data }: Props) {
  const theme = useTheme();

  return (
    <Link href={`/about/product/${data.id}`} sx={{ textDecoration: 'none' }}>
      <Card sx={{ mr: 1 }}>
        <Box sx={{ height: '90px', bgcolor: alpha(theme.palette.primary.main, 0.05) }} />
        <Box sx={{ padding: 1 }}>
          <Box sx={{ mt: -12, display: 'flex', justifyContent: 'center' }}>
            <Image width="106px" height="120px" src={data.image} alt="product" />
          </Box>
          <Typography fontSize="10px" variant="subtitle2">
            {data.categoryName}
          </Typography>
          <Typography fontSize="20px" variant="h6">
            {data.name}
          </Typography>
          <Typography fontSize="15px" variant="subtitle2" fontWeight="bold" color="primary.main">
            {data.price}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}

export default ProductItem;
