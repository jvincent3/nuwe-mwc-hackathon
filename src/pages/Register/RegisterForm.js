import React from 'react'
import {Box, FormControl, FormLabel, Input, Button, FormErrorMessage, Alert, toast, Checkbox} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'

function RegisterForm() { 

    function equalTo(ref, msg) {
        return Yup.mixed().test({
            name: 'equalTo',
            exclusive: false,
            message: msg || '${path} must be the same as ${reference}',
            params: {
                reference: ref.path
            },
            test: function(value) {
                return value === this.resolve(ref);
            }
        })
    }

    Yup.addMethod(Yup.string, 'equalTo', equalTo)

    return (
        <Formik
        initialValues={{
             name: "",
             email: "",
             password: "",
             terms: false
                         }}
        validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email adress').required('Required'),
            password: Yup.string().min(8, 'Must have minimum 8 characters').required('Required'),
            passwordConfirm: Yup.string().min(8, 'Must have minimum 8 characters').equalTo(Yup.ref('password'), 'Password must match').required('Required'),
            terms: Yup.bool().oneOf([true], "Tiene que confirmar los términos y condiciones").required('Required')
        })}
        onSubmit={(values, actions) => {
            alert(JSON.stringify(values, 2))
          setTimeout(() => {
            // registerFn.mutate(values, {
            //     onSuccess: (res) => {
            //         console.log(res)
            //         actions.setSubmitting(false)
            //         toast({
            //             title: "User created",
            //             status: "success",
            //             isClosable: true,
            //             duration: 5000,
            //           })
            //     },
            //     onError: (err) => {
            //         console.log(err)
            //         actions.setSubmitting(false)
            //         toast({
            //             title: "User exists",
            //             status: "error",
            //             isClosable: true,
            //             duration: 5000,
            //           })
            //     }
            // })
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
              <Box>
                <Box py="10px">
                        <Field name="name">
                        {({ field, form }) => (
                            <FormControl>
                                <FormLabel htmlFor="name">Nombre completo*</FormLabel>
                                <Input height="50px" {...field} placeholder="Nombre" id="name"/>
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        { props.touched.name && props.errors.name ? (
                            <Alert status="error">
                                {props.errors.name}
                            </Alert>
                        ): null}
                </Box>
                <Box py="10px">
                    <Field name="email">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="email">Correo electrónico*</FormLabel>
                            <Input height="50px" {...field} placeholder="Email" id="email"/>
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
                            <Input height="50px" type="password" placeholder="Contraseña" {...field} id="password"/>
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
                <Box py="10px">
                    <Field name="passwordConfirm">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="passwordConfirm">Confirmar contraseña*</FormLabel>
                            <Input height="50px"  type="password" {...field} placeholder="Confirma contraseña" id="passwordConfirm"/>
                            <FormErrorMessage>{form.errors.passwordConfirm}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    { props.touched.passwordConfirm && props.errors.passwordConfirm ? (
                            <Alert status="error">
                                {props.errors.passwordConfirm}
                            </Alert>
                        ): null}
                </Box>
                <Box>
                    <Field type="checkbox" name="terms">
                        {({field, form}) => (
                            <FormControl>
                                <Checkbox {...field}>Acepto los términos y condiciones</Checkbox>
                            </FormControl>
                        )}

                    </Field>
                </Box>
                <Button
                mt={4}
                disabled={!props.values.terms}
                height="50px"
                width="100%"
                bg="#4f934a"
                color="white"
                isLoading={props.isSubmitting}
                type="submit"
                >
                Registra cuenta
                </Button>
              </Box>
          </Form>
        )}
      </Formik>
    )
}

export default RegisterForm;