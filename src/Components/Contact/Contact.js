import { ChakraProvider, VStack, Heading, Input, Button, FormControl, Textarea, Divider } from "@chakra-ui/react";
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
            <Divider orientation='horizontal' borderColor="purple.500" />
            <div className="container mt-5">
                <Heading as="h2" className="mb-3" color="purple.500">Contact Us!</Heading>
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
                        <VStack>
                            <FormControl isRequired>
                                <div className="mb-3">
                                    <Input
                                        type="text"
                                        id="name"

                                        variant="filled"
                                        width="70%"
                                        focusBorderColor='pink.400'
                                        placeholder="Please Enter Your Full Name"
                                        _placeholder={{ opacity: 1, color: 'purple.500' }}
                                    />
                                </div>
                            </FormControl>
                            <FormControl isRequired>
                                <div className="mb-3">
                                    <Input
                                        type="email"
                                        id="email"
                                        variant="filled"
                                        width="70%"
                                        focusBorderColor='pink.400'
                                        placeholder="Please Enter Your Email Address"
                                        _placeholder={{ opacity: 1, color: 'purple.500' }}
                                    />
                                </div>
                            </FormControl>
                            <FormControl>
                                <div className="mb-3">
                                    <Textarea
                                        id="message"
                                        variant="filled"
                                        width="70%"
                                        focusBorderColor='pink.400'
                                        placeholder="We would love to hear from you. Leave us a message!"
                                        _placeholder={{ size: "lg", opacity: 1, color: 'purple.500' }}
                                    />
                                </div>
                            </FormControl>

                            <Button colorScheme="purple" type="submit">
                                {formStatus}
                            </Button>
                        </VStack>
                    </Form>
                </Formik>
            </div>
        </ChakraProvider>
    )
}

export default Contact 
