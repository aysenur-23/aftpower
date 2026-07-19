'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Bir sayı hedefini "start" true olduğunda animasyonla çıkarır.
 * "500+", "%99", "10+" gibi ifadeleri {prefix}{sayı}{suffix} olarak parçalayıp
 * yalnızca sayısal kısmı animasyonlar. prefers-reduced-motion'da anında hedefi verir.
 */
export function useCountUp(target: string, start: boolean, duration = 1400) {
    const [value, setValue] = useState(0);
    const rafRef = useRef<number | null>(null);

    // "%99" / "500+" / "10+" -> prefix, number, suffix
    const match = target.match(/^(\D*)(\d+(?:[.,]\d+)?)(\D*)$/);
    const prefix = match ? match[1] : '';
    const numeric = match ? parseFloat(match[2].replace(',', '.')) : 0;
    const suffix = match ? match[3] : '';
    const decimals = match && match[2].includes('.') ? 1 : 0;

    useEffect(() => {
        if (!start) return;

        const reduce = typeof window !== 'undefined'
            && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
            setValue(numeric);
            return;
        }

        let startTs: number | null = null;
        const step = (ts: number) => {
            if (startTs === null) startTs = ts;
            const p = Math.min((ts - startTs) / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(numeric * eased);
            if (p < 1) rafRef.current = requestAnimationFrame(step);
        };
        rafRef.current = requestAnimationFrame(step);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, [start, numeric, duration]);

    const display = `${prefix}${value.toFixed(decimals)}${suffix}`;
    return display;
}
