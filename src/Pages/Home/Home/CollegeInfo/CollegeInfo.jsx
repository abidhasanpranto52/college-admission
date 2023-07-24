import React from 'react';

const CollegeInfo = () => {
    return (
        <div>
            <div className="mx-auto text-center md:w-4/12">
        <h3 className="text-3xl text-amber-950 rounded-full capitalize border-y-4 border-t-lime-400 border-b-red-400 py-4">---- Colleges Information ----</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center' >
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
      </div>
        </div>
    );
};

export default CollegeInfo;