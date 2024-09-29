import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, VariantButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames('', {}, [className])}
			variant={VariantButton.GHOST}
			onClick={toggle}
		>
			{t('language')}
		</Button>
	)
})
