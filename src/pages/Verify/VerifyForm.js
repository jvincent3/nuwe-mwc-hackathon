import React from 'react'
import {Box, FormControl, FormLabel, Input, Button, FormErrorMessage, Alert, useDisclosure} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import SuccessModal from 'components/Modal/SuccessModal'

function VerifyForm() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Formik
        initialValues={{
             cardNumber: "",
             secretCode: "",
                         }}
        validationSchema={Yup.object({
            cardNumber: Yup.string().min(12,"Requiere 12 digitos").matches(/^[0-9]+$/, "Solo numeros").required('Requerido'),
            secretCode: Yup.string().min(3, "Requiere 3 digitos").max(3, "Máximo 3 digitos").matches(/^[0-9]+$/, "Solo numeros").required('Requerido'),
        })}
        onSubmit={(values, actions) => {
            setTimeout(() => {
                actions.setSubmitting(false)
                onOpen()
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
              <Box>
                <Box py="10px">
                        <Field name="cardNumber">
                        {({ field, form }) => (
                            <FormControl>
                                <FormLabel htmlFor="cardNumber">Número de tarjeta*</FormLabel>
                                <Input maxLength="12" height="50px" {...field} placeholder="Numero de tarjeta" id="cardNumber"/>
                                <FormErrorMessage>{form.errors.cardNumber}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        { props.touched.cardNumber && props.errors.cardNumber ? (
                            <Alert status="error">
                                {props.errors.cardNumber}
                            </Alert>
                        ): null}
                </Box>
                <Box py="10px">
                    <Field name="secretCode">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="secretCode">Código secreto</FormLabel>
                            <Input maxLength="3" height="50px" {...field} placeholder="Codigo secreto" id="secretCode"/>
                            <FormErrorMessage>{form.errors.secretCode}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    { props.touched.secretCode && props.errors.secretCode ? (
                            <Alert status="error">
                                {props.errors.secretCode}
                            </Alert>
                        ): null}
                </Box>
                <Button
                mt={4}
                height="50px"
                width="100%"
                bg="#4f934a"
                color="white"
                isLoading={props.isSubmitting}
                type="submit"
                >
                Crear cuenta
                </Button>
                <SuccessModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
              </Box>
          </Form>
        )}
      </Formik>
    )
}

export default VerifyForm;