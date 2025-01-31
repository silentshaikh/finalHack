
function ProductColor({color}:{color:string}) {
    return (
      <div className={`size-[40px]  max-[1060px]:size-[35px]  max-[597px]:size-[40px] max-[380px]:size-[30px]`} style={{backgroundColor:color}}></div>
    );
  };
  export default ProductColor;