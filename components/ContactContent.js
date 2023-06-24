import React, { useState } from 'react'
import validator from 'validator'

function ContactContent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    //Form validation error state
    const [errors, setErrors] = useState({})

    //success and failure states
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)

    const handleValidation = () => {
        let tempErrors = {}
        let isValid = true //default

        if(validator.isEmpty(name)){
            tempErrors['name'] = true
            isValid = false
        }else if(validator.isEmpty(email)){
            tempErrors['email'] = true
            isValid = false
        }else if(validator.isEmail(email) === false){
            tempErrors['emailValid'] = true
            isValid = false
        }else if(validator.isEmpty(message)){
            tempErrors['message'] = true
            isValid = false
        }

        setErrors({...tempErrors})
        console.log('errors', errors)
        return isValid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let isValid = handleValidation()

        if(isValid){
            const res = await fetch('/api/sendgrid', {
                body: JSON.stringify({name: name, email: email, message: message}),
                headers: {"Content-Type": "application/json"},
                method: "POST"
            })

            const error = await res.json()
            if(error.status !== 'Ok'){
                console.log(error)
                setFailure(true)
                setSuccess(false)
                return
            }else{
                setFailure(false)
                setSuccess(true)
            }
        }
    }

    return (
        <div className='bg-[#f4fdee] py-14 px-8 md:px-32 lg:px-72 md:mt-16 lg:mt-20 w-full'>
            <h4 className='text-center font-bold text-black text-xl md:mt-[5vh] lg:mt-[17vh] pt-7'>leave a message</h4>

            <div className='flex justify-center mt-9'>
                <form className='w-96' onSubmit={handleSubmit}>
                    {errors?.name && (
                            <p className='text-red-500 my-2'>Name cannot be empty!</p>
                    )}
                    <input 
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        className="mb-7 appearance-none bg-transparent border-b-2 border-slate-400 w-full text-black  mr-3 py-1 px-2 text-lg focus:outline-none focus:border-black" placeholder="Your Name" aria-label="Full name"
                    />

                    {errors?.email && (
                        <p className='text-red-500 my-2'>Email cannot be empty!</p>
                    )}
                    {errors?.emailValid && (
                        <p className='text-red-500 my-2'>Please use valid email address!</p>
                    )}
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        className="mb-7 appearance-none bg-transparent border-b-2 border-slate-400 w-full text-black  mr-3 py-1 px-2 text-lg focus:outline-none focus:border-black" placeholder="Your Email" aria-label="Email"
                    />

                    {errors?.message && (
                        <p className='text-red-500 mt-1'>Message cannot be empty!</p>
                    )}
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} 
                        rows='8'
                        className="mb-7 appearance-none bg-transparent border-b-2 border-slate-400 w-full text-black text-lg mr-3 py-1 px-2 focus:outline-none focus:border-black" type="text" placeholder="Your message..." aria-label="Message" 
                    />

                    {success === true && <p className='text-green-500 my-2'>Your Message has been sent!</p>}
                    {failure === true && <p className='text-red-500 my-2'>There is probably a network issue. Please try again later!</p>}

                    <div className='mb-4 flex justify-center'>
                        <button className='bg-stone-800 hover:bg-black shadow-md hover:shadow-lg shadow-gray-500/60 hover:shadow-gray-500/70 border-2 border-black text-white text-semibold text-lg py-1 px-2 rounded'>Send Message!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactContent