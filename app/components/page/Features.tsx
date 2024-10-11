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
                                A secure server authentication system using
                                email and password! Our focus on simplicity
                                ensures users can easily log in while keeping
                                their data protected. Check out the code to see
                                how we handle user registration, login, and
                                session management without token complexities.
                                Whether you’re a beginner or an experienced
                                developer, our repository offers valuable
                                insights!
                            </p>
                        </div>
                    )}
                    {selectedFeature === 'Authorization' && (
                        <div>
                            <h2>Authorization</h2>
                            <p>
                                See how we implement authorization! After
                                logging in with their email and password, users
                                experience role-based access control, ensuring
                                they only access permitted features and data.
                                Dive into the code for practical insights on
                                managing permissions and protecting sensitive
                                information. We'd love for you to explore it and
                                share your feedback!
                            </p>
                        </div>
                    )}
                    {selectedFeature === 'Security' && (
                        <div>
                            <h2>Security</h2>
                            <p>
                                Security is a top priority. We implement best
                                practices to protect user data, including
                                password hashing and secure session management.
                                Our focus on robust security measures ensures
                                that user information remains safe from
                                unauthorized access. Explore the repository to
                                see how we safeguard our application and enhance
                                user trust!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
