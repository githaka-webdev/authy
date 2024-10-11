import { NavigationItem } from '@/components';

export default function Features() {
    return (
        <section>
            <h1>Features</h1>
            <div>
                <NavigationItem
                    name='Authentication'
                    link=''
                    active
                />
                <NavigationItem
                    name='Authorization'
                    link=''
                />
            </div>
            <div>
                <div>
                    <h1>Authentication</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A, vero. Reiciendis repellat maxime amet, labore nihil
                        exercitationem dolores cupiditate impedit laudantium
                        quibusdam, velit tempore! Incidunt qui provident
                        repellat atque vel?
                    </p>
                </div>
            </div>
        </section>
    );
}
