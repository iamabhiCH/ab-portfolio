import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
                <div className="col-start-1 md:row-start-1">
                    <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter" aria-label={slice.primary.firstname + " " + slice.primary.lastname}>
                        <span className="block text-slate-300">
                            {slice.primary.firstname}
                        </span>
                        <span className="-mt-[.2em] block text-slate-800">{slice.primary.lastname}</span>
                    </h1>
                    <span className="block bg-gradient-to-tr from-yellow-500 via-yellow-500 to-yellow-500 bg-clip-text">{slice.primary.tagline}</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
