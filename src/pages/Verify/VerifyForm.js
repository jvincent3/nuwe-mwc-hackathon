import React from 'react'
import {useHistory} from 'react-router-dom'
import {Box, FormControl, FormLabel, Input, Button, FormErrorMessage, Alert, toast, Checkbox} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'

function VerifyForm() {

    const history = useHistory();

    return (
        <Formik
        initialValues={{
             cardNumber: "",
             secretCode: "",
                         }}
        validationSchema={Yup.object({
            phone: Yup.string().required('Required'),
            address: Yup.string().required('Required'),
            country: Yup.string().required('Required'),
        })}
        onSubmit={(values, actions) => {
            setTimeout(() => {
                actions.setSubmitting(false)
                history.push("/profile")
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
                                <Input height="50px" {...field} placeholder="Numero de tarjeta" id="cardNumber"/>
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
                            <Input height="50px" {...field} placeholder="Codigo secreto" id="secretCode"/>
                            <FormErrorMessage>{form.errors.secretCode}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    { props.touched.secretCode && props.errors.secretCode ? (
                            <Alert status="error">
                                {props.errors.address}
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
                Guardar y continuar
                </Button>
              </Box>
          </Form>
        )}
      </Formik>
    )
}

export default VerifyForm;