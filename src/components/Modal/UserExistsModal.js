import React from 'react'
import {useHistory} from 'react-router-dom'
import {Heading,Text,  Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter} from '@chakra-ui/react'

function UserExistsModal({isOpen, onOpen, onClose}) {

    const history = useHistory();
    
    return (
        <>    
            <Modal isOpen={isOpen} onClose={onClose} isCentered="true">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Heading fontSize="2xl">¡Ups, algo ha ido mal!</Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody py="30px">
                    <Text>Parece que el correo electrónico introducido ya está en uso. Por favor, revisalo y vuelve a intentar de nuevo.</Text>
                </ModalBody>
    
                <ModalFooter >
                <Button bg="white" width="30%" color="black" variant="outline" colorScheme="blue" mr={3} onClick={onClose}>
                    Cerrar
                </Button>
                <Button width="70%" bg="black" onClick={e => history.push("/login")} color="white" variant="ghost">Iniciar sesión</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}

export default UserExistsModal

