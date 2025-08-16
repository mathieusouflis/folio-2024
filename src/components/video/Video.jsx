const Video = ({url, className=""}) => {
    return <>
        <iframe 
        src={`${url}?autoplay=1&loop=1&muted=1&controls=0&quality=auto&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1`} 
        className={"pointer-events-none" + className}>
        </iframe> 
    </>
}

export default Video