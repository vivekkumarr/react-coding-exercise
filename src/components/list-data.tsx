import React from 'react';

function ListData(props: any) {
  return (
        <li className="listItem">
        {
            `${props.item[1].name} |  ${props.item[1].category} | ${props.item[1].price} | ${props.item[1].tax} | ${props.item[1].available}`
        }
        </li>
  );
}

export default ListData;
