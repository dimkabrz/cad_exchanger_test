import {useForm, SubmitHandler} from "react-hook-form";
import {TextField, Button, Box} from "@mui/material";
import {addDoc, collection} from "firebase/firestore";
import {getAuth, signInAnonymously} from "firebase/auth";
import {useEffect} from "react";
import {db} from "../../../firebase.ts";

type FormData = {
    name: string;
    email: string;
    message: string;
};

type ContactUsProps = {
    setIsSent: (value: boolean) => void;
}


export const ContactForm = ({setIsSent} : ContactUsProps) => {

    const auth = getAuth();


    const signUp = async () => {
        try {
            await signInAnonymously(auth)
        } catch (error) {
            console.error("Ошибка анонимного входа:", error);
        }
    }


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>();


    useEffect(() => {
        signUp()
    }, [])

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        if ((auth.currentUser?.isAnonymous)) {
            try {
                await addDoc(collection(db, "contact_info"), {
                    email: data.email,
                    message: data.message,
                    name: data.name
                });
                setIsSent(true);
                console.log(`Thank you for your interest, ${data.name}`);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    maxWidth: 500,
                    mx: "auto",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    background: 'white',
                    border: '1px solid lightgray',
                    borderRadius: 4,
                    marginBottom: '20px',
                }}

            >
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    {...register("name", {required: "Name is required"})}
                />

                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                />

                <TextField
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    {...register("message", {required: "Message is required"})}
                />

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                        mt: 2,
                        height: '47px',

                    }}
                >
                    Submit
                </Button>
            </Box>
        </>


    );
};