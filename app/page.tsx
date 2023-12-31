import { CustomFilter, SearchBar } from '@/components'
import CarCard from '@/components/CarCard';
import Hero from '@/components/Hero'
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types';
import { fetchCars } from '@/utilis'
import Image from 'next/image'

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home_text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore your favorite cars</p>
        </div>

        <div className='home_filters'>
          <SearchBar />

          <div className='home_filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home_cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home_error-container'>
            <h2 className='text-black text-xl font-bold'>
              Oops, no cars
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
