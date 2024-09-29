import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LangSwitcher } from 'features/LangSwitcher'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
	const {
		className,
	} = props

	const { t } = useTranslation()

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
			<div className={cls.links}>
				<AppLink variant={AppLinkVariant.SECONDARY} to="/" className={cls.mainLink}>
					{t('Home')}
				</AppLink>
				<AppLink variant={AppLinkVariant.RED} to="/about">
					{t('About')}
				</AppLink>
			</div>
		</header>
	)
}
