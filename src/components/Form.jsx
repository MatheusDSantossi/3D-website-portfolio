import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FormProvider, useForm } from "react-hook-form";
import { motion } from "framer-motion";

import Input from "./Input"

const Form = () => {
    const formRef = useRef();

    const methods = useForm();

    const { handleSubmit, register, reset } = methods;

    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);

        emailjs.send(
            "service_dfwcdlr", "template_ezvldob",
            {
                from_name: data.name,
                to_name: "Matheus",
                from_email: data.email,
                to_email: "matheusdsantosr.si@gmail.com",
                message: data.message,
            },
            "oaoj7C6T5_1hNgRnz"
        )
            .then(() => {
                setLoading(false);
                alert("Thank you I'll get back to you as soon as possible!")

                reset(); // Reset form fields
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setLoading(false);
                alert("Failed to send email. Please try again later!");
            });
    }

    return (
        <FormProvider {...methods}>
            <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)} // Using react-hook-form's handleSubmit
                noValidate
                className='mt-12 flex flex-col gap-8'
            >

                <Input
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">Your message</span>
                    <textarea
                        rows="7"
                        name="message"
                        {...register("message", {
                            required: {
                                value: true,
                                message: "Please enter a message"
                            },
                        })}
                        placeholder="What do you want to say?"
                        className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${methods.formState.errors.message} ? "border-red-500": ""}`}
                    />
                    {methods.formState.errors.message && (
                        <motion.p
                            className="flex items-center gap-1 px-2 font-semibold text-red-500"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.5 }}
                        >
                            {methods.formState.errors.message.message}
                        </motion.p>
                    )}
                </label>
                <button
                    type='submit'
                    className='violet-gradient py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-secondary-light'
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form >
        </FormProvider >
    )
}

export default Form;
