import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import { Box, Container } from "@mui/material";
import VideoNewsCard from "../components/VideoNewsCard/VideoNewsCard";
import FeaturedPhotos from "../components/FeaturedPhotos/FeaturedPhotos";
import AddBannerGif from "../components/AddBannerGif/AddBannerGif";
import VideoNewsCard2 from "../components/VideoNewsCard2/VideoNewsCard2";
import More from "../components/More/More";
import HeatedApparel from "../components/HeatedApparelAd/HeatedApparel";
import Franchise from "../components/Franchise/Franchise";
import CommunitySpotlight from "../components/CommunitySpotlight/CommunitySpotlight";
import Tickets from "../components/Tickets/Tickets";
import MobileAppRewards from "../components/MobileAppRewards/MobileAppRewards";
import ThreeCards from "../components/ThreeCards/ThreeCards";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import NavbarBottom from "../components/NavbarBottom";
import ClubLinks from "../components/NavbarBottom/ClubLinks";
import NflClubLinks from "../components/NavbarBottom/NflClubLinks";
import MoreNflSites from "../components/NavbarBottom/MoreNflSites";
import DownloadApps from "../components/DownloadApps/DownloadApps";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [activeLink, setActiveLink] = useState("CLUB LINKS"); // Default to 'CLUB LINKS' initially

  const handleSetActiveLink = (link) => {
    console.log("Link clicked:", link); // Debugging: Check which link is clicked
    setActiveLink(link);
    console.log("Active Link set to:", link); // Debugging: Confirm the state update
  };

  return (
    <>
      {/* <Hero /> */}
      {/* <Box
        sx={{
          width: "95%",
          height: "90px",
          background: "red",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "24px auto",
        }}
      >
        <h3>Free Agency Tracker {">"}</h3>
      </Box>
      <VideoNewsCard />
      <FeaturedPhotos />
      <AddBannerGif />
      <VideoNewsCard2 />
      <More />
      <HeatedApparel />
      <Franchise />
      <CommunitySpotlight />
      <Tickets />
      <MobileAppRewards />
      <ThreeCards />
      <SocialMedia />
      <NflClubLinks />
      <Container maxWidth={false} disableGutters sx={{ width: "100%" }}>
        <NavbarBottom activeLink={activeLink} setActiveLink={setActiveLink} />
        {activeLink === "CLUB LINKS" && <ClubLinks />}
        {activeLink === "NFL CLUBS" && <NflClubLinks />}
        {activeLink === "MORE NFL SITES" && <MoreNflSites />} 
      </Container>
      <DownloadApps />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
