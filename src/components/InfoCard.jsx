import "./InfoCard.css"
const InfoCard =(props)=>{
    const ProfileInfo = props.data;
    // console.log(ProfileInfo);
    return(
        <>
            <div id="Container">
                <div className="ImageContainer">
                    <img className="image" src={ProfileInfo.img}/>
                </div>
                <div className="InfoContainer">
                    <div className="NameAndTitle">
                        <h2>{ProfileInfo.name}</h2>
                        <h4>{ProfileInfo.title}</h4>
                    </div>
                    <div className="Bio">
                        <p>{ProfileInfo.bio}</p>
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default InfoCard;