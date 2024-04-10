import ClipLoader from 'react-spinners/ClipLoader'
const override = {
  display: 'block',
  margin: '100px auto'
}
const Spinners = ({ loading }:{
  loading: boolean
}) => {
  return (
    <ClipLoader
      loading={loading}
      size={150}
      cssOverride={override}
      color='#6466f1'
    />
  )
}

export default Spinners
