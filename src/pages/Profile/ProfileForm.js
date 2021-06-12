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
                        <Field name="phone">
                        {({ field, form }) => (
                            <FormControl>
                                <FormLabel htmlFor="phone">Número de télefon*</FormLabel>
                                <Input height="50px" {...field} placeholder="Numero de télefono" id="phone"/>
                                <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        { props.touched.phone && props.errors.phone ? (
                            <Alert status="error">
                                {props.errors.phone}
                            </Alert>
                        ): null}
                </Box>
                <Box py="10px">
                    <Field name="address">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="address">Dirección</FormLabel>
                            <Input height="50px" {...field} placeholder="Introduce la dirección completa" id="address"/>
                            <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    { props.touched.address && props.errors.address ? (
                            <Alert status="error">
                                {props.errors.addres}
                            </Alert>
                        ): null}
                </Box>
                <Box py="10px">
                    <Field name="country">
                    {({ field, form }) => (
                        <FormControl>
                            <FormLabel htmlFor="country">País de residencia</FormLabel>
                            <Input height="50px" type="country" placeholder="Selecciona uno" {...field} id="country"/>
                            <FormErrorMessage>{form.errors.country}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    { props.touched.country && props.errors.country ? (
                            <Alert status="error">
                                {props.errors.country}
                            </Alert>
                        ): null}
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
                Guardar y continuar
                </Button>
              </Box>
          </Form>
        )}
      </Formik>
    )
}

export default RegisterForm;