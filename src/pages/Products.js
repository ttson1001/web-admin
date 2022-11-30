import { useState } from 'react';
// material
import { Container, Stack, Typograph, Grid, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { SitterProfileDetails } from '../components/account/sitter-detail';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Sitter Detail">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Thông tin chi tiết chăm sóc viên
        </Typography>
        <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <SitterProfileDetails />
          </Grid>
        
        
        
      </Container>
    </Page>
  );
}
