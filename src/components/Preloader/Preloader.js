const Preloader = ({isPreload}) => {
    return (
        <div className={`'preloader' ${isPreload ? '' : 'preloader_hidden'}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader;