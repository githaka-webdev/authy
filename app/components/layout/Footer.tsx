import { Brand, Button, NavigationItem } from '@/components';
import { FooterStyles } from '@/styles';

export default function Footer() {
    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.footer_navigation}>
                <div className={FooterStyles.footer_brand}>
                    <Brand />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto praesentium maxime quo, neque.
                    </p>
                    <Button
                        name='Join Us'
                        link=''
                    />
                </div>
                <div className={FooterStyles.footer_links}>
                    <h1>Resources</h1>
                    <NavigationItem
                        link=''
                        name='Docs'
                    />
                    <NavigationItem
                        link=''
                        name='Learn'
                    />
                    <NavigationItem
                        link=''
                        name='Downloads'
                    />
                </div>
                <div className={FooterStyles.footer_links}>
                    <h1>More</h1>
                    <NavigationItem
                        link='/io'
                        name='Cookies'
                    />
                    <NavigationItem
                        link='#hero'
                        name='Privacy'
                    />
                </div>
            </div>
            <div>
                <p>&copy;2024, Authy. All rights reserved.</p>
            </div>
        </footer>
    );
}
