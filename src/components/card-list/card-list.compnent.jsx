import Card from '../card/card.component';
import './card-list.style.css';
const Cardlist = ({ filteredData }) => {
    return (
        <div className='card-list'>
            {
            filteredData.map((data) => {
                const { id } = data;
                return <Card cars = {data} key = {id} />
            })
            }
               
        </div>
    )
}
export default Cardlist;