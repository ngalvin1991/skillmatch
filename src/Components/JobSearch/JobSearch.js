import React from "react";
import {
    ChakraProvider,
    Center,
    SimpleGrid,
    Card,
    CardHeader,
    Heading,
    CardBody,
    CardFooter,
    Button,
    Text,
    Divider,
} from "@chakra-ui/react";

function JobSearch(props) {
    console.log(props.title);
    console.log(props.location);
    console.log(props.salaryRange);
    const [modalShow, setModalShow] = React.useState(false);
    function handleShow() {
        setModalShow(false);
        let modalEl = document.getElementById("modal-show");
        modalEl.style.visibility = "visible"
    }

    return (
        <ChakraProvider>
              <Divider orientation='horizontal' borderColor="purple.500" mt="75"/>
            <Center>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' mt="75" mb="75">
                    <Card>
                        <CardHeader>
                            <Heading size='md'> {props.title} </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text> {props.location} </Text>
                             <Text> {props.salaryRange} </Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme="purple" onClick={handleShow} >View More...</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Center>
        </ChakraProvider>
    );
}

export default JobSearch;
