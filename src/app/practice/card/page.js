import Image from "next/image";

export default function Card() {
    return (
        <main className="p-[32px] w-[600px] h-[350px] flex flex-row justify-between bg-cyan-500 border-solid border-gray-800 border-4 rounded-3xl">
            <div class="flex flex-col justify-between">
                <p class="font-bold text-2xl">Edward Lin</p>
                <p>edwardlin0302@gmail.com</p>
                <a
                    href="https://www.facebook.com/profile.php?id=100012803371797"
                    target="_blank"
                    class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg flex justify-center"
                >
                    Facebook
                </a>
            </div>
            <div>
                <img
                    class="w-72 h-72 object-cover rounded-full"
                    src="https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg"
                ></img>
            </div>
        </main>
    );
}
