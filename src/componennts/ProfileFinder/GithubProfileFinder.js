import { Button, Center, Container, HStack, Input, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import GitHubProfileCard from '../GitHubProfileCard'

const GithubProfileFinder = () => {
    const [ userName, setUserName] = useState('prosanjeev')
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
   
    const searchHandle = () =>{
        fetchData();
        setUserName('')
    }


    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${userName}`);
            const data = await response.json();
           
            if (data) {
                setUserData(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMessage(e.errorMessage);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1>Loading data ! Please wait</h1>;
      }
    if (errorMessage) {
        return <h1>{errorMessage}</h1>;
      }

    return (
        <Container >
            <Center p={10}>
                <Stack>
                    <Text color='blue' fontSize='34px' letterSpacing={2} fontWeight={700} align='center'>Find Github Profile</Text>
                    <Text  mb='6' fontSize='18px'  align='center'>Are you looking for GitHub profiles and view basic information about users? </Text>
                    <HStack mb={5}>
                        <Input boxShadow='sm'
                        placeholder="Search Github Username..."
                        value={userName}
                        onChange={(e)=> setUserName(e.target.value)}
                        
                        />
                        <Button onClick={searchHandle} bg='blue' color='white' boxShadow='sm'>Search</Button>
                    </HStack>
                    {userData !== null ? <GitHubProfileCard user={userData} /> : null}
                   
                </Stack>
            </Center>
        </Container>
    )
}

export default GithubProfileFinder