import React from 'react'

function Form() {
  return (
    <form>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name" />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" placeholder="Description" />
        </div>
        <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="number" className="form-control" id="price" placeholder="Price" />
        </div>
        <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input type="number" className="form-control" id="stock" placeholder="Stock" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form