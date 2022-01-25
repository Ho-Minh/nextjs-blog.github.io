import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Introduction</title>
      </Head>
      <h1>Brief introduction of myself</h1>
      <section>
        Hello, my name is MinhHo and this is my first web.<br></br>
        My hobbies include: Coding and programming, doing calisthenics and sometime play games :3 <br></br>
        Nice to meet you all!
      </section>
    </Layout>
  )
}