import Image from 'next/image';

const articles = [
  {
    category: 'Connecting Africa',
    title: 'Combining AI, fintech to solve African problems - Ericsson',
    date: 'December 06, 2021',
    img: '/1.png',
  },
  {
    category: 'Tech Label',
    title: 'Ghana to Host the 14th Africa Fintech Summit on October 8th',
    date: 'May 24, 2022',
    img: '/2.png',
  },
  {
    category: 'Techstars',
    title: "Midterm Report: Techstars Toronto's Second 2021 Class",
    date: 'Dec 06, 2021',
    img: '/3.png',
  },
  {
    category: 'Medium',
    title:
      "Wise granted approval to join Zengin, Japan's domestic payment system",
    date: 'December 05, 2021',
    img: '/4.png',
  },
  {
    category: 'Entire Africa',
    title:
      'African startups to participate at Techstars Toronto October 2021 cohort',
    date: 'October 25, 2021',
    img: '/5.png',
  },
  {
    category: 'Tech/Europe',
    title: 'More African startups get into Techstars Toronto',
    date: 'October 18, 2021',
    img: '/5.png',
  },
];

export default function Press() {
  return (
    <section className="grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-3 px-6 pt-14 py-20">
      {articles.map((article, index) => (
        <article
          key={index}
          className="w-full flex flex-col pt-6  rounded-lg md:w-[358px] h-[334px] bg-[#F8F9FE]"
        >
          <div className="px-5">
            <div className="relative w-fit">
              <img
                src="/category.png"
                alt="category"
                className="absolute left-1 top-1 z-10 h-full  w-full"
              />

              <div className="rounded-[3px] relative z-20 w-full flex items-center justify-center py-1 px-1.5 text-[10px] bg-[#23CE6B] text-white">
                {article.category}
              </div>
            </div>
            <h3 className="mt-1 font-medium text-[#0D2C65]">{article.title}</h3>
            <p className="mt-2.5 text-[#6E80A3] text-[10px]">{article.date}</p>
          </div>

          <div className="relative mt-auto w-full h-[200px]">
            <Image
              src={article.img}
              alt={article.title}
              fill
              className="rounded-b-lg"
            />
          </div>
        </article>
      ))}
    </section>
  );
}
