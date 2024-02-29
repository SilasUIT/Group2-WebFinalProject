'use client';

interface MenuItemProps {
    onClick: () => void;
    label: string;

}
import React from 'react'

export const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
  return (
    <div onClick={onClick}
    className="
        px-4
        py-3
        Whover:bg-neutral-100
        transition
        font-semibold>
    ">
        {label}
    </div>
  )
}
