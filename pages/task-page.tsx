import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { getAllTasksData } from '../lib/fetch'
import useSWR from 'swr'
import axios from 'axios'
import { TASK } from '../types/Types'

interface STATICPROPS {
  staticTasks: TASK[]
}

const TaskPage: React.FC<STATICPROPS> = ({ staticTasks }) => {
  return (
    <Layout title="Todos">
      <p className="text-4xl">todos page</p>
    </Layout>
  )
}
export default TaskPage
