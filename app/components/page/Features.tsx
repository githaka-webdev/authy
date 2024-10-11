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
                    <p
                        className={
                            selectedFeature === 'Security'
                                ? FeaturesStyles.p_active
                                : ''
                        }
                        onClick={() => setSelectedFeature('Security')}
                    >
                        Security
                    </p>
                </div>
                <div className={FeaturesStyles.features_content}>
                    {selectedFeature === 'Authentication' && (
                        <div>
                            <h2>Authentication</h2>
                            <p>
                                A straightforward yet secure server
                                authentication system using just email and
                                password! Our approach focuses on simplicity and
                                reliability, ensuring users can easily log in to
                                their accounts while their data remains
                                protected. Dive into the code to understand how
                                we handle user registration, login, and session
                                management without the complexities of
                                token-based systems. Whether you're a beginner
                                looking to grasp the fundamentals or an
                                experienced developer seeking efficient
                                practices, our repository offers clear insights
                                into our email/password authentication
                                implementation.
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
                    {selectedFeature === 'Security' && (
                        <div>
                            <h2>Security</h2>
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
