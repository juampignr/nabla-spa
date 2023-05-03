import css from 'styles/spa.module.css'

export function Row({children}){

    return(<div className={css.row}>{children}</div>);
}
  
export function Column({children}){

    return(<div className={css.column}>{children}</div>);
}

export function Center({children}){

    return(<div className={css.center}>{children}</div>);
}