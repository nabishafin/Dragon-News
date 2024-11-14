import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold'>Login With</h1>
            <div>
                <button className="flex items-center justify-center gap-2 border-2 border-[#3B599C] p-2 w-full mt-5 text-[#58A7DE] rounded-md">
                    <FaGoogle /> Login With Google
                </button>

                <button className="flex items-center justify-center gap-2 border-2 border-[black] p-2 w-full mt-3 rounded-md">
                    <FaGithub /> Login With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;