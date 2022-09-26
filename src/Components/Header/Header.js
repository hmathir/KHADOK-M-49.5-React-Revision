
const Header = () => {
    return (
        <div>
            <div className="navbar bg-gray-300 border border-black px-20">
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost normal-case text-xl border border-black rounded-xl">KHADOK</a>
                </div>
                <div className="flex items-center gap-2">
                    <div>

                    <ul className="flex space-x-4 p-3 rounded-md shadow bg-base-100 w-52">
                            <li>
                                <a href="/" className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a href="/">Settings</a></li>
                            <li><a href="/">Logout</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;