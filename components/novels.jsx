import React, { useEffect, useState } from 'react'
import Search from './search'
import Novel from './novel'
import { filterNovels, retrieveNovels } from '../utils/novels'

export default () => {
  const [novelsList, setNovelsList] = useState([])
  const [filteredNovelsList, setFilteredNovelsList] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {
      const novels = await retrieveNovels()

      setNovelsList(novels)
      setFilteredNovelsList(novels)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterNovels(novelsList, searchTerm)

    setFilteredNovelsList(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Novels</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredNovelsList.map(novel => (
          <Novel
            key={novel.id}
            id={novel.id}
            title={novel.title}
            name={`by ${novel.author.nameFirst} ${novel.author.nameLast}`}
          />
        ))
      }
    </div>
  )
}
