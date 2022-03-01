import React, { useMemo } from "react";
import GoogleMapReact from "google-map-react";

import Layout from "../../components/Layout/index.jsx";

import { Container, Title, Description, Spacer, MapsContainer } from "./styles";
import { useLocation } from "react-router-dom";

export default function LocationScreen() {
  const { search } = useLocation();
  const memoizedQuery = useMemo(() => new URLSearchParams(search), [search]);

  const address = memoizedQuery.get("address");
  const latitude = parseFloat(memoizedQuery.get("latitude"));
  const longitude = parseFloat(memoizedQuery.get("longitude"));
  //const elevation = memoizedQuery.get("elevation")
  const timeZoneId = memoizedQuery.get("timeZoneId");

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 11,
  };

  return (
    <Layout showExitButton={true}>
      <Container>
        <Title>{address}</Title>
        <Description>
          {new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            hour12: true,
            timeZoneName: "long",
            timeZone: timeZoneId,
          }).format(new Date())}
        </Description>
        <Spacer />

        <MapsContainer>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </MapsContainer>
      </Container>
    </Layout>
  );
}
