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
    <aside className='mt-10 md:flex md:justify-between md:w-full'>

      {articles.map((article) => {
        return (
          <article key={article.key} className="flex justify-between text-slate-900 hover:text-red-400 hover:cursor-pointer mb-8 md:w-96">
            <img src={article.img} alt={`image for "${article.title}"`}
              className="w-28" />
            <div className='pl-5 flex flex-col justify-between'>
              <p className="text-3xl text-slate-400">{`0${article.key}`}</p>
              <h3 className='font-bold text-lg'>{article.title}</h3>
              <p className='text-slate-400'>{article.desc}</p>
            </div>
          </article>
        )
      })}
    </aside>
  )
}

export default Articles