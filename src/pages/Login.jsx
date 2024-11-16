import { Link } from "react-router-dom";

function Login(){

    return(
        <>
        <Link to={'/'}>
            <button   className=" text-white border rounded-md px-4 py-2 absolute top-10  right-10">Go Back</button>
        </Link>
        <section class="bg-black text-white min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">

        <div class="flex justify-center mb-10">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" class="h-12"/>
        </div>


        <form>
            <div class="mb-6">
                <label for="email" class="block text-sm font-medium">Email or Phone Number</label>
                <input type="email" id="email" name="email" class="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500" placeholder="Enter your email"/>
            </div>

            <div class="mb-6">
                <label for="password" class="block text-sm font-medium">Password</label>
                <input type="password" id="password" name="password" class="w-full mt-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500" placeholder="Enter your password"/>
            </div>

            <button type="submit" class="w-full py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition">Sign In</button>
        </form>


        <div class="mt-4 text-sm text-center">
            <a href="" class="text-gray-400 hover:underline">Forgot Password?</a>
        </div>
        <div class="mt-2 text-sm text-center">
            <span>New to Netflix? </span><a href="" class="text-red-500 hover:underline">Sign up now</a>
        </div>
    </div>
    </section>


        </>
    )
}

export default Login;