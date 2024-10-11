import { NavigationItem } from '@/components';
import { FeaturesStyles } from '@/styles';

export default function Features() {
    return (
        <section id={FeaturesStyles.features}>
            <h1>Features</h1>
            <div className={FeaturesStyles.features_container}>
                <div className={FeaturesStyles.features_nav}>
                    <a href=''>Authentication</a>
                    <a href=''>Authorization</a>
                </div>
                <div className={FeaturesStyles.features_content}>
                    <div className={FeaturesStyles.feature_single}>
                        <h1>Authentication</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, vero. Reiciendis repellat maxime amet,
                            labore nihil exercitationem dolores cupiditate
                            impedit laudantium quibusdam, velit tempore!
                            Incidunt qui provident repellat atque vel?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
