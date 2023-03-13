import FuelRequestsTable from "./table/FuelRequestsTable"
import axios from "../../axios/axios"
import {useEffect, useState} from "react"

const ManageRequestsView = () => {

    const [requests, setRequests] = useState([])


    const fetchRequests = async () => {

        return axios.get("/fuel-request").then(res => {
            setRequests(res.data)
        })
    }

    useEffect(() => {
        fetchRequests()
    }, [])

    return <div>
        <h1 className='mb-3'>Manage Fuel Requests</h1>
        <FuelRequestsTable requests={requests}/>
    </div>
}

export default ManageRequestsView
