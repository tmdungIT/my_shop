import React from 'react';
import './Order.css'

const Order = (props) => {
    return (
      <> 
      <div className="Order">
        <h1>Order</h1>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Order
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Order</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h6>Order Name</h6>
                <input type="text" placeholder='Enter Order name' />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Order-table">
        <table class="table table-striped ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product name</th>
              <th scope="col">User Name</th>
              <th scope="col">Price</th>
              <th scope="col">Address</th>
              <th scope="col">User Phone number</th>
              <th scope="col" class="table-icon">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ao chay bo-sieu nhe-sieu mat</td>
              <td>anhpham123</td>
              <td>800000</td>
              <td>20 Le Duan, Danang</td>
              <td>+84 0123456789</td>
              <td class="table-icon">
                <i class="fa-solid fa-trash-can"></i>
                <i class="fa-solid fa-pencil"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Gel nang luong nguyen ban</td>
              <td>anhpham123</td>
              <td>800000</td>
              <td>20 Le Duan, Danang</td>
              <td>+84 0123456789</td>
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

export default Order;