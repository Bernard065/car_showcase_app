'use client'
import { CarProps } from "@/types"

interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div>CarCard</div>
  )
}

export default CarCard