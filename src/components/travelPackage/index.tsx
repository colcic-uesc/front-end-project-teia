import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
        <div>
            <h1>Pacotes de Viagem</h1>
            <table>
                <thead>
                <tr>
                    <th>Detalhes do Pacote</th>
                    <th>Custo</th>
                    <th>País</th>
                    <th>Região</th>
                    <th>Nome do Pacote</th>
                    <th>Data de Viagem</th>
                    <th>Comentários</th>
                </tr>
                </thead>
                <tbody>
                {packages.map((pkg, index) => (
                    <tr key={index}>
                    <td>{pkg.package_Details}</td>
                    <td>{pkg.cost.toFixed(2)}</td>
                    <td>{pkg.country}</td>
                    <td>{pkg.region}</td>
                    <td>{pkg.package_Name}</td>
                    <td>{new Date(pkg.travel_Date).toLocaleDateString()}</td>
                    <td>
                        {pkg.userFeedbacks && pkg.userFeedbacks.length > 0
                          ? (
                            <ul>
                                {pkg.userFeedbacks.map((comment, idx) => (
                                    <li key={idx}>
                                        <p>{comment.comment}</p>
                                        <p><strong>Data:</strong> {new Date(comment.comment_Date).toLocaleDateString()}</p>
                                        <p><strong>Usuário:</strong> {comment.user ? comment.user.user_Name : 'Desconhecido'}</p>
                                    </li>
                                ))}
                            </ul>
                            )
                          : (
                        <p>Sem comentários</p>
                            )}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
  )
}

export default PackagesList