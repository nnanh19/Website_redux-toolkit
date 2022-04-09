import { Button, Carousel } from 'antd';
function onChange(a, b, c) {
  console.log(a, b, c);
}
const contentBanner = [
  {
    id: "abc",
    title : "Học lập trình vì tiền",
    desc : "Không làm có ăn thì ăn cám Không làm có ăn thì ăn cám  Không làm có ăn thì ăn cám ",
  },
  {
    id: "abc1",
    title : "Học lập trình vì đói",
    desc : "Không làm có ăn thì ăn cám Không làm có ăn thì ăn cám  Không làm có ăn thì ăn cám ",
  },
  {
    id: "abcd",
    title : "Học lập trình vì mai ăn gì",
    desc : "Không làm có ăn thì ăn cám Không làm có ăn thì ăn cám  Không làm có ăn thì ăn cám ",
  }
]


const HomePage = () => {

  return (
    <div className='heroBlock'>
       <Carousel afterChange={onChange}>
          {contentBanner.map((banner, index) => {
            return (
              <div className='container-custom' key={index}>
                  <div className='content' >
                    <h3>{banner.title}</h3>
                    <p>{banner.desc}</p>
                    <div className='btnHolder'>
                      <Button type='primary' size='large'>Nhấn vào để học</Button>
                      <Button  size='large'>Nhét vào đầu</Button>
                    </div>
                  </div>
              </div>
            )
          })}
        </Carousel>
    </div>
  )
}

export default HomePage