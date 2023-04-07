import { FaTwitter, FaHome, FaHashtag, FaBell, FaRegEnvelope, FaBookmark, FaTwitterSquare, FaUserAlt, FaEllipsisH } from "react-icons/fa";

const Menu = () => {

    const menu = [
        {
            icon: <FaHashtag className="mt-0.5 text-2xl" />,
            title: "Explore"
        },
        {
            icon: <FaBell className="mt-0.5 text-2xl" />,
            title: "Notifications"
        },
        {
            icon: <FaRegEnvelope className="mt-0.5 text-2xl" />,
            title: "Message"
        },
        {
            icon: <FaBookmark className="mt-0.5 text-2xl" />,
            title: "Bookmarks"
        },
        {
            icon: <FaTwitterSquare className="mt-0.5 text-2xl" />,
            title: "Twitter Blue"
        },
        {
            icon: <FaUserAlt className="mt-0.5 text-2xl" />,
            title: "Profile"
        },
        {
            icon: <FaEllipsisH className="mt-0.5 text-2xl" />,
            title: "More"
        },
    ]

    return (
        <>
            <div className="dark:text-white">
                <FaTwitter className="mt-0.5 text-3xl mb-8" />

                <div className="mx-2">
                <div className="grid grid-cols-6 mb-8">
                    <FaHome className="mt-0.5 text-2xl" />
                    <h1 className="col-span-5 dark:text-white font-extrabold text-xl text-left ml-3">Home</h1>
                </div>

                {
                    menu.map((menuItem) => (
                        <div className="grid grid-cols-6 mb-8">
                            {menuItem.icon}
                            <h1 className="col-span-5 dark:text-white font-semibold text-xl text-left ml-3">{menuItem.title}</h1>
                        </div>
                    ))
                }
                </div>
                <div>
                    <button className="bg-blue-500 w-full mr-2 rounded-full p-2">Tweet</button>
                </div>

            </div>
        </>
    )

}

export default Menu