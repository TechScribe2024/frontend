import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import { Container, TextField } from "@mui/material";

const CreateBlog = () => {
  return <div>
   <Box sx={{ flexGrow: 1, backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            START YOUR BLOG
          </Typography>
          <Button color="inherit">
          <Link to="/createBlog">Trending Blogs</Link></Button>
          <Button color="inherit">
            <Link to="/createBlog">Most Viewed Blogs</Link>
          </Button>
          <Button color="inherit">
            <Link to="/createBlog">Genres</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Container fixed sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Card sx={{ border: 'Highlight', minWidth: 500, padding: 3 }}>
          <CardContent>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Body"
              variant="outlined"
              multiline
              rows={4}
              placeholder="Enter body text here..."
              sx={{ marginBottom: 2 }}
            />
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button size="large" variant="contained">Add</Button>
          </CardActions>
        </Card>
      </Container>

    </Box>
  </div>;
};

export default CreateBlog;