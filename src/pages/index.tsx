import dynamic from 'next/dynamic'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const DOM = () => {
  return (
    <section
      className='firstPage h-screen'
      style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className='introWrap'
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          position: 'fixed',
          top: '22%',
        }}
      >
        <h1
          className='title'
          style={{
            width: '679px',
            height: '135px',
            background: `url("https://digitalspecial.joongang.co.kr/_o/img/newsroom/2018/1011_deepsea/title.png") 0 0 no-repeat`,
          }}
        ></h1>
        <div style={{ height: '55px' }}></div>
        <p className='pc_item' style={{ fontSize: '17px', color: '#b5c7d0' }}>
          안녕. 나는 코스타리카 해안에 사는 바다거북이야. 어디서 본 거 같다고?
          <br></br>
          맞아, 코에 12cm나 되는 플라스틱 빨대가 박혀 고생한 거북이.
          <br></br>
          유튜브에서 화제가 됐던 그 영상 주인공이 바로 나야.
          <br></br>
          <strong style={{ fontSize: '20px', color: 'white' }}>
            내 덕(?)에 플라스틱 빨대가 얼마나 위험한지, 전 세계가 알게 됐대.
          </strong>
          <br></br>
          아, 영상을 못 봐서 무슨 얘기인지 잘 모르겠다고?
          <br></br>
          그럼 지금부터 내가 하는 얘기를 잘 들어봐.
        </p>
      </div>
      <div
        className='mainBg'
        style={{
          width: 'inherit',
          height: 'inherit',
          position: 'fixed',
          top: 0,
          background: `#082a62 url("https://digitalspecial.joongang.co.kr/_o/img/newsroom/2018/1011_deepsea/mainbg.jpg") center bottom / cover no-repeat`,
          zIndex: -1,
        }}
      ></div>
    </section>
  )
}

// canvas components goes here
const R3F = () => {
  return (
    <>
      <Shader />
    </>
  )
}

const Page = () => {
  return (
    <>
      {/* @ts-ignore */}
      <R3F r3f />
      <DOM />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
