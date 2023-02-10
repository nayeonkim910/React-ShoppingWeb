
import { initializeApp } from "firebase/app";
import { onAuthStateChanged ,getAuth, signInWithPopup, GoogleAuthProvider,signOut  } from "firebase/auth";
import { getDatabase, ref, get,set,remove} from "firebase/database";
import {v4 as uuidv4} from 'uuid';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);


export function login(){
      signInWithPopup(auth, provider)
      .catch((error) =>console.error(error));
}

//한번계정연동했던 아이디라도, 다시로그인할때 login창 열리도록
provider.setCustomParameters({
    prompt: 'select_account',
});  

export function logout(){
     signOut(auth)
     .catch((error)=>console.error(error));
}

//user 상태 변경 login,logout
export function userStateChange(callbackFn){
  onAuthStateChanged(auth, async(user) => {
        const updatedUser = user? await adminUser(user):null;
        callbackFn(updatedUser)
      });
}

// 제품관련
export async function addProduct(product,imgUrl){
  const id = uuidv4();
   return set(ref(database,`shop/${id}`),{
    ...product,
    id,
    price:parseInt(product.price),
    image:imgUrl,
    option:product.option.split(','),
  });
}

//상품가져오기
export async function getProducts(){
    return get(ref(database, 'shop'))
          .then(snapshot=>{
            if(snapshot.exists()){
             return Object.values(snapshot.val());
            }
     return [];
    })
}
  //admin계정인지 체크하고 업뎃해서 객체 보내줌
async function adminUser(user){
return get(ref(database, 'admin')).then((snapshot)=>{
  if (snapshot.exists()) {
    const admin = snapshot.val();
    const isAdmin = admin.includes(user.uid);
    return {...user,isAdmin};
  }
  return user;
  });
}
//userId 확인 통해서 cart에 들어있는 item을 가져오기
export async function getCart(userId){
  return get(ref(database, `cart/${userId}`))
        .then(snapshot=>{
          const items = snapshot.val() || {};
          return Object.values(items);
        })
}
//cart에 추가하고 업데이트하기
export async function updateCart(userId,product){
  return set(ref(database,`cart/${userId}/${product.id}`),product);
}

//아이템 cart에서 삭제하기 
export async function deleteFromCart(userId,productId){
  return remove(ref(database,`cart/${userId}/${productId}`));
}
