import React from "react";

export default function ProductList(props) {
  return (
    <table className="table mt-3 table-striped">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Title</th>
          <th>Color</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.author}</td>
              <td>{product.color}</td>
              <td>{product.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
