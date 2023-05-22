import React from 'react';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import ContentTemplate from './ContentTemplate';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const MainContent = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Footer = styled('footer')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: black;
`;

const Navigation = styled('nav')`
  flex-grow: 1;
`;

const NavigationList = styled('ul')`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavigationItem = styled('li')`
  margin: 0 10px;
`;

const NavigationLink = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  );
};


const AboutPage = () => {
  return (
    <MainContent>
    <ContentTemplate page="Hubert D. Zając">
      <Typography variant="h3">About Page</Typography>
      {/* Add your content for the About page */}
    </ContentTemplate>
    </MainContent>

  );
};

const PublicationsPage = () => {
  return (
    <MainContent>
      <Typography variant="h3">Publications Page</Typography>
      {/* Add your content for the Publications page */}
    </MainContent>
  );
};

const ContactPage = () => {
  return (
    <MainContent>
      <Typography variant="h3">Contact Me Page</Typography>
      {/* Add your content for the Contact Me page */}
    </MainContent>
  );
};

const PageTemplate = ({ activePage }) => {
  const getPageContent = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage />;
      case 'publications':
        return <PublicationsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <MainContent>{/* Add your default content here */}</MainContent>;
    }
  };

  return (
       <Container>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'black', border: '1px solid #FF00FF'}}>
          <Navigation>
            <NavigationList>
              <NavigationItem>
                <NavigationLink to="/about"> About</NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink to="/publications">Publications</NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink to="/contact">Contact Me</NavigationLink>
              </NavigationItem>
            </NavigationList>
          </Navigation>
        </Toolbar>
      </AppBar>
      {getPageContent()}
      <Footer>
         <Box sx={{ marginRight: 1 }}>
          <IconButton color="primary" aria-label="Twitter">
            <NavigationLink to='https://twitter.com/hdzajac'> <TwitterIcon/></NavigationLink>
          </IconButton>
        </Box>
        <Box sx={{ marginRight: 1 }}>
          <IconButton color="primary" aria-label="Twitter">
            <NavigationLink to='https://scholar.google.com/citations?user=rr-Z8FAAAAAJ&hl=en'> <GoogleIcon/></NavigationLink>
          </IconButton>
        </Box>
        <Box sx={{ marginRight: 1 }}>
          <IconButton color="primary" aria-label="Email">
            <NavigationLink to='mailto:hdzajac@di.ku.dk'><EmailIcon/></NavigationLink>
          </IconButton>
        </Box>
        <IconButton color="primary" aria-label="LinkedIn">
            <NavigationLink to='https://www.linkedin.com/in/hdzajac/'> <LinkedInIcon/> </NavigationLink>
        </IconButton>
      </Footer>
    </Container>
  );
};

export default PageTemplate;
