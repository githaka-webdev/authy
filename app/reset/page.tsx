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
    title: 'Authy - Reset',
};

export default function Reset() {
    return (
        <div className='reset'>
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
                    />
                    <NavigationItem
                        name='Reset'
                        link='/'
                        active
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
                        <Form type='Reset'>
                            <Input
                                label='Email'
                                id='email'
                                type='email'
                                placeholder='e.g john@gmail.com'
                            />
                        </Form>
                    </Authentication>
                </Main>
                <Footer />
            </Container>
        </div>
    );
}
