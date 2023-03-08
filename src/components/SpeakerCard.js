function Session(props) {
    return (
        <span className="session w-100">
            {props.title}{" "} <strong>Room:{props.room}</strong>
        </span>
    );
}

function Sessions(props) {
    return (
        /*props.sessions.map(function (localSession) {
            return (
                <div className="sessionBox card h-250">
                    <Session title={localSession.title} room={localSession.room.name} />
                </div>);
        })*/

        <div className="sessionBox card h-250">
            <Session title={props.sessions[0].title} room={props.sessions[0].room.name} />
        </div>
    );
}

function SpeakerImage(props) {
    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                className="contain-fit"
                src={`/images/speaker-${props.id}.jpg`}
                width="300"
                alt={`${props.first} ${props.last}`}
            />
        </div>);
}

function SpeakerFavorite({ favorite, onFavoriteToggle }) {
    return (
        <div className="action padB1">
            <span onClick={onFavoriteToggle}>
                <i className={
                    favorite === true ?
                        "fa fa-star orange" :
                        "fa fa-star-o orange"
                } />{" "}Favorite{" "}
            </span>
        </div>
    );
}

function SpeakerInfo({ first, last, bio, company, twitterHandle, favorite, onFavoriteToggle }) {
    return (
        <div>
            <div className="speaker-info">
                <div className="d-flex justify-content-between mb-3">
                    <h3 className="text-truncate w-200">
                        {first} {last}
                    </h3>
                </div>
            </div>
            <SpeakerFavorite favorite={favorite} onFavoriteToggle={onFavoriteToggle} />
            <div>
                <p className="card-description">{bio}</p>
                <div className="social d-flex flex-row mt-4">
                    <div className="company">
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SpeakerCard({ speaker, showSessions, onFavoriteToggle }) {
    const { id, first, last, sessions } = speaker;

    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
                <SpeakerImage id={id} first={first} last={last} />
                <SpeakerInfo {...speaker} onFavoriteToggle={onFavoriteToggle} />
            </div>
            { showSessions === true ?
                <Sessions sessions={sessions} /> :
                null
            }
        </div>
    );
}

export default SpeakerCard;