//import Logo from '../components/Home/Logo.jsx';
import OpenLink from '../components/core/OpenLink.jsx';

import Body from '../components/Home/Body.jsx';
import Footer from '../components/Home/Footer.jsx';

import viteLogo from "../assets/vite.svg"
import reactLogo from "../assets/react.svg"
import githubLogo from "../assets/github.svg"
const Home = () => {
    return (
        <div>
            <div>
                <OpenLink
                    redirectURL = "https://vite.dev"
                    LogoImage = {viteLogo}
                />
                <OpenLink
                    redirectURL = "https://react.dev"
                    LogoImage = {reactLogo}
                />
                <OpenLink
                    redirectURL = "https://github.com/Limichui/frontend-react"
                    LogoImage = {githubLogo}
                />
            </div>
            <Body />
            <Footer />
        </div>
    );b
};

export default Home;