import React from "react";
import MyWonderfulComponent from "../component/MyWonderfulComponent";


const Page = ({str}) => {

   return (
      <MyWonderfulComponent 
          id="id" 
          options="options" 
          count={0} 
          color="color" 
          data="data"
          str={str}
        >
          I'm text from a component
      </MyWonderfulComponent>
   )
}


export function getServerSideProps (context) {
   const str = 'Hello from SSR'
   console.log(str)
   return {
     props: { str }
   }
 }


export default Page;