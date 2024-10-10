import { Brand, NavigationItem } from '@/components';
import { FooterStyles } from '@/styles';

export default function Footer() {
    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.footer_navigation}>
                <div className={FooterStyles.footer_brand}>
                    <Brand />
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
                        link=''
                        name='Cookies'
                    />
                    <NavigationItem
                        link=''
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
