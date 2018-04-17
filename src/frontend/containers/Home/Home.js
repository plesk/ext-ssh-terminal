/* eslint-disable react/jsx-max-depth */

import { createElement, Fragment, Carousel, Grid, GridCol, Panel, Media, MediaSection, Icon, Translate } from '@plesk/ui-library';
import styled, { keyframes } from 'styled-components';
import heroImg from './hero.jpg';

const sheen = keyframes`
    0% { transform: rotateZ(60deg) translate(0, 80em) }
    20% { transform: rotateZ(60deg) translate(0, -80em) }
    20.1% { transform: rotateZ(60deg) translate(0, 80em) }
`;

const Hero = styled.div`
    color: rgba(255, 255, 255, 0.9);
    background: #304658 url(${heroImg}) 50% 0;
    border-radius: .25rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    position: relative;
    overflow: hidden;
    padding: 2.4rem;
    text-align: center;

    &:after {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.2) 50%, rgba(0, 0, 0, 0));
        transform: rotateZ(60deg) translate(0, 100em);
        animation: ${sheen} 10s forwards infinite;
    }
`;

const HeroHeading = styled.h1`
    margin: 0 0 2.4rem;
    font-size: 5rem;
    font-weight: 300;
    color: #fff;
`;

const HeroSubHeading = styled.h2`
    font-size: 2.4rem;
    font-weight: 300;
    color: #fff;
`;

const HeroLead = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
    color: #fff;
    margin-bottom: 0;
`;

const HeroHr = styled.hr`
    margin: 2.4rem 0;
    border-top: 2px solid rgba(255, 255, 255, 0.25);
`;

const Heading = styled.div`
    margin: 0 0 1rem;
    font-size: 3.2rem;
    font-weight: 300;
    color: #333;
`;
const Home = () => (
    <Fragment>
        <Grid gap="lg">
            <GridCol sm={12}>
                <Hero>
                    <HeroHeading xl><Translate content="Hero.title" /></HeroHeading>
                    <HeroSubHeading><Translate content="Hero.subtitle" /></HeroSubHeading>
                    <HeroHr />
                    <HeroLead><Translate content="Hero.lead" /></HeroLead>
                </Hero>
            </GridCol>
            <GridCol sm={12}>
                <Carousel>
                    <img src="https://picsum.photos/380/200?image=1084" />
                    <img src="https://picsum.photos/380/200?image=1080" />
                    <img src="https://picsum.photos/380/200?image=1069" />
                    <img src="https://picsum.photos/380/200?image=1063" />
                    <img src="https://picsum.photos/380/200?image=1059" />
                    <img src="https://picsum.photos/380/200?image=1043" />
                    <img src="https://picsum.photos/380/200?image=1032" />
                    <img src="https://picsum.photos/380/200?image=1015" />
                </Carousel>
            </GridCol>
        </Grid>
        <Heading><Translate content="Content.heading" /></Heading>
        <Grid gap="lg">
            <GridCol sm={6}>
                <Panel title={<Translate content="Panel.headerTitle1" />}>
                    <Media
                        title={<Translate content="Panel.title" />}
                        titleSize="xl"
                        image={<Icon name="site-page" size="64" style={{ color: '#66bb6a' }} />}
                    >
                        <MediaSection><Translate content="Panel.para1" /></MediaSection>
                        <MediaSection><Translate content="Panel.para2" /></MediaSection>
                    </Media>
                </Panel>
            </GridCol>
            <GridCol sm={6}>
                <Panel title={<Translate content="Panel.headerTitle2" />}>
                    <Media
                        title={<Translate content="Panel.title" />}
                        titleSize="xl"
                        image={<Icon name="user" size="64" style={{ color: '#f57c00' }} />}
                    >
                        <MediaSection><Translate content="Panel.para1" /></MediaSection>
                        <MediaSection><Translate content="Panel.para2" /></MediaSection>
                    </Media>
                </Panel>
            </GridCol>
        </Grid>
    </Fragment>
);

export default Home;
