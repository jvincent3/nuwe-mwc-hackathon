import React,{useState}  from 'react'
import {Box, Flex, FormControl, FormLabel, Input, Button, FormErrorMessage, Alert} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {verifyUser, verifyUserCredentials} from 'utils/user'

function VerifyForm() {

    const [showPassword, setShowPassword] = useState(true)

    return (
        <Formik
        initialValues={{
             email: "",
             password: "",
                         }}
        validationSchema={Yup.object({
            email: Yup.string().email('Email inválido').required('Requerido'),
            password: Yup.string().min(8, 'Mínimo 8 characteres').required('Requerido'),
        })}
        onSubmit={(values, actions) => {
            setTimeout(() => {
                if(verifyUser(values.email)) {
                    if (verifyUserCredentials(values.email, values.password)) {
                        window.location = "https://nuwe.io"
                    }
                }
                actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
              <Box>
                <Box py="10px">
                        <Field name="email">
                        {({ field, form }) => (
                            <FormControl>
                                <FormLabel htmlFor="email">Correo</FormLabel>
                                <Input height="50px" {...field} placeholder="Introduzca su correo" id="email"/>
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        { props.touched.email && props.errors.email ? (
                            <Alert status="error">
                                {props.errors.email}
                            </Alert>
                        ): null}
                </Box>
                <Box py="10px">
                <Field name="password">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="password">Contranseña*</FormLabel>
                            <Flex>
                                <Input height="50px" type={showPassword ? "password": "text"} placeholder="Contraseña" {...field} id="password"/>
                                <Box position="relative">
                                    <Button zIndex="1" _hover={{background: "none"}} height="100%" color="gray" onClick={e => {setShowPassword(!showPassword)}} position="absolute" vertical-align="middle" bg="transparent" right="0">{showPassword ? "Mostrar" : "Ocultar"}</Button>
                                </Box>
                            </Flex>
                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    { props.touched.password && props.errors.password ? (
                            <Alert status="error">
                                {props.errors.password}
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
                Iniciar sesión
                </Button>
              </Box>
          </Form>
        )}
      </Formik>
    )
}

export default VerifyForm;