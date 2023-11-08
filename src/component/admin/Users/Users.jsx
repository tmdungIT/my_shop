import React from 'react';
import './Users.css'

const Users = (props) => {
    return (
      <> 
      <div className="Users">
        <h1>Users</h1>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Users
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Users</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h6>Users Name</h6>
                <input type="text" placeholder='Enter Users name' />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Users-table">
        <table class="table table-striped ">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">User first name</th>
              <th scope="col">User last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">User Phone number</th>
              <th scope="col" class="table-icon">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Anh</td>
              <td>Pham</td>
              <td>anhpham123@gmail.com</td>
              <td>20 Le Duan, Danang</td>
              <td>+84 0123456789</td>
              <td class="table-icon">
                <i class="fa-solid fa-trash-can"></i>
                <i class="fa-solid fa-pencil"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Quang Thanh</td>
              <td>Tran</td>
              <td>Quangthanh212@gmail.com</td>
              <td>36 Hung Vuong, Tam Ky</td>
              <td>+84 0999986782</td>
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

export default Users;