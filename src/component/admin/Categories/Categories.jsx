import React from 'react';
import './Categories.css'

const Categories = (props) => {
  return (
    <>
      <div className="category">
        <h1>Categories</h1>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Categories
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Categories</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h6>Categories Name</h6>
                <input type="text" placeholder='Enter categories name' />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-table">
        <table class="table table-striped ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">CATEGORY NAME</th>
              <th scope="col" class="table-icon">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Do the thao nam</td>
              <td class="table-icon">
                <i class="fa-solid fa-trash-can"></i>
                <i class="fa-solid fa-pencil"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Gel nang luong</td>
              <td class="table-icon">
                <i class="fa-solid fa-trash-can"></i>
                <i class="fa-solid fa-pencil"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Do the thao nu</td>
              <td class="table-icon">
                <i class="fa-solid fa-trash-can"></i>
                <i class="fa-solid fa-pencil"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Categories;