import React from 'react';

function ContactForm() {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's Connect!</h2>
                    <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
                </div>
                <dotlottie-player
                    src="https://lottie.host/3054fc7a-4ba5-42fb-934c-cab54fcf68e7/2WsaotECqV.json"
                    background="transparent"
                    border="2px solid black"
                    speed="1"
                    loop
                    autoplay
                    style={{ width: '95%', height: '95%' }}
                ></dotlottie-player>
            </div>
            <form noValidate className="space-y-6 mt-8">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 border rounded border-gray-300 dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 border rounded border-gray-300 dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 border rounded border-gray-300 dark:bg-gray-100"></textarea>
                </div>
                <button 
                    type="submit" 
                    className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-indigo-500 text-gray-50 hover:bg-indigo-600 transition duration-200"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
