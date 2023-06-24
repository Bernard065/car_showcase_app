import { CustomFilter, SearchBar } from '@/components'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
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
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  )
}
