'use client';

import React from 'react';
import CountUp from 'react-countup';

const defaultCounters = [
    {
        icon: 'icon-icon-13',
        count: 32,
        suffix: '+',
        text: 'Years of Service',
    },
    {
        icon: 'icon-icon-14',
        count: 5,
        suffix: 'k+',
        text: 'Satisfied Clients',
    },
    {
        icon: 'icon-icon-15',
        count: 50,
        suffix: '+',
        text: 'Legal Experts',
    },
    {
        icon: 'icon-icon-29',
        count: 95,
        suffix: '%',
        text: 'Satisfaction Rate',
    },
];

export default function CounterOne({ counters = defaultCounters }) {
    return (
        <>
            {/* Start Counter One */}
            <section className="counter-one">
                <div className="container">
                    <ul className="row">
                        {counters.map((counter, index) => (
                            <li
                                key={index}
                                className={`col-xl-3 col-lg-6 col-md-6 wow fadeIn${index % 2 === 0 ? 'Left' : 'Right'}`}
                                data-wow-delay={`${index * 100}ms`}
                                data-wow-duration="1500ms"
                            >
                                {/* Start Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="icon-box">
                                        <span className={counter.icon}></span>
                                    </div>
                                    <div className="text-box">
                                        <h2 className="count">
                                            <CountUp end={counter.count} /> <span className="suffix">{counter.suffix}</span>
                                        </h2>
                                        <p>{counter.text}</p>
                                    </div>
                                </div>
                                {/* End Counter One Single */}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            {/* End Counter One */}
        </>
    );
}
