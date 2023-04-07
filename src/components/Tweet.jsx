import ProfilePitcure from "./ProfilePicture"
import { FaRegComment, FaRetweet, FaRegHeart, FaRegChartBar, FaShareSquare } from "react-icons/fa";

const Tweet = (props) => {
    return (
        <div className="grid grid-cols-10 max-w-xl border dark:border-gray-800 p-3">

            <div className="col-span-1 ">
                <ProfilePitcure />
            </div>

            <div className="col-span-9 pl-4 pt-1">

                <div className="grid grid-cols-2">

                    <div className=" text-left">

                        <h2 className="dark:text-white font-bold inline-block mr-2 hover:underline text-left">
                            {props.userName}
                        </h2>

                        <h3 className="dark:text-gray-400 inline-block">
                            {props.user} • {props.postingTime}
                        </h3>
                    </div>

                    <div className="w-full text-right">
                        <h3 className="dark:text-gray-400 hover:text-blue-400 rounded-full px-1 pb-1">
                            •••
                        </h3>

                    </div>

                </div>

                <div className="dark:text-white m-0 w-full text-left pr-4">
                    <p>{props.content}</p> 
                </div>
                <div className="grid grid-cols-5 dark:text-gray-400 mt-4 text-center">
                    <FaRegComment className="hover:text-blue-500 hover:bg-blue-950 rounded-full"/> 
                    <FaRetweet className="dark:text-gray-600 text-xl"/> 
                    <FaRegHeart className="hover:text-pink-700"/>
                    <FaRegChartBar className="hover:text-blue-500 hover:bg-blue-950 rounded-full"/>
                    <FaShareSquare className="hover:text-blue-500 hover:bg-blue-950 rounded-full"/>
                </div>

            </div>



        </div>
    )
}

export default Tweet