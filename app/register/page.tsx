import {
    Authentication,
    Brand,
    Button,
    Container,
    Features,
    Footer,
    Form,
    Header,
    Hero,
    Input,
    Main,
    Navigation,
    NavigationItem,
} from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authy - Register',
};

export default function Register() {
    return (
        <div className='register'>
            <Header>
                <Brand />
                <Navigation>
                    <NavigationItem
                        name='Landing'
                        link='/'
                    />
                    <NavigationItem
                        name='Login'
                        link='/login'
                    />
                    <NavigationItem
                        name='Register'
                        link='/register'
                        active
                    />
                    <NavigationItem
                        name='Reset'
                        link='/'
                    />
                    <Button
                        name='Support'
                        link='/support'
                    />
                </Navigation>
            </Header>
            <Container>
                <Main>
                    <Authentication>
                        <Form type='Register'>
                            <Input
                                label='First Name'
                                id='first_name'
                                type='text'
                                placeholder='e.g John'
                            />
                            <Input
                                label='Last Name'
                                id='last_name'
                                type='text'
                                placeholder='e.g Doe'
                            />
                            <Input
                                label='Year Of Birth'
                                id='year_of_birth'
                                type='number'
                                placeholder='e.g 2000'
                            />
                            <Input
                                label='Email'
                                id='email'
                                type='email'
                                placeholder='e.g john@gmail.com'
                            />
                            <Input
                                label='Password'
                                id='password'
                                type='password'
                                placeholder='e.g h7JKil8#dds'
                            />
                            <Input
                                label='Confirm Password'
                                id='confim_password'
                                type='password'
                                placeholder='e.g h7JKil8#dds'
                            />
                        </Form>
                    </Authentication>
                </Main>
                <Footer />
            </Container>
        </div>
    );
}
