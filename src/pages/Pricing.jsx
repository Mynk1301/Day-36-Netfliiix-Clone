import { Link } from "react-router-dom";

function Pricing(){

    return(
        <>


        <section class="flex items-center justify-center mt-10 pb-10 relative">
        <Link to={'/'}>
            <button   className=" text-white border rounded-md px-4 py-2 absolute top-0  right-20">Go Back</button>
        </Link>

    <div class="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto" id="pricing">
        <h3 class="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">Pay once, use forever</h3>
        <div class="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
                <div class="flex items-center justify-between gap-x-4">
                    <h3 id="tier-standard" class="text-white text-2xl font-semibold leading-8">Basic</h3>
                </div>
                <p class="mt-4 text-base leading-6 text-white ">1 license for only 1 activation</p>
                <p class="mt-6 flex items-baseline gap-x-1">
                    <span class="line-through text-2xl font-sans text-white/70 ">$39</span><span
                        class="text-5xl font-bold tracking-tight text-white ">$29</span>
                </p>
                <a href=""
                    aria-describedby="tier-standard"
                    class="text-red-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >Buy now</a>
                <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <li class="flex gap-x-3 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-red-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>One Month subscription
                    </li>
                    <li class="flex gap-x-3 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-red-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Resolution : 720p
                    </li>
                    <li class="flex gap-x-3 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-red-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>No of devies : 1
                    </li>
                </ul>
            </div>
            <div class="ring-2 ring-red-600 rounded-3xl p-8 xl:p-10">
                <div class="flex items-center justify-between gap-x-4">
                    <h3 id="tier-extended" class="text-red-600 text-2xl font-semibold leading-8">Premium</h3>
                    {/* <p class="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-red-600">
                        Most popular</p> */}
                </div>
                <p class="mt-4 text-base leading-6 text-white">1 license for up to 3 activations</p>
                <p class="mt-6 flex items-baseline gap-x-1">
                    <span class="line-through text-2xl font-sans text-white/70">$59</span><span
                        class="text-5xl font-bold tracking-tight text-white">$39</span>
                </p>
                <a href=""
                    aria-describedby="tier-extended"
                    class="bg-red-500 text-white shadow-sm hover:bg-red-600 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >Buy now</a>
                <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <li class="flex gap-x-3 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-red-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Six Month subscription
                    </li>
                    <li class="flex gap-x-3 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-red-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Resolution : 2k
                    </li>
                    <li class="flex gap-x-3 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                            class="h-6 w-5 flex-none text-red-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>No of devices : 4
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>



        </>
    )
}

export default Pricing;