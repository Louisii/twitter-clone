import { FaTwitter, FaHome, FaHashtag, FaBell, FaRegEnvelope, FaBookmark, FaTwitterSquare, FaUserAlt, FaEllipsisH } from "react-icons/fa";

const Menu = () => {

    return(
        <>
            <div className="dark:text-white">
            <FaTwitter className="mt-0.5 text-3xl mb-8"/>
                <div className="grid grid-cols-6 mb-8">
                    <FaHome className="mt-0.5 text-2xl"/>
                    <h1 className="col-span-5 dark:text-white font-extrabold text-xl text-left ml-3">Home</h1>
                </div>
                <div className="grid grid-cols-6 mb-8">
                    <FaHashtag className="mt-0.5 text-2xl"/>
                    <h1 className="col-span-5 dark:text-white font-semibold text-xl text-left ml-3">Explore</h1>
                </div>
                <div className="grid grid-cols-6 mb-8">
                    <FaBell className="mt-0.5 text-2xl"/>
                    <h1 className="col-span-5 dark:text-white font-semibold text-xl text-left ml-3">Notifications</h1>
                </div>
                <div className="grid grid-cols-6 mb-8">
                    <FaRegEnvelope className="mt-0.5 text-2xl"/>
                    <h1 className="col-span-5 dark:text-white font-semibold text-xl text-left ml-3">Message</h1>
                </div>
                <div className="grid grid-cols-6 mb-8">
                    <FaBookmark className="mt-0.5 text-2xl"/>
                    <h1 className="col-span-5 dark:text-white font-semibold text-xl text-left ml-3">Bookmarks</h1>
                </div>
                <div className="grid grid-cols-6 mb-8">
                    <FaTwitterSquare className="mt-0.5 text-2xl"/>
                    <h1 className="col-span-5 dark:text-white font-semibold text-xl text-left ml-3">Twitter Blue</h1>
                </div>
                <div className="grid grid-cols-6 mb-8">
                    <FaUserAlt className="mt-0.5 text-2xl"/>
                    <h1 className="col-span-5 dark:text-white font-semibold text-xl text-left ml-3">Profile</h1>
                </div>
                <div className="grid grid-cols-6 mb-8">
                    <FaEllipsisH className="mt-0.5 text-2xl"/>
                    <h1 className="col-span-5 dark:text-white font-semibold text-xl text-left ml-3">More</h1>
                </div>
            </div>
        </>
    )

}

export default Menu