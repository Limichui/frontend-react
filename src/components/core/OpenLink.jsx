const OpenLink = ({ redirectURL, LogoImage }) => {
    return (
        <span>
            <a href={ redirectURL } target="_blank">
                <img src={ LogoImage } className="logo" alt="Logo"/>
            </a>
        </span>
    );
};

export default OpenLink;