import ProfilePitcure from "./ProfilePicture"

const Tweet = (props) => {
    return (
        <div className="">

            <div className="inline-block ">
                <ProfilePitcure />
            </div>

            <div className="align-top inline-block pl-4 pt-1">

                <div className="grid grid-cols-2">
                    <div className=" text-left">

                        <h2 className="dark:text-white font-bold inline-block mr-2 hover:underline text-left">
                            {props.userName}
                        </h2>

                        <h3 className="dark:text-gray-400 inline-block">
                            {props.user} • {props.postingTime}
                        </h3>
                    </div>

                    <div className=" text-right">
                        <h3 className="dark:text-gray-400 ml-10 hover:text-blue-400 hover:bg-blue-950 rounded-full px-1">
                            •••
                        </h3>

                    </div>
                </div>

                <div className="dark:text-white">
                    <p>{props.tweet}</p>
                </div>

            </div>
        </div>
    )
}

export default Tweet