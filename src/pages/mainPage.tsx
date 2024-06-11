import { useGetTableQuery } from '@/services/tableApi'
import { RootInterface, SubCategory } from '@/type/type'

export const MainPage = () => {
  const { data } = useGetTableQuery()

  return (
    <div className={'main'}>
      <img src={'https://allmarket.ge/r/images/logo.png'} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>PhotoUrl</th>
          </tr>
        </thead>
        <tbody>
          {data?.list.map((item: RootInterface) => (
            <>
              <tr key={item.Id}>
                <td>
                  <a href={item.Url} rel={'noreferrer'} target={'_blank'}>
                    {item.Title}
                  </a>
                </td>
                <td>{item.PhotoUrl ? <img alt={item.Title} src={item.PhotoUrl} /> : ''}</td>
              </tr>
              {item.SubCategories.map((subItem: SubCategory) => (
                <tr key={subItem.Id}>
                  <td>
                    <a href={subItem.Url}>{subItem.Title}</a>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
