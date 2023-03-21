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


  return(
  <ChakraProvider>
            <Center>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' mt="75" mb="75">
  <Card>
    <CardHeader>
      <Heading size='md'> {props.title} </Heading>
    </CardHeader>
    <CardBody>
      <Text> {props.location} </Text>
    </CardBody>
    <CardFooter>
    <Text> {props.salaryRange} </Text>
    </CardFooter>
  </Card>
</SimpleGrid>
</Center>
</ChakraProvider>
    );
}

export default JobSearch;
