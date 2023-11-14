import React, { useEffect, useState } from 'react';
import './Categories.css'
import { db } from '../../../firebase';
import {
   collection, //lay ve bo suu tap
   addDoc, //them 1 category moi
   getDocs, // lay ve de hien thi ra
   doc, // doc tung pan
   deleteDoc, //xoa
   updateDoc //thay doi
} from 'firebase/firestore';

const Categories = (props) => {
   const categoriesCollectionRef = collection(db, "Categories"); {/** */ }
   const [nameCategory, setNameCategory] = useState("");
   const [categories, setCategories] = useState([]);
   const [update, setUpdate] = useState(false);
   const [editedCategory, setEditedCategory] = useState("");
   const [currentCategoryId, setCurrentCategoryId] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         const querySnapshot = await getDocs(categoriesCollectionRef)
         const categoriesData = [];
         querySnapshot.forEach((doc) => {
            categoriesData.push({ id: doc.id, ...doc.data() });
         });
         setCategories(categoriesData);
      };
      fetchData();
   }, [update]);

   const addCategory = async () => {
      try {
         await addDoc(categoriesCollectionRef, {
            name: nameCategory,
         });
         setNameCategory("");
         setUpdate(!update);
      } catch (error) {
         console.log("erro adding category: " + error);
      }
   }

   const deleteCategory = async (id) => {
      try {
         const categoryDocRef = doc(db, "Categories", id);
         await deleteDoc(categoryDocRef);
         setUpdate(!update);
      } catch (error) {
         console.log("error : " + error);
      }
   }

   const editCategory = (id) => {
      const updatedCategory = categories.find((category) => category.id === id);
      if (updatedCategory) {
         setEditedCategory(updatedCategory.nameCategory);
         setCurrentCategoryId(id);
      }
      else {
         console.error(`Category with id ${id} not found.`)
      }
   }

   const updateCategory = async () => {
      try {
         if (currentCategoryId === null) {
            console.error("no category selected for update");
            return;
         }
         const categoryDocRef = doc(db, "Categories", currentCategoryId);
         await updateDoc(categoryDocRef, {
            name: editedCategory,
         });
         setCurrentCategoryId(null);
         setEditedCategory("")
         setUpdate(!update)

      } catch (error) {
         console.error("error updating category: " + error);
      }
   }

   return (
      <>
         <div className="category">
            <h1>Categories</h1>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Add Categories
            </button>
            {/** Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Categories</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                        <h6>Categories Name</h6>
                        <input
                           type="text"
                           value={nameCategory}
                           id='categoryname'
                           className='add-input'
                           placeholder='Enter categories name'
                           onChange={(e) => setNameCategory(e.target.value)}
                        />
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button
                           type="button"
                           class="btn btn-primary"
                           onClick={addCategory}
                        >Save changes</button>
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
                  {categories.map((category, index) => (
                     <tr key={index}>
                        <th scope="row"> {index + 1}</th>
                        <td>
                           {currentCategoryId === category.id ? (
                              <input
                                 type="text"
                                 value={editedCategory}
                                 onChange={(e) => setEditedCategory(e.target.value)}
                              />
                           ) : (
                              category.name
                           )}
                        </td>

                        <td class="table-icon" >
                           <button
                              type="button"
                              class="btn btn-outline-danger"
                              onClick={() => deleteCategory(category.id)}
                           >
                              <i class="fa-solid fa-trash-can"></i>
                           </button>

                           {currentCategoryId === category.id ? (
                              <button
                                 type="button"
                                 class="btn btn-outline-success"
                                 onClick={() => updateCategory()}
                              >
                                 <i class="fa-solid fa-check"></i>
                              </button>
                           ) : (
                              <button
                                 type='button'
                                 class="btn btn-outline-warning"
                                 onClick={() => editCategory(category.id)}
                              >
                                 <i class="fa-solid fa-pen-fancy"></i>
                              </button>
                           )}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
};
export default Categories;