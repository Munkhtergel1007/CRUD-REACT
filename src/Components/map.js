import { MdEdit } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Button from './Button';

const Map = props => {
    return <div>
        {
            props.items.map(item => {
                return <div className="flex justify-between items-center my-2 px-4 py-2">
                    <p>{item.text}</p>
                    <div className="flex justify-betweem items-center">
                        <Button val={<MdEdit />} bg='gray' click={(e) => {
                            e.preventDefault()
                            props.editHandler(item.id)
                        }
                        } />
                        <Button val={<RiDeleteBin5Line />} click={(e) => {
                            e.preventDefault()
                            props.deleteHandler(item.id)
                        }
                        } />
                    </div>
                </div>
            })
        }
    </div>
}
export default Map