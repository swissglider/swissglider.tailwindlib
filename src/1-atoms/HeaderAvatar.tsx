export type T_HeaderAvatarProps = {
    avatarMenuListVisible: boolean;
    setAvatarMenuListVisible: (avatarMenuListVisible: boolean) => void;
};

const HeaderAvatar = ({ avatarMenuListVisible, setAvatarMenuListVisible }: T_HeaderAvatarProps) => {
    return (
        <div className="relative text-sm text-gray-100">
            {/* Avatar */}
            <button
                id="userButton"
                className="mr-3 flex items-center focus:outline-none"
                onClick={() => setAvatarMenuListVisible(!avatarMenuListVisible)}
            >
                <img className="mr-4 h-8 w-8 rounded-full" src="http://i.pravatar.cc/300" alt="Avatar of User" />
                <span className="hidden text-gray-100 md:inline-block">Hi, User</span>
                <svg
                    className="h-2 fill-current pl-2 text-gray-100"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 129 129"
                    enableBackground="new 0 0 129 129"
                >
                    <g>
                        <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                    </g>
                </svg>
            </button>
            {/* Avatar User Menu */}
            <div
                id="userMenu"
                className={`${
                    !avatarMenuListVisible ? 'invisible' : ''
                } absolute top-0 right-0 z-30 mt-2 mt-12 min-w-full overflow-auto rounded bg-gray-900 shadow-md`}
            >
                <ul className="list-reset">
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-100 no-underline hover:bg-gray-800 hover:no-underline"
                        >
                            My account
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-100 no-underline hover:bg-gray-800 hover:no-underline"
                        >
                            Notifications
                        </a>
                    </li>
                    <li>
                        <hr className="mx-2 border-t border-gray-400" />
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-100 no-underline hover:bg-gray-800 hover:no-underline"
                        >
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderAvatar;
