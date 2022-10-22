  import { useState } from "react";
  import allValidations from "../Helper/Helper";
  import { Alert } from "react-native";
  const GLOBAL = require('../Helper/Globals');
  import axios from "axios";

  const RegisterHook = () => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [email, setEmail] = useState("")
    const [fullname, setFullname] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [loading, setLoading] = useState(true)

    const userName = (username) => setUsername(username)
    const passWord = (password) => setPassword(password)
    const confirmPassword = (confirmpassword) => setConfirmpassword(confirmpassword)
    const eMail = (email) => setEmail(email)
    const fullName = (fullname) => setFullname(fullname)
    const phoneNumber = (phonenumber) => setPhoneNumber(phonenumber)
    const isLoading = (loading) => setLoading(loading)

      const signUp = () =>{
        var params = {
            password: password,
            languageId: "en-US", 
            couponCode: "", 
            username: username, 
            deviceToken: "", 
            fullName: fullname, 
            email: email, 
            notificationApp: "lingmoimtab", 
            phone: phonenumber
          }

        if(allValidations()){
        
        axios.post(GLOBAL.BASE_URL+'user',params
        ).then(function (response) {
            if(response.data.status){
                console.log('we are testing axios',response.data);
                global.token=response.data.data
                navigation.navigate('MainMenuScreen')
                // return true
            }else{
                Alert.alert(response.data.message)
            }
          })
          .catch(function (error) {
              console.log(error);
          })

        }else{
            // return false
        }
      }
    
      const allValidations = () => {
         if(username.trim().length<1){
            Alert.alert('Username is Required')
          } 
          else if(confirmpassword.trim().length<1){
            Alert.alert('Confirm Password is Required')
          }
          else if(email.trim().length<1){
            Alert.alert('Email is Required')
          }
          else if(fullname.trim().length<1){
            Alert.alert('Full Name is Required')
          }
          else if(phonenumber.trim().length<1){
            Alert.alert('Phone Number is Required')
          } 
          else if(password!=confirmpassword){
            Alert.alert('Password should be same')
          } 
          else if(!validate(email)){
            Alert.alert('email is not in correct format')
          }else{
            return true
          }
      }

      const validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
          return false;
        }
        else {
          return true;
        }
      }

    return {
        userName,
        passWord,
        confirmPassword,
        eMail,
        fullName,
        phoneNumber,
        isLoading,
        signUp,
    };
  };
  
  export default RegisterHook;
  
 

 

