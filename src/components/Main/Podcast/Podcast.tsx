import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Container, Row, Col} from 'react-bootstrap';
import Arrow from '../../../assets/images/arrow-right.svg';
import PodcastImage from '../../../assets/images/podcast-image.jpeg';
import GooglePodcastsLogo from '../../../assets/images/google-podcasts-logo.png';
import PocketCastsPodcastLogo from '../../../assets/images/pocketcasts-podcast-logo.webp';
import RadioPublicPodcastLogo from '../../../assets/images/radiopublic-podcast-logo.png';
import SpotifyPodcastLogo from '../../../assets/images/spotify-podcast-logo.webp';
import { isMobile } from 'react-device-detect';

interface Props {
  id: string;
}

function Podcast(props: Props) {
    return (
        <div id={props.id} className="pb-5">
            <Row className="justify-content-center">
                <Col lg={6} md={8} sm={10} xs={11}>
                    <h3 className="text-turq">Stay Connected</h3>
                    <a href="https://open.spotify.com/show/2gX38ig5BhHgdzY8NT4uZ6?si=ab0a787af61245a7" target="_blank" rel="noopener noreferrer">
                    <h4 className="text-peacock mono discordinvite">
                        Check out our podcast <img src={Arrow} width={isMobile ? "41px" : "72px"} alt="Arrow indicating where podcast can be found" />
                    </h4>
                    </a>
                    <p className="mt-4 mb-4">Keep up with Girls Who Code @ UVA and hear from guest speakers about navigating the world of STEM as a woman.</p>
                    
                </Col>
            </Row>
            <Row className="justify-content-center mb-5">
                <Col lg={3} md={4} sm={5} xs={5}>
                    <img src={PodcastImage} width={isMobile ? "140px" : "257px"} alt="title cover of podcast" />
                </Col>
                <Col lg={3} md={4} sm={5} xs={5} className="justify-content-center">
                    <Row className="justify-content-center font-weight-bold mt-4">WHERE TO LISTEN</Row>
                    <Row className="justify-content-center mt-2">
                        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81NjM0OTM3OC9wb2RjYXN0L3Jzcw==">
                            <img src={GooglePodcastsLogo} width={isMobile ? "30px" : "75px"} alt="google podcast logo linked to gwc podcast on that platform" className="circleImg mr-2" />
                        </a>
                        <a href="https://open.spotify.com/show/2gX38ig5BhHgdzY8NT4uZ6">
                            <img src={SpotifyPodcastLogo} width={isMobile ? "30px" : "75px"} alt="spotify logo linked to gwc podcast on that platform" className="mr-2" />
                        </a>
                        <a href="https://pca.st/sv13qma1">
                            <img src={PocketCastsPodcastLogo} width={isMobile ? "30px" : "75px"} alt="pocket cast logo linked to gwc podcast on that platform" className="mr-2" />
                        </a>
                        <a href="https://radiopublic.com/girls-hoo-code-the-podcast-WdnRkQ">
                            <img src={RadioPublicPodcastLogo} width={isMobile ? "30px" : "75px"} alt="radiopublic logo linked to gwc podcast on that platform" className="mr-2" />
                        </a>
                    </Row>
                </Col>
            </Row>
        </div>
        // <Row id={props.id}>
        //     <Container>
                
        //     </Container>
        //     <Row className="justify-content-center">
        //         <Col lg={6} md={8} sm={10} xs={11}>
        //             <h3 className="text-turq">Stay Connected</h3>
        //             <a href="https://discord.gg/D8knkzNM8E" target="_blank" rel="noopener noreferrer">
        //             <h4 className="text-peacock mono discordinvite">
        //                 Check out our podcast <img src={Arrow} width={isMobile ? "41px" : "72px"} alt="Arrow indicating where podcast can be found" />
        //             </h4>
        //             </a>
        //             <p className="mt-4 mb-4">Keep up with Girls Who Code @ UVA and hear from guest speakers about navigating the world of STEM as a woman.</p>
                    
        //         </Col>
        //     </Row>
        //     <Row className="justify-content-center mb-5">
        //         <Col lg={3} md={4} sm={5} xs={5}>
        //             <img src={PodcastImage} width={isMobile ? "41px" : "257px"} alt="Arrow indicating where podcast can be found" />
        //         </Col>
        //         <Col lg={3} md={4} sm={5} xs={5}>
        //             <img src={PodcastImage} width={isMobile ? "41px" : "257px"} alt="Arrow indicating where podcast can be found" />
                        
        //         </Col>
        //     </Row>
        // </Row>
    );
}

export default Podcast;
