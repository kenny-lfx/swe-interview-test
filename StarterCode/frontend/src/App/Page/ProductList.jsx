import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Styles
  const containerStyle = { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    padding: '2rem' 
  };

  const imageStyle = { 
    width: '100%', 
    height: '180px', 
    objectFit: 'cover' 
  };

  const deleteStyle = {
    position: 'absolute', 
    color: 'red',
  };

  // fetchProducts() : Fetch products from backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // handleDelete(id) : Delete product by ID
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container style={containerStyle}>
      <Typography variant="h3" component="h2" gutterBottom style={{marginBottom: '4rem', fontWeight: 'bold'}}>
        Simpler Card List
      </Typography>

      {products.length > 0 ? (
        <Grid container spacing={3} style={{maxWidth: '1000px'}}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card style={{position: 'relative'}}>
                <IconButton 
                  aria-label="delete" 
                  onClick={() => handleDelete(product.id)}
                  style={deleteStyle}
                >
                  <DeleteIcon />
                </IconButton>

                <img src={product.imageUrl} alt={product.name} style={imageStyle} />
                <CardContent>
                  <Typography variant="h5" color="text.primary"  marginBottom='0.5rem' style={{ fontWeight: 'bold' }}>
                    {product.name}
                  </Typography>
                  <Typography variant="h6" color="text.primary" style={{ fontWeight: 'bold' }}>
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <Typography variant="h4" color="text.secondary" style={{marginTop: '9rem'}}>
            No cards available.
          </Typography>
          <Typography variant="h7" color="text.secondary" style={{marginTop: '1rem'}}>
            To add all cards, restart the server.
          </Typography>
        </>
      )}
    </Container>
  );
};

export default ProductList;