// ** React Imports
import {useContext, Fragment} from 'react'
import {Link, useHistory} from 'react-router-dom'
import "../../../assets/css/login.css"

// ** Image imports
// eslint-disable-next-line no-unused-vars
import source from "../../../assets/images/custom_images/water.jpg"

// ** Custom Hooks
import useJwt from '@src/auth/jwt/useJwt'

// ** Third Party Components
import {useDispatch} from 'react-redux'
import {useForm, Controller} from 'react-hook-form'
import {Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee} from 'react-feather'

// ** Actions
import {handleLogin} from '@store/authentication'

// ** Context
import {AbilityContext} from '@src/utility/context/Can'

// ** Custom Components
import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Utils
// eslint-disable-next-line no-unused-vars
import {getHomeRouteForLoggedInUser} from '@utils'

// ** Reactstrap Imports
import {Row, Col, Form, Input, Label, Alert, Button, CardText, CardTitle, UncontrolledTooltip, Card} from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'
import {loginListen} from "./redux/actions"

import logo from "../../../assets/custom_images/logo.png"

const ToastContent = ({name, role}) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                <Avatar size='sm' color='success' icon={<Coffee size={12}/>}/>
                <h6 className='toast-title fw-bold'>Welcome, {name}</h6>
            </div>
        </div>
        <div className='toastify-body'>
            <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
        </div>
    </Fragment>
)

const defaultValues = {
    password: '',
    loginEmail: ''
}

const Login = () => {
    // ** Hooks
    const dispatch = useDispatch()
    // eslint-disable-next-line no-unused-vars
    const history = useHistory()
    // eslint-disable-next-line no-unused-vars
    const ability = useContext(AbilityContext)
    const {
        // eslint-disable-next-line no-unused-vars
        control,
        setError,
        // eslint-disable-next-line no-unused-vars
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        formState: {errors}
    } = useForm({defaultValues})

    // eslint-disable-next-line no-unused-vars
    const onSubmit = data => {
        dispatch(loginListen({email: data.loginEmail, password: data.password}, history))
        if (Object.values(data).every(field => field.length > 0)) {
            useJwt
                .login({email: "admin@demo.com", password: "admin"})
                .then(res => {
                    const data = {
                        ...res.data.userData,
                        accessToken: res.data.accessToken,
                        refreshToken: res.data.refreshToken
                    }
                    dispatch(handleLogin(data))
                    console.log(res.data.userData.ability)
                    console.log(data.role)
                    ability.update(res.data.userData.ability)
                    // history.push(getHomeRouteForLoggedInUser(data.role))
                })
                .catch(err => console.log(err))
        } else {
            for (const key in data) {
                if (data[key].length === 0) {
                    setError(key, {
                        type: 'manual'
                    })
                }
            }
        }
    }

    return (
        <div className='auth-wrapper auth-cover login-back'>
            <div className='auth-inner m-0 d-flex overflow-hidden'>
                <Col lg={8} className="d-center flex-column">
                    <img src={logo} width="20%" className="animate__animated animate__bounce"/>
                    <h1 className="text-center mt-2 f-Staatliches font-large-2">Ride Higher with us </h1>
                </Col>
                <Card className="flex-grow-1 d-center h-100">
                    <Col
                        className='d-flex align-items-center bg-transparent login-inner radius-20 auth-bg px-2 p-5'
                        lg={11}>
                        <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
                            <CardTitle tag='h2' className='fw-bold mb-1 text-center text-dark f-Staatliches'>
                                <h1>WELCOME TO FUEL IN</h1>
                            </CardTitle>
                            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
                                <div className='mb-1 mt-5'>
                                    <Label className='f-shippori' for='login-email'>
                                        <h6 className="p-0">Email</h6>
                                    </Label>
                                    <Controller
                                        id='loginEmail'
                                        name='loginEmail'
                                        control={control}
                                        render={({field}) => (
                                            <Input
                                                autoFocus
                                                type='email'
                                                placeholder='john@example.com'
                                                invalid={errors.loginEmail && true}
                                                {...field}
                                            />
                                        )}
                                    />
                                </div>
                                <div className='mb-2'>
                                    <div className='d-flex justify-content-between'>
                                        <Label className='f-shippori' for='login-password'>
                                            <h6 className="mt-1">Password</h6>
                                        </Label>
                                    </div>
                                    <Controller
                                        id='password'
                                        name='password'
                                        control={control}
                                        render={({field}) => (
                                            <InputPasswordToggle className='input-group-merge'
                                                                 invalid={errors.password && true} {...field} />
                                        )}
                                    />
                                </div>
                                <div className="text-right f-Staatliches mt-2 mb-1">
                                    <h5 className="text-primary">forgot password ?</h5>
                                </div>
                                <Button type='submit' color='primary' block className="p-1 mt-2 mb-3">
                                    Sign in
                                </Button>
                            </Form>
                        </Col>
                    </Col>
                </Card>
            </div>
        </div>
    )
}

export default Login
