// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name, id} = destinationsList

  return (
    <li className="card-item">
      <img src={imgUrl} className="card-image" alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
