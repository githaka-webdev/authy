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
    title: 'Authy - Login',
};

export default function Login() {
    return (
        <div className='login'>
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
                        active
                    />
                    <NavigationItem
                        name='Register'
                        link='/'
                    />
                    <NavigationItem
                        name='Reset'
                        link='/'
                    />
                    <Button
                        name='Support'
                        link='/login'
                    />
                </Navigation>
            </Header>
            <Container>
                <Main>
                    <Authentication>
                        <Form type='Login'>
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
                        </Form>
                    </Authentication>
                </Main>
                <Footer />
            </Container>
        </div>
    );
}
