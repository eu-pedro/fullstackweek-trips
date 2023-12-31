'use client'
import { TripItem } from '@/components/TripItem/TripItem'
import { Trip } from '@prisma/client'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface GetTripsParams {
  text: string
  starDate: Date | null
  budget?: string
}

export default function Trips() {
  const [trips, setTrips] = useState<Trip[]>([])
  const searchParams = useSearchParams()

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch(
        `/api/trips/search?text=${
          searchParams.get('text') ?? ''
        }&starDate=${searchParams.get('starDate')}&budget=${searchParams.get(
          'budget',
        )}`,
      )

      const data = await response.json()
      setTrips(data)
    }

    fetchTrips()
  }, [searchParams])

  return (
    <div className="container mx-auto flex flex-col p-5 items-center lg:text-[2.5rem] lg:items-start">
      <h1 className="primaryDarker font-semibold text-xl lg:mt-6">
        {trips.length
          ? 'Hospedagens Encontradas'
          : 'Não encontramos nenhuma viagem! =('}
      </h1>
      <h2 className="text-grayPrimary font-medium mb-5">
        Listamos as melhores viagens para você!
      </h2>

      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:gap-10 lg:mt-6 lg:w-full lg:text-left lg:pb-16">
        {trips.map((trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  )
}
