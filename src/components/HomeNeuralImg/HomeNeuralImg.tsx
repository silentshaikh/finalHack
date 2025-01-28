import Image from 'next/image';

function HomeNeuralImg() {
  return (
    <div>
      <Image
      className='max-[930px]:w-[400px] max-[790px]:w-[350px] max-[360px]:w-[300px] max-[320px]:w-[270px] max-[300px]:w-[240px]'
      src='/images/hero-cover-1.png'
      alt='summer'
      height={300}
      width={500}
      />
    </div>
  )
}

export default HomeNeuralImg
