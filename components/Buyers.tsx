
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
    finalValue: number;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '80k',
        heading: "Our buyers",
        subheading: "Follow a hashtag growth total posts, videos and images.",
        finalValue: 80000,
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '90k',
        heading: "Project completed",
        subheading: "Follow a hashtag growth total posts, videos and images.",
        finalValue: 90000,
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '80%',
        heading: "Happy buyers",
        subheading: "Follow a hashtag growth total posts, videos and images.",
        finalValue: 80,
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '50+',
        heading: "Team members",
        subheading: "Follow a hashtag growth total posts, videos and images.",
        finalValue: 50,
    }
]

const CounterCard = ({ items }: { items: cardDataType }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds animation
        const steps = 60;
        const increment = items.finalValue / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep += 1;
            const newCount = Math.floor(increment * currentStep);
            setCount(newCount > items.finalValue ? items.finalValue : newCount);

            if (currentStep >= steps) {
                clearInterval(interval);
                setCount(items.finalValue);
            }
        }, duration / steps);

        return () => clearInterval(interval);
    }, [items.finalValue]);

    const displayValue = () => {
        if (items.percent.includes('k')) {
            return count >= 1000 ? `${(count / 1000).toFixed(0)}k` : count;
        }
        if (items.percent.includes('%')) {
            return `${count}%`;
        }
        if (items.percent.includes('+')) {
            return `${count}+`;
        }
        return count;
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center border border-border p-2 w-10 rounded-lg'>
                <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
            </div>
            <h2 className='text-4xl lg:text-6xl text-black font-semibold text-center mt-5 min-h-[60px] lg:min-h-[80px] flex items-center'>
                {displayValue()}
            </h2>
            <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{items.heading}</h3>
            <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
        </div>
    );
};

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <CounterCard key={i} items={items} />
                ))}
            </div>
        </div>
    )
}

export default Buyers;