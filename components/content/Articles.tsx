import React from 'react'

const Articles = () => {

  interface Article {
    key: number,
    title: string,
    desc: string,
    img: string
  }

  const articles: Article[] = [
    {
      key: 1,
      title: 'Reviving Retro PCs',
      desc: 'What happens when old PCs are given modern upgrades?',
      img: 'assets/images/image-retro-pcs.jpg'
    },
    {
      key: 2,
      title: 'Top 10 Laptops of 2022',
      desc: 'Our best picks for various needs and budgets.',
      img: 'assets/images/image-top-laptops.jpg'
    },
    {
      key: 3,
      title: 'The Growth of Gaming',
      desc: 'How the pandemic has sparked fresh opportunities.',
      img: 'assets/images/image-gaming-growth.jpg'
    }
  ]

  return (
    <aside className='mt-10 text-slate-400'>

      {articles.map((article) => {
        return (
          <article key={article.key} className="flex justify-between  mb-8">
            <img src={article.img} alt={`image for "${article.title}"`}
              className="w-28" />
            <div className='pl-5 flex flex-col justify-between'>
              <p className="text-3xl ">{`0${article.key}`}</p>
              <h3 className='text-slate-900 font-bold text-lg'>{article.title}</h3>
              <p>{article.desc}</p>
            </div>
          </article>
        )
      })}
    </aside>
  )
}

export default Articles