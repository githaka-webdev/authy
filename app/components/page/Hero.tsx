import Image from 'next/image';
import { HeroStyles } from '@/styles';
import { Button } from '@/components';

export default function Hero() {
    return (
        <section id={HeroStyles.hero}>
            <div className={HeroStyles.hero_media}>
                <Image
                    src={'/images/landing/hero.jpg'}
                    alt='Hero Image'
                    width={900}
                    height={600}
                />
            </div>
            <div className={HeroStyles.hero_text}>
                <h1>Authy</h1>
                <p>
                    A Next.js project exploring its capabilities as well as
                    structure. It is intended to be a reference and beginer
                    friendly.
                </p>
                <Button
                    link=''
                    name='GitHub'
                />
            </div>
        </section>
    );
}
