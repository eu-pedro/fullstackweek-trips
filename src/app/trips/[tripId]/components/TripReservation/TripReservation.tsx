'use client'
import Button from "@/components/Button/Button";
import DatePicker from "@/components/DatePicker/DatePicker";
import Input from "@/components/Input/Input";
import { Trip } from "@prisma/client";

interface TripReservationProps {
  trip: Trip
}

export function TripReservation({ trip }: TripReservationProps) {
  return (
    <div>
      <div className="flex flex-col px-5">
        <div className="flex gap-4">
          <DatePicker placeholderText="Data início" onChange={() => {}} className="w-full"/>
          <DatePicker placeholderText="Data final" onChange={() => {}} className="w-full"/>
        </div>

        <Input placeholder={`Número de hóspedes (máx: ${trip.maxGuests})`} className="mt-4" />

        <div className="flex justify-between mt-3">
          <p className="font-medium text-sm text-primaryDarker">Total: </p>
          <p className="font-medium text-sm text-primaryDarker">R$2.660</p>
        </div>

        <div className="pb-10 border-b border-b-grayLighter w-full">
         <Button className="mt-3 w-full ">Reservar agora</Button>
        </div>
      </div>
    </div>
  )
}