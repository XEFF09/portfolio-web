'use client'

import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { BsTelephone } from 'react-icons/Bs'
import { MdEmail } from 'react-icons/Md'

export default function Contact() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMess] = useState('')
    
    return (
        <div className="container mx-auto px-4">
            <PageHeader header={"Contact"} />
            <div className="grid md:grid-cols-2 gap-6 ">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(name, email, message);
                    }}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white font-semibold mb-3">Name</label>
                        <input 
                            type="text" 
                            name='name' 
                            className="block w-full px-3 py-2 outline-none rounded-md bg-gray-300 focus:bg-white transition-colors duration-300" 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white font-semibold mb-3">Email</label>
                        <input 
                            type="email" 
                            name='email' 
                            className="block w-full px-3 py-2 outline-none rounded-md bg-gray-300 focus:bg-white transition-colors duration-300" 
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white font-semibold mb-3">Message</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            className="block w-full px-3 py-2 outline-none bg-gray-300 focus:bg-white transition-colors duration-200 rounded-md"
                            onChange={(e) => {
                                setMess(e.target.value);
                            }}
                            defaultValue={ message }
                        />
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="bg-amber-500 px-3 py-2 rounded-md text-white font-semibold hover:scale-95 duration-300">done</button>
                    </div>
                </form>
                <div className="text-white font-semibold">
                    <div>
                        Thatpong Wongchaita 
                    </div>
                    <div className="mt-3 flex gap-3">
                        <BsTelephone /> 
                        <a href="tel:0831234567">0868886966</a>
                    </div>
                    <div className="mt-3 flex gap-3">
                        <MdEmail /> 
                        <a href="mailto:wongchaita03@gmail.com">wongchaita03</a>
                    </div>
                </div>
            </div>
        </div>
    )
}