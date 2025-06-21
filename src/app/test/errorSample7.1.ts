// Kiểm tra thủ công eslint, format:
//npm run lint
//npm run format
// Kiểm tra tự động eslint, format trước khi commit:
//npm run lint:fix
// Tạo message commit chuẩn:
// sau khi git add ., thì chạy lệnh "npx cz", hoặc commit sai thì sẽ hiện ra thông báo lỗi commit message

// Vi du sai
// const sayHello = (name:any)=> {
//     console.log( "Hello, " +      name )
// }

// sayHello("Tuyen")

// const sayHello = (name: string) => {
//   console.log('Hello, ' + name);
// };

// sayHello('Tuyen');

const sayHello = (name: string) => {
  console.log('Hello, ' + name);
};

sayHello('Tuyen');
sayHello('Pie');
sayHello('Test');
