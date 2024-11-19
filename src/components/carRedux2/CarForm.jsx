import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { addNewCar, changeName, changeCost } from "../../store";

const CarForm = () => {
    const dispatch = useDispatch();
    // const { name, cost } = useSelector((state) => {
    //   return { 
    //     name: state.form.name,
    //     cost: state.form.cost
    //   }
    // })

    const name = useSelector((state) => state.form.name);
    const cost = useSelector((state) => state.form.cost);

    const [ formData, setFormData ] = useState({
      id: '',
      name: '',
      cost: '', 
    })

    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(formData)
      const id = Date.now()
      const newFormData = {...formData, id: id}
      dispatch(addNewCar(newFormData))
      
      //extrareduceronaddcar
      // dispatch(changeName(''))
      // dispatch(changeCost(0))
    }
    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({ ...formData, [name]: value })
      if(name === "name"){
        dispatch(changeName(value))
      }
      else if(name === "cost"){
        dispatch(changeCost(value))
      }
    } 

    return (
      <div className="bg-gray-600 text-white flex flex-row items-center justify-center">
        <form className="flex flex-row gap-3 items-center justify-center m-2" onSubmit={handleSubmit}>
            <div>
                <label className="text-sm font-semibold">Car Name</label>
                <input type='text' name="name" value={name} onChange={handleChange} className="input my-2" placeholder="Input text"/>
            </div>
            <div>
                <label className="text-sm font-semibold">Car Price</label>
                <input type='number' name="cost" value={cost || ''} onChange={handleChange} className="input my-2" placeholder="Input price"/>
            </div>
            <button type="submit" className="primary mt-3">Submit</button>
        </form>
      </div>
    )
  }
  
  export default CarForm
  