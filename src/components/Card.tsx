type CardProps = {
  children: React.ReactNode,
  bg?: string
}

const Card = ({ children, bg = 'bg-gary-100' }: CardProps) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {children}
    </div >
  )
}

export default Card
