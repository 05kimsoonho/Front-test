function signUpCheck(){

    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let passwordCheck = document.getElementById("passwordCheck").value
    let area = document.getElementById("area").value
    let gender_man = document.getElementById("gender_man").checked
    let gender_woman = document.getElementById("gender_woman").checked
    let check = true;
    
    // 이름확인
    if(name===""){
      document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
      check = false
    }else{
      document.getElementById("nameError").innerHTML=""
    }
    
    if(check){
      document.getElementById("idError").innerHTML=""
      document.getElementById("nameError").innerHTML=""
      document.getElementById("passwordError").innerHTML=""
      
      //비동기 처리이벤트
      setTimeout(function() {
        alert("가입이 완료되었습니다.")
    },0);
    }
  }