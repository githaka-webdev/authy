import Brand from '../global/Brand';

export default function Header() {
    return (
        <header className='flex flex-row items-center justify-start gap-16 h-16 px-4 sm:px-8 xl:px-16 max-w-screen-2xl'>
            <Brand name='Authy' />
        </header>
    );
}
