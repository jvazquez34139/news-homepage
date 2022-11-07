import React from 'react'

const Articles = () => {

  interface Article {
    key: number,
    title: string,
    desc: string
  }

  const articles: Article[] = [
    {
      key: 1,
      title: 'Reviving Retro PCs',
      desc: 'What happens when old PCs are given modern upgrades?'
    },
    {
      key: 2,
      title: 'Top 10 Laptops of 2022',
      desc: 'Our best picks for various needs and budgets.'
    },
    {
      key: 3,
      title: 'The Growth of Gaming',
      desc: 'How the pandemic has sparked fresh opportunities.'
    }
  ]

  return (
    <aside className='bg-slate-900 text-white'>

      {articles.map((article) => {
        return (
          <article key={article.key}>
            <img></img>
            <div>
              <h3>{article.title}</h3>
              <p>{article.desc}</p>
            </div>
          </article>
        )
      })}
    </aside>
  )
}

export default Articles