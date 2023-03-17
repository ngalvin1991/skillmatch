import { ChakraProvider, Input, Button, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";

const Contact = () => {
    const [formStatus, setFormStatus] =
        React.useState('Send')

    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('On the way...')
        const { name, email, message } =
            e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <ChakraProvider>
            <div className="container mt-5">
                <h2 className="mb-3">Contact Us!</h2>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        message: "",
                    }}
                    onSubmit={async (values) => {
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}>
                    <Form onSubmit={onSubmit}>
                        <FormControl>
                            <div className="mb-3">
                                <FormLabel className="form-label" htmlFor="name">
                                    Name
                                </FormLabel>
                                <Input
                                    type="text"
                                    id="name"
                                    required
                                    variant="filled"
                                    placeholder="Please Enter Your Full Name"
                                    _placeholder={{ opacity: 1, color: 'purple.500' }}
                                />
                            </div>
                        </FormControl>
                        <div className="mb-3">
                            <FormLabel className="form-label" htmlFor="email">
                                Email
                            </FormLabel>
                            <Input
                                type="email"
                                id="email"
                                required
                                variant="filled"
                                placeholder="Please Enter Your Email Address"
                                _placeholder={{ opacity: 1, color: 'purple.500' }}
                            />
                        </div>

                        <div className="mb-3">
                            <FormLabel className="form-label" htmlFor="message">
                                Message
                            </FormLabel>
                            <Textarea 
                            id="message"
                            variant="filled"
                            placeholder="We would love to hear from you. Leave us a message!"
                            _placeholder={{ size: "lg", opacity: 1, color: 'purple.500' }}
                            />
                        </div>

                        <Button colorScheme="purple" type="submit">
                            {formStatus}
                        </Button>

                    </Form>
                </Formik>
            </div>
        </ChakraProvider>
    )
}

export default Contact 
