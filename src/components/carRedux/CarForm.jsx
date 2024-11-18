import { useState } from "react"

import { useDispatch } from "react-redux"
import { addCar } from "../../store";

const CarForm = () => {
    const dispatch = useDispatch();
    const [ formData, setFormData ] = useState({
      id: '',
      name: '',
      price: '', 
    })

    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(formData)
      const id = Date.now()
      const newFormData = {...formData, id: id}
      dispatch(addCar(newFormData))
    }
    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({ ...formData, [name]: value })
    } 

    return (
      <div className="bg-gray-600 text-white flex flex-row items-center justify-center">
        <form className="flex flex-row gap-3 items-center justify-center m-2" onSubmit={handleSubmit}>
            <div>
                <label className="text-sm font-semibold">Car Name</label>
                <input type='text' name="name" value={formData.name} onChange={handleChange} className="input my-2" placeholder="Input text"/>
            </div>
            <div>
                <label className="text-sm font-semibold">Car Price</label>
                <input type='number' name="price" value={formData.price} onChange={handleChange} className="input my-2" placeholder="Input price"/>
            </div>
            <button type="submit" className="primary mt-3">Submit</button>
        </form>
      </div>
    )
  }
  
  export default CarForm
  