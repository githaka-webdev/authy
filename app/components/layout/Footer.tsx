import { Brand, NavigationItem } from '@/components';
import { FooterStyles } from '@/styles';

export default function Footer() {
    return (
        <footer className={FooterStyles.footer}>
            <div>
                <Brand />
            </div>
            <div>
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
            <div>
                <p>&copy;2024, Authy. All rights reserved.</p>
            </div>
        </footer>
    );
}
