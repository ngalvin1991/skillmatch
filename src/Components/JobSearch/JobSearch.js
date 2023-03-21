import React from "react";
import { ChakraProvider, Center, SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Button, Text } from "@chakra-ui/react";

function JobSearch({modalShow, setModalShow}) {
    function handleShow() {
        setModalShow(false);
        let modalEl = document.getElementById("modal-show");
        modalEl.style.visibility = "visible"
      }
    return(
        <ChakraProvider>
            <Center>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' mt="75" mb="75">
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button onClick={handleShow} >View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button onClick={handleShow} >View here</Button>
    </CardFooter>
  </Card> 
</SimpleGrid>
</Center>
</ChakraProvider>
    );
}

export default JobSearch;
