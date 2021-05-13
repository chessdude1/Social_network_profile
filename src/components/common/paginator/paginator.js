import styles from './paginator.module.css'

export const Paginator= (props) => {
    let pages = [];
    let PagesCount = Math.ceil(props.totalCount / props.PageSize);
    for (let i=1; i <= PagesCount; i++) {
      pages.push(i)
    }
    return (
        <div>
          {pages.map(p => {
            return(<button className={p === props.CurrentPage && styles.SelectedPage} onClick={()=>{props.OnPageChanged(p)}}>{p}</button>)
          })}
        </div>
        )
}
