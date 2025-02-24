import isologo from '../../assets/img/isologo-ding-white.png'
import isologoDegree from '../../assets/img/isologo-ding-degraded.png'

interface Props {
    variant: 'dark' | 'light';
    text: string;
}

export const TitleWelcomeLogin = ({ text, variant }: Props) => {
    const isDark = variant === 'dark'
    return (
        <div className={`${isDark ? "hidden lg:relative lg:block lg:p-12 bg-linear-to-b from-transparent from-0% to-zinc-900 to-100%" : 'relative -mt-16 block lg:hidden'}`}>
            <a className={`${!isDark && "inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"}`} href="#">
                <span className="sr-only">Home</span>
                <img
                    src={isDark ? isologo : isologoDegree}
                    alt="logo ding"
                    className="h-12 sm:h-16"
                />
            </a>

            <h2 className={`mt-6 text-2xl font-bold  ${isDark ? 'text-white' : 'text-gray-900'} sm:text-3xl md:text-4xl`}>
                Ding Bar <span className='lg:hidden'>🦑</span>
            </h2>

            <p className={`mt-4 leading-relaxed  ${isDark ? 'text-white/90' : 'text-gray-500'}`}>
                {text}
            </p>
        </div>
    );
};
