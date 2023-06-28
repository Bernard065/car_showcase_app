'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';
import SearchButton from './SearchButton';
import Image from 'next/image';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState('');

  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide an input");
    }
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar_item'>
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      <div className='searchbar_item'>
        <Image 
          src='/model-icon.png'
          alt='car model'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input 
          type='text'
          name='model'
          value={model}
          placeholder='Tiguan'
          onChange={(e) => setModel(e.target.value)}
          className='searchbar_input'
        />
         <SearchButton />
      </div>
      
    </form>
  )
}

export default SearchBar