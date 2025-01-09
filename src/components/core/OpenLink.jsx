const OpenLink = ({ redirectURL, LogoImage }) => {
    return (
        <div>
            <a href={ redirectURL } target="_blank">
                <img src={ LogoImage } className="logo" alt="Logo"/>
            </a>
        </div>
    );
};

export default OpenLink;