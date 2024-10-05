import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum VariantButton {
	GHOST = 'ghost',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: VariantButton
}

export const Button: FC<ButtonProps> = (props) => {
	const { className, children, variant, ...otherProps } = props

	return (
		<button
			type="button"
			className={classNames(cls.Button, {}, [className, cls[variant]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
