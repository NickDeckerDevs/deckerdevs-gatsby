import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';


import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import Hero from "../components/Hero";
import TwoColumn from "../components/TwoColumn";
import ThreeColumn from "../components/ThreeColumn";
import FullCta from "../components/FullCta";

class Homepage extends React.Component {
    render() {
        const siteTitle = "HubSpot Development | deckerdevs";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <Hero id="home-hero" maxWidth="600" headline="HubSpot development for marketers and agencies" subHeadline="If you are in need of HubSpot development, we have two paths for you to choose. These options are tailored to the type of business you work in." urls={[ '#agencies', '#marketers' ]} buttonText={[ 'Agency Path', 'Marketer Path' ]} />

                <TwoColumn id="marketers" image="pic05.jpg" alt="easy HubSpot modules" headline="We provide marketers with modules they can easily swap out with other modules to mix and match their website pages" subHeadline="Change your website pages with ease, eliminiating the need to have developers make simple site updates" content="Modules are king in HubSpot and I've seen many leading agencies doing them wrong." swap="true" />

                <TwoColumn id="agenices" image="pic04.jpg" alt="whatever this is" headline="Why do agencies" content="Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum." listItems={['This is something that is amazing', 'This is another reason agencies love working with us', 'because kanye said so']} />

                <ThreeColumn id="remarkables" columns={[1,2,3]} headline="This is for real yall" images={['pic03.jpg', 'pic04.jpg', 'pic02.jpg']} titles={['Developer AMA', 'Developer Day', 'Award Winning']} content={[ 'nicholas was the only non HubSpot employee to be apart of this', 'nicholas has continuelly spoke at developer day', 'again, kanye west told him to do this, so you sould too']} ctas={[ '/agenices', '/marketers', '/contact' ]} />

                <FullCta id="bofu" headline="So you think you can fly?" subHeadline="I just touched the sky" urls={[ '/contact', '/blog' ]} buttonText={[ 'speak to kanye', 'read more about kanye' ]} />
            </Layout>
        );
    }
}

export default Homepage;
