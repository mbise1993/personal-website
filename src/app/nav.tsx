'use client';

import { cn } from '@/util/cn';
import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  href: string;
  external?: boolean;
  rotation?: string;
  children: React.ReactNode;
}

export const NavItem = ({
  href,
  external,
  rotation = '0deg',
  children,
}: NavItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <img
        style={{ transform: `rotate(${rotation})` }}
        className="h-[70px]"
        src="/images/knob.png"
        alt="Knob"
      />
      <Link
        className="font-bold"
        href={href}
        target={external ? '_blank' : undefined}
      >
        {children}
      </Link>
    </div>
  );
};

const POWER_SWITCH_HEIGHT = 48;
const POWER_SWITCH_OFFSET = 7;

export const Nav = () => {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <nav className="nav flex items-center justify-evenly px-2 py-4 text-black">
      <div className="flex gap-2">
        {/* power toggle and label */}
        <div className="flex flex-col items-center">
          <button
            style={{
              position: 'relative',
              height: POWER_SWITCH_HEIGHT,
              width: 34,
            }}
            onClick={() => setIsOn(!isOn)}
          >
            <img
              style={{
                position: 'absolute',
                top: POWER_SWITCH_OFFSET * -1,
                height: POWER_SWITCH_HEIGHT,
                display: isOn ? 'block' : 'none',
              }}
              src="/images/power-toggle-on.svg"
              alt="Turn off"
            />
            <img
              style={{
                position: 'absolute',
                top: POWER_SWITCH_OFFSET,
                height: POWER_SWITCH_HEIGHT,
                display: isOn ? 'none' : 'block',
              }}
              src="/images/power-toggle-off.svg"
              alt="Turn on"
            />
          </button>
          <span>Power</span>
        </div>
        {/* LED power light */}
        <div className={cn('mt-4', 'led', isOn ? 'led-on' : 'led-off')} />
      </div>
      <NavItem href="/" rotation="-45deg">
        Home
      </NavItem>
      <NavItem href="/portfolio" rotation="20deg">
        Portfolio
      </NavItem>
      <NavItem href="/music" rotation="120deg">
        Music
      </NavItem>
    </nav>
  );
};
