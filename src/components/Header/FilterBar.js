import React from 'react';

const FilterBar = ({ handleSearchChange, handleCatChange, handleSizeChange, handleReset }) => {
  const category = [
    { name: "men's pants", id: 1 },
    { name: "t-shirt", id: 2 },
    { name: "cap", id: 3 }
  ]
  const size = [
    { name: "s", id: 11 },
    { name: "m", id: 12 },
    { name: "l", id: 13 }
  ]
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <select onChange={handleCatChange} className="select select-bordered select-sm max-w-xs focus:outline-none capitalize">
          {
            category.map(cat => <option className='capitalize' key={cat.id} value={cat.name} >{cat.name}</option>)
          }
        </select>
        <select onChange={handleSizeChange} className="select select-bordered select-sm max-w-xs focus:outline-none capitalize">
          {
            size.map(s => <option className='capitalize' value={s.name} key={s.id}>{s.name}</option>)
          }
        </select>
        <button onClick={handleReset} className='btn btn-link btn-primary'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg><span>Reset</span>
        </button>
      </div>
      <div className="flex gap-2">
        <div className="form-control">
          <label className="input-group input-group-sm ">
            <span>Search</span>
            <input onChange={handleSearchChange} type="text" placeholder="Search..." className="input input-bordered input-sm focus:outline-none" />
          </label>
        </div>
        <button className='btn btn-primary btn-sm rounded-md'>Add To Cart</button>
      </div>
    </div>
  );
};

export default FilterBar;