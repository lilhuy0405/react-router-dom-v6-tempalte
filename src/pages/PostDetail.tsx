import { useParams } from 'react-router-dom'

const PostDetail = () => {
  const params = useParams()
  const { id } = params
  return (
    <h1>Post detail {id}</h1>
  )
}

export default PostDetail
