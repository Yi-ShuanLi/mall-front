<script>
export default {
    
}
</script>

<template>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <p class="loginPageText">管理者註冊</p>
    <form action="" class="dataForm">
      <label for="" class="emailTitle">Email：</label>
        <div class="emailInputArea">
            <i class="fa-regular fa-envelope"></i>
            <input type="email" class="emailInput" placeholder="info.sujtesn@gmail.com" style="width: 250px;" required>
        </div>
        <div class="passwordInputArea">
            <label for="" class="passwordTitle"> Password：</label>
            <input type="password" class="passwordInput" placeholder="Sujit Sen" style="width: 250px;">
        </div>
        <div class="selectPart">
            <a href="/" class="signUpButton">返回登入</a>
          <p>　　　　　　　　</p>
          <a href="/" class="signUpButton">送出申請</a>
        </div>
    </form>
</template>

<style lang="scss" scoped>
    
    $button-width: 120px;
$button-height: 40px;
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: rgb(153, 204, 255);
}


.loginPageText {
    border: 2px solid black;
    width: 100%;
    height: 15vh;
    text-align: center;
    font-size: 5vw;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0%;
}

.dataForm {
    border: 2px solid black;
    width: 100%;
    //padding-left: 40%;


    .emailTitle {
        border: 2px solid black;
        font-size: 2vw;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 1vh;
    }


    .emailInputArea {
        order: 2px solid black;
        position: relative;
        display: inline-block;
        margin-bottom: 1%;

        .fa-envelope {
            border: 2px solid black;
            position: absolute;
            left: 3px;
            top: calc(50% - 0.5em);
        }

        .emailInput {
            border: 2px solid black;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 14px;
            padding-left: 24px;
            border-radius: 10px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }

    .passwordTitle {
       border: 2px solid black;
        font-size: 2vw;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 1vh;
    }

    .passwordInputArea {
        border: 2px solid black;
        margin-bottom: 1%;

        .passwordInput {
            border: 2px solid black;
            outline: none;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 14px;
            padding-left: 10px;
            border-radius: 10px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }

    .selectPart {
        border: 2px solid black;
        display: flex;
        justify-content:center;
        align-items: center;
        height: 10vh;
        width: 100vw;

        .signUpButton {
            font-family: Arial, Helvetica, sans-serif;
            border: 2px solid black;
            display: inline-block;
            padding: 10px 20px; // 設置按鈕內部填充
            border: none;
            background-color: #007bff; // 背景顏色
            color: #fff; // 文字顏色
            font-size: 16px; // 文字大小
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.3s ease; // 滑鼠懸停時的過渡效果

            // 設置按鈕的寬度和高度
            width: $button-width;
            height: $button-height;

            // 滑鼠懸停時的效果
            &:hover {
                background-color: #0056b3; // 暗一些的背景顏色
            }

            // 按鈕為禁用狀態時的樣式
            &:disabled {
                opacity: 0.5; // 降低不可用按鈕的不透明度
                cursor: not-allowed; // 將游標設置為禁止樣式
            }
        }


        .logInBotton {
            border: 2px solid black;
            display: inline-block;
            padding: 10px 20px; // 設置按鈕內部填充
            border: none;
            background-color: #007bff; // 背景顏色
            color: #fff; // 文字顏色
            font-size: 16px; // 文字大小
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.3s ease; // 滑鼠懸停時的過渡效果

            // 設置按鈕的寬度和高度
            width: $button-width;
            height: $button-height;

            // 滑鼠懸停時的效果
            &:hover {
                background-color: #0056b3; // 暗一些的背景顏色
            }

            // 按鈕為禁用狀態時的樣式
            &:disabled {
                opacity: 0.5; // 降低不可用按鈕的不透明度
                cursor: not-allowed; // 將游標設置為禁止樣式
            }
        }
    }

  

}

</style>