"use client"
import {SuggestedItems} from "@/components/SeggestedProducts";
import {useEffect, useState} from "react";

const randomImages = [
    { src: 'https://picsum.photos/id/1015/1200/400', text: 'Vytajte u nás' },
    { src: 'https://picsum.photos/id/1016/1200/400', text: 'Vyberte si zo širokej ponuky výrobkou' },
    { src: 'https://picsum.photos/id/1025/1200/400', text: 'Objavte naše skvelé zľavy' },
    { src: 'https://picsum.photos/id/1043/1200/400', text: 'Otvaráme novú predajňu' },
];

export default function LandingPage ()  {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % randomImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* Top Carousel */}
            <div style={{ position: 'relative', overflow: 'hidden', height: '400px' }}>
                <img
                    src={randomImages[current].src}
                    alt={`Slide ${current}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'rgba(0, 0, 0, 0.4)',
                        color: '#fff',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px #000',
                    }}
                >
                    {randomImages[current].text}
                </div>
            </div>

            {/* Below carousel content */}
            <div style={{ padding: '2rem', textAlign: 'center' }}>

                <SuggestedItems category={"electronics"} nadpis={"Aktuálne trendy"}/>
            </div>
        </div>
    );
};