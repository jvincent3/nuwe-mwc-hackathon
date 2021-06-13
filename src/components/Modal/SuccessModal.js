import React from 'react'
import {Heading,Text,  Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter} from '@chakra-ui/react'

function SuccessModal({isOpen, onOpen, onClose}) {

    return (
        <>    
          <Modal isOpen={isOpen} onClose={onClose} isCentered="true">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                  <Heading fontSize="2xl">¡Todo guay!</Heading>
                </ModalHeader>
              <ModalCloseButton />
              <ModalBody py="30px">
                  <Text>Tu cuenta se ha creado correctamennte</Text>
              </ModalBody>
    
              <ModalFooter >
                <Button bg="white" width="30%" color="black" variant="outline" colorScheme="blue" mr={3} onClick={onClose}>
                  Cerrar
                </Button>
                <Button width="70%" bg="black" color="white" variant="ghost" onClick={e => window.location = "https://nuwe.io"}>Vamos para nuwe</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default SuccessModal
