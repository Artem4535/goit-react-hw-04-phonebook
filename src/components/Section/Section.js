import css from './Section.module.css'

export default function Section({children}) {
    return (
        <section>
            <div className={css.container}>
                {children}
            </div>
        </section>
    )
}