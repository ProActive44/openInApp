import React from "react";

const AfterUpload = () => {
  return (
    <div className="p-10">
      <div className="text-left font-semibold text-xl">
        <p>Uploads</p>
      </div>

      <div className="my-10">
        <table className="w-full lastTable">
          <thead className="border h-10">
            <tr>
              <th>SI.NO</th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Add Tags</th>
              <th>Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((ele, idx) => {
              return (
                <tr key={idx}>
                  <td>{ele}</td>
                  <td>
                    <a href="">www.google.com</a>
                  </td>
                  <td>prefixsample</td>
                  <td>
                    <select>
                      <option>Select</option>
                      <option value="">Tag 1</option>
                      <option value="">Tag 2</option>
                      <option value="">Tag 3</option>
                      <option value="">Tag 4</option>
                      <option value="">Tag 5</option>
                    </select>
                  </td>
                  <td>Tag {ele}</td>
                </tr>
              );
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AfterUpload;
