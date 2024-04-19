import React, { useState } from "react";
import { Container, CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme";
import Home from "./Pages/Home";
import Banner from "./components/Banner";
import News from "./Pages/News";
import Videos from "./Pages/Videos";
import Photos from "./Pages/Photos";
import Podcasts from "./Pages/Podcasts";
import Schedule from "./Pages/Schedule";
import AddBanner from "./components/AddBanner/AddBanner";
import Navbar from "./components/Navbar/Navbar";
import FreeAgencyTracker from "./components/FreeAgencyTracker/FreeAgencyTracker";
import FeaturedPhotos from "./components/FeaturedPhotos/FeaturedPhotos";
import VideoNewsCard from "./components/VideoNewsCard/VideoNewsCard";
import VideoNewsCard2 from "./components/VideoNewsCard2/VideoNewsCard2";
import Hero from "./components/Hero/Hero";
import AdBannerGif from "./components/AddBannerGif/AddBannerGif";
import More from "./components/More/More";
import Franchise from "./components/Franchise/Franchise";
import CommunitySpotlight from "./components/CommunitySpotlight/CommunitySpotlight";
import Tickets from "./components/Tickets/Tickets";
import MobileAppRewards from "./components/MobileAppRewards/MobileAppRewards";
import ThreeCards from "./components/ThreeCards/ThreeCards.js";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import NavbarBottom from "./components/NavbarBottom/NavbarBottom";
import Footer from "./components/Footer/Footer";
import NflClubLinks from "./components/NavbarBottom/NflClubLinks.js";
import ClubLinks from "./components/NavbarBottom/ClubLinks.js";
import MoreNflSites from "./components/NavbarBottom/MoreNflSites.js";
import DownloadApps from "./components/DownloadApps/DownloadApps.js";

const App = () => {
  const [activeLink, setActiveLink] = useState("CLUB LINKS"); // Default to 'CLUB LINKS' initially
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { backgroundColor: "#eeeeee" } }} />
      <Router>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/schedule" element={<Schedule />} />
          {/* Add other routes as needed */}
        </Routes>
        <AddBanner />
        <Hero />
        <FreeAgencyTracker />
        <VideoNewsCard />
        <FeaturedPhotos />
        <AdBannerGif />
        <VideoNewsCard2 />
        <More />
        <AdBannerGif />
        <Franchise />
        <CommunitySpotlight />
        <Tickets />
        <MobileAppRewards />
        <ThreeCards />
        <SocialMedia />
        <Container maxWidth={false} disableGutters sx={{ width: "100%" }}>
          <NavbarBottom activeLink={activeLink} setActiveLink={setActiveLink} />
          {activeLink === "CLUB LINKS" && <ClubLinks />}
          {activeLink === "NFL CLUBS" && <NflClubLinks />}
          {activeLink === "MORE NFL SITES" && <MoreNflSites />}
        </Container>
        <DownloadApps />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
