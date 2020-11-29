import React, { useState, Fragment } from 'react'
import useHackerNewsApi from "./customEffects/useHackerNewsApi"

// 参考使用react hooks获取数据例子,原文如下
// https://www.robinwieruch.de/react-hooks-fetch-data/
function App() {
  const [{ data, isLoading, isError }, doFetch] = useHackerNewsApi()
  const [query, setQuery] = useState('redux')

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          doFetch(query)
          event.preventDefault()
        }}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}></input>
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  )
}

export default App
