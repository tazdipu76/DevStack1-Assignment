
const AuthBtn = () => {
    return (
        <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 hover:text-black">
                Sign In
            </button>

            <button className="px-4 py-2 bg-red-400 rounded-3xl text-white">
                Sign Up
            </button>
        </div>
    );
};

export default AuthBtn;
