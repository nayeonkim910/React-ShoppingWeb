import React, {useState} from 'react';
import { uploadImg } from '../api/cloudUploader';
import useProducts from '../hooks/useProducts';


export default function Admin() {
    const [product,setProduct] = useState({});
    const [file,setFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [success, setSuccess] = useState(false);
    const {addProduct} = useProducts();

    const handleChange=(e)=>{
        const {name,value,files} = e.target;
        if(name==='imgFile'){
            setFile(files&&files[0]);
            return;
        }
        setProduct((prev)=>({...prev,[name]:value}))
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsUploading(true);
        uploadImg(file) 
        .then((url)=> {
            addProduct.mutate({product,url},
                 {onSuccess:()=>{
                     setSuccess(true);
                     setTimeout(()=>{setSuccess(false);},3000);
                 }}
            );
        }).finally(()=>setIsUploading(false));
    }

    return (
        <section className='h-full w-full text-center mt-48 '>
            {success&&<p>업로드 되었습니다</p>}
            <h1 className='text-2xl  font-semibold pt-7 '>상품 등록 페이지</h1>
            <section className='bg-zinc-100 justify-center  p-5 m-auto'>
            {file && <img className='w-80 h-72 m-auto pb-3 ' src={URL.createObjectURL(file)} alt='imgfile'/> }
                <form onSubmit={handleSubmit} className='flex flex-col p-5 w-3/6 m-auto'>
                    <input 
                    type="file" 
                    accept='image/*' 
                    name='imgFile' required onChange={handleChange}/>
                    <input 
                    type="text" 
                    name='title' 
                    value={product.title|| ''}
                    placeholder='상품명을 입력하세요' required onChange={handleChange}/>
                    <input 
                    type="number" 
                    name='price'
                    placeholder='가격을 입력하세요'required onChange={handleChange}/>
                    <input 
                    type="text" 
                    name="category"
                    value={product.category || ''} 
                    placeholder='카테고리(glasses/sun 1택)' required onChange={handleChange}/>

                    <input 
                    type="text"
                    name='description'
                    value={product.description ||''}
                    placeholder='상품 설명'  required onChange={handleChange}/>

                    <input 
                    type="text"
                    name='option'
                    value={product.option ||''}
                    placeholder='옵션은 ,로 구분하세요' required onChange={handleChange} />
                    <button className='bg-red-800 font-semibold p-4 text-white hover:bg-red-300' disabled={isUploading}>{isUploading?'uploading중...':'상품등록하기'}</button>
                </form>
        </section>
        </section>
    );
}

