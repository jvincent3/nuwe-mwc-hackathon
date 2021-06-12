import React from 'react'
import {useHistory} from 'react-router-dom'
import {Box, FormControl, FormLabel, Input, Button, FormErrorMessage, Alert} from '@chakra-ui/react'
import {Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'components/Input/PhoneInput'

function Profile() {

    const history = useHistory();

    return (
        <Formik
        initialValues={{
             phone: "",
             address: "",
             country: "",
                         }}
        validationSchema={Yup.object({
            phone: Yup.string().required('Required'),
            address: Yup.string().required('Required'),
            country: Yup.string().required('Required'),
        })}
        onSubmit={(values, actions) => {
            setTimeout(() => {
                actions.setSubmitting(false)
                alert(JSON.stringify(values, 2))
                //history.push("/profile")
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
                                <FormLabel htmlFor="phone">Número de télefono*</FormLabel>
                                <PhoneInput country={'es'} value={form.values.phone} onChange={phone => form.setFieldValue("phone", phone)} enableSearch={true}/>
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
                                {props.errors.address}
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

export default Profile;