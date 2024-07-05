'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { IoAirplaneSharp } from 'react-icons/io5'

type packageProps = {
  travel_Package_Id: string
  package_Details: string
  cost: number
  country: string
  region: string
  package_Name: string
  travel_Date: string
  userFeedbacks: Array<{
    comment: string
    comment_Date: string
    user: {
      user_Name: string
    }
  }>
  supliers: Array<{
    supplier_Name: string
    supplier_Phone: string
    service_Provided: string
  }>
}

const PackagesList = () => {
  const [packages, setPackages] = useState<packageProps[]>([])

  useEffect(() => {
    axios.get('http://localhost:5088/travelpackages').then((response) => {
      setPackages(response.data)
    }).catch(error => {
      console.error('Erro ao buscar os pacotes de viagem!', error)
    })
  }, [])

  return (
  <ul role="list" className="divide-y divide-gray-100">
    {
    packages.map((el) => {
      return (
        <li key={el.travel_Package_Id} className="flex justify-between gap-x-6 py-5">
          <div className="flex w-96 gap-x-4">
            <IoAirplaneSharp className='w-8 h-8' />
            <div className="min-w-0 flex-auto">
              <p className="text-md font-semibold leading-6 text-gray-900">{el.region} - {el.country}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{el.package_Details}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-lg leading-6 text-gray-900">{el.package_Name}</p>
              <p className="mt-1 text-md leading-5 text-gray-500">
                Horário: {new Date(el.travel_Date).toLocaleDateString().toString()} - {new Date(el.travel_Date).toLocaleTimeString().toString().slice(0, 5)}</p>
          </div>
        </li>
      )
    })
  }
</ul>
  )
}

export default PackagesList
