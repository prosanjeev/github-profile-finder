import { Box, Card, HStack, Image, Link, Text } from '@chakra-ui/react';

const GitHubProfileCard = ({ user }) => {

    const { login, name, avatar_url, bio, followers, following } = user

    return (
        <Card w="450px" borderRadius="lg" overflow="hidden" boxShadow="md" align='center' p={5}>

            <HStack >

                <Image src={avatar_url} alt={`${name}'s avatar`} boxSize={40} borderRadius='50%' />

                <Box p="6">
                    <Text fontWeight="bold" fontSize="xl" >{name}</Text>
                    <Text fontSize="sm" color="gray.600">@{login}</Text>

                    <Box d="flex" mt="2">
                        <HStack mb={5}>
                            <HStack>
                                <Text fontWeight="bold">{followers}</Text>
                                <Text fontSize="sm" color="gray.600">Followers</Text>
                            </HStack>
                            <HStack>
                                <Text fontWeight="bold">{following}</Text>
                                <Text fontSize="sm" color="gray.600">Following</Text>
                            </HStack>

                        </HStack>

                        <Box mr="4">
                            <Link href={`https://github.com/${login}`} isExternal> <Text fontWeight="bold">Click here For Repo</Text></Link>
                        </Box>
                    </Box>
                </Box>

            </HStack>
            <Box px={5} py={1}>
                <Text fontSize="sm" color="gray.600" mt="2">{bio}</Text>
            </Box>
        </Card>
    );
};

export default GitHubProfileCard;
