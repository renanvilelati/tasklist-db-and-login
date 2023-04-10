import styled from "styled-components";

export const AdminContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100%;

h1{
  font-size: 48px;
  margin-bottom: 8px;
}

span{
  margin-bottom: 28px;
}

.button-link{
  color: #b4b8bb;
  text-decoration: none;
  margin: 14px 0;
  font-size: 14px;
}

a.register-link {
    color: #ccc;
    text-decoration: none;
    margin: 14px 0;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }

    span {
        color: #3366ff;
    }
}

.list {
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(20,20,20,0.50);
  border-radius: 4px;
  margin-bottom: 12px;
  justify-content: center;
  padding: 14px 0;
}

.list p {
  margin-bottom: 8px;
}

.list button {
  margin-right: 8px;
  border: 0;
  border-radius: 4px;
  padding: 4px;
}

.btn-delete {
  color: #FFCC23;
  background-color: transparent;
}

.btn-logout {
  position: absolute;
  bottom: 6%;
  left: 4%;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border: 0;
  font-weight: bold;
  background-color: rgba(200,40,40,0.40);
  color: #FAFAFA;
  transition: all .5s;
}

.btn-logout:hover {
  background-color: rgba(200,40,40,1);
  color: #FAFAFA;
  
}

`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;


input{
  border:0;
  margin-bottom: 12px;
  height: 36px;
  border-radius: 4px;
  padding: 0 8px;
}

button{
  height: 36px;
  border:0;
  border-radius: 4px;
  background-color: #3366ff;
  color: #FFF;
  font-size: 18px;
}

textarea{
  margin-bottom: 12px;
  border:0;
  height: 90px;
  padding: .5rem;
  resize: none;
  border-radius: 4px;
} 

`