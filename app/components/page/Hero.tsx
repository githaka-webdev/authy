import Image from 'next/image';

export default function Hero() {
    return (
        <section>
            <div>
                <Image
                    src={'/images/landing/hero.jpg'}
                    alt='Hero Image'
                    width={900}
                    height={600}
                />
            </div>
            <div>
                <h1>Lorem ipsum dolor </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, eos corporis incidunt nemo blanditiis, a quia
                    dignissimos minus hic possimus aliquam praesentium
                    laudantium libero. Exercitationem recusandae asperiores
                    dolorem incidunt quidem!
                </p>
            </div>
        </section>
    );
}
