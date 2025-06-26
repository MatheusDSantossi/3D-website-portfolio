import { AnimatePresence, motion } from "framer-motion";
import { useFormContext } from "react-hook-form";

const Input = ({ label, type, id, name, placeholder }) => {
    const { 
        register, 
        formState: { errors }, 
    } = useFormContext();

    const error = errors[name];

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="flex flex-col">
                    <span className="text-primary-light dark:text-white font-medium mb-4">{label}</span>
                </label>
                <AnimatePresence mode="wait" initial={false}>
                {error && (
                    <motion.p
                        className="flex items-center gap-1 px-2 font-semibold text-red-500"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5 }}
                    >
                        {error.message}
                    </motion.p>
                )}
                </AnimatePresence>
            </div>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                {...register(name, {
                    required: {
                        value: true,
                        message: `${label} is required*`
                    },
                })}
                className={`bg-primary-light dark:bg-tertiary py-4 px-6 placeholder:text-primary/70 dark:placeholder:text-secondary text-primary dark:text-white rounded-lg outline-none border-none font-medium ${error ? "border-red-500" : ""}`}
            />
        </div>
    )
}

const InputError = ({ message }) => {
    return (
        <motion.p className="flex items-center gap-1 px-2 font-semibold text-red-500" {...framer_error}>
            {message}
        </motion.p>
    )
}

const framer_error = {
    initial: { opacity: 0, y: 10},
    animate: { opacity: 1, y: 0},
    transition: { duration: 0.5 },
    exit: { opacity: 0, y: 10},
}

export default Input;
