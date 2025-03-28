import { useRecoilValue } from 'recoil'

import html2canvas from 'html2canvas'

import { styleState } from 'states/tool'

import Tools from './Tools'
import ImageViewer from './ImageViewer'

import styles from './imageMaker.module.scss'

const ImageMaker = () => {
  const { width, height } = useRecoilValue(styleState)

  const handleCapture = () => {
    const canvasTarget = document.getElementById('canvas')

    if (!canvasTarget) return

    html2canvas(canvasTarget, { width, height, scale: 1 }).then((canvas) => {
      const today = new Date()
      const todayDate = `${today.getFullYear()}_${today.getMonth()}_${today.getDate()}`
      const link = document.createElement('a')

      document.body.appendChild(link)
      link.href = canvas.toDataURL('image/png')
      link.download = `${todayDate}_vling_thumnail`
      link.click()

      document.body.removeChild(link)
    })
  }

  return (
    <section id={styles.content}>
      <h1 className='blind'>Vling Thumnail Maker</h1>

      <div className={styles.container}>
        <div className={styles.title}>😎 Vling의 유튜브 썸네일 생성기 😎</div>
        <div className={styles.subtitle}> 유튜브 썸네일을 간편하게 만들어요!</div>
        <ImageViewer />
        <Tools />

        <div className={styles.download_container}>
          <button type='button' onClick={handleCapture} className={styles.download_button}>
            DownLoad
          </button>
        </div>
      </div>
    </section>
  )
}
export default ImageMaker
