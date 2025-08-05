"use client"

import styles from '@/styles/into-sekai.module.scss'
import { IntoTheSekai } from '@naru/untitled-library'
import { useRouter } from 'next/navigation'

const IntoSekai = () => {
  const router = useRouter();

  const jumpToTemp = () => {
    router.push('/temp');
  }

  return (
    <>
      <IntoTheSekai style={{ zIndex: 39 }} execEvent={jumpToTemp} />
      <div className={styles['full-screen']}>
        <p className={styles['announce-text']}>Tap to Start</p> 
      </div>
    </>
  )
}
export default IntoSekai;