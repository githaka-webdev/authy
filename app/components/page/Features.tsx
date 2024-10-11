'use client';
import { useState } from 'react';
import { FeaturesStyles } from '@/styles';

export default function Features() {
    const [selectedFeature, setSelectedFeature] = useState('Authentication');
    return (
        <section id={FeaturesStyles.features}>
            <h1>Features</h1>
            <div className={FeaturesStyles.features_container}>
                <div className={FeaturesStyles.features_nav}>
                    <p
                        className={
                            selectedFeature === 'Authentication'
                                ? FeaturesStyles.p_active
                                : ''
                        }
                        onClick={() => setSelectedFeature('Authentication')}
                    >
                        Authentication
                    </p>
                    <p
                        className={
                            selectedFeature === 'Authorization'
                                ? FeaturesStyles.p_active
                                : ''
                        }
                        onClick={() => setSelectedFeature('Authorization')}
                    >
                        Authorization
                    </p>
                </div>
                <div className={FeaturesStyles.features_content}>
                    {selectedFeature === 'Authentication' && (
                        <div>
                            <h2>Authentication</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A, vero. Reiciendis repellat
                                maxime amet, labore nihil exercitationem dolores
                                cupiditate impedit laudantium. Authentication
                            </p>
                        </div>
                    )}
                    {selectedFeature === 'Authorization' && (
                        <div>
                            <h2>Authorization</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A, vero. Reiciendis repellat
                                maxime amet, labore nihil exercitationem dolores
                                cupiditate impedit laudantium. Authorization.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
