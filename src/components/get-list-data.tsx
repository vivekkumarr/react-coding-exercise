import React from 'react';
import ListData from './list-data';
import {Link} from "react-router-dom";

function GetListData(props: any) {
  return (
    <ul>
      {
          Object.entries(props.menuData).map((item: any)=> <Link key={item[1].itemId} to={{ pathname: '/item', state: item[1] }}><ListData item={item}/></Link>)
      }
    </ul>
  );
}

export default GetListData;
