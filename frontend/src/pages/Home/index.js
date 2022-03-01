import React from "react";
import Layout from "../../components/Layout/index.jsx";
import SearchForm from "../../components/SearchForm/index.jsx";

import {
  Container,
  Column,
  Title,
  Description,
  Illustration,
  Spacer,
} from "./styles";

import illustration from "../../assets/images/illustrations/man.svg";

export default function HomeScreen() {
  return (
    <Layout>
      <Container>
        <Column>
          <Title>Where in the world ? search anywhere</Title>
          <Description>
            Searching just got easier, lets take you where you want to go
          </Description>

          <SearchForm />
        </Column>

        <Illustration src={illustration} />
      </Container>
    </Layout>
  );
}
