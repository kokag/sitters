<template>
  <div
    :class="$style.backgroundShadow"
  >
    <div :class="$style.loginModel">
      <div :class="$style.topConteiner">
        <label><b>Авторизация</b></label>
        <button
          :class="$style.closeButton"
          @click="close()"
        ><i class="fas fa-times"></i>
        </button>
      </div>
      <div :class="$style.inputBox">
        <label>Эл. почта</label>
        <input
          :class="$style.inputLogin"
          type="text"
          placeholder="Логин"
          name="usarname"
          required
        >
        <label>Пароль</label>
        <input
          :class="$style.passwordInput"
          type="Пароль"
          placeholder="Пароль"
          name="psw"
          required
        >
      </div>
      <button
        :class="$style.loginButton"
        type="submit"
      >Войти
      </button>
      <div :class="$style.textBox">
      <p :class="$style.text">Авторизуясь или регистрируясь, вы соглашаетесь с условиями обработки ваших персональных
                               данных и офертой</p>
      <h2 :class="$style.regText"> Ещё не зарегистрированы?</h2>
    </div>
      <div :class="$style.registrationButtonBox">
        <button
          :class="$style.registrationButton"
          type="submit"
        >Регистрация
        </button>
      </div>

    </div>
  </div>

</template>

<script>

export default {
  name: 'loginModal',
  methods: {
    close () {
      this.$emit('close')
    }
  },
}

</script>

<style
  lang="scss"
  module
>


.backgroundShadow {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: fixed;
}

.loginModel {
  max-width: 700px;
  max-height: 563px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background-color: white;
  border-radius: 14px;
}


.topConteiner {
  margin: 27px 28px 36px 50px;
  display: flex;
  justify-content: space-between;

}

.closeButton {
  font-size: 25px;
  border: none;
  cursor: pointer;
  color: green;
  background-color: inherit;
}

.inputBox {
  margin: 0 48px 44px 49px;

 & label {
   font-size: 12px;
   color: #2c2c2c;
   font-family: 'Roboto', sans-serif;
 }
}

.inputLogin {
  height: 46px;
  width: 603px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 17px;
  border-radius: 6px;
  border: solid 1px rgba(35, 31, 32, 0.14);
  background-color: #ffffff;
}

.passwordInput {
  height: 46px;
  width: 603px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding-left: 14px;
  margin-top: 5px;
  border-radius: 6px;
  border: solid 1px rgba(35, 31, 32, 0.14);
  background-color: #ffffff;
}

.loginButton {
  padding: 14px 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-left: 50px;
  margin-right: 50px;
  width: 603px;
  border-radius: 285px;
  color: #ffffff;
  background-color: #299f55;
}

.loginButton:hover {
  opacity: 0.8;
}

.textBox {
  margin: 45px 110px 15px 110px;
}

.text {
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  color: #2c2c2c;
  text-align: center;
}

.regText {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-top: 30px;
  color: #2c2c2c;
}

.registrationButtonBox {
  display: flex;
  justify-content: center;
  padding-bottom: 34px;
}

.registrationButton {
  padding: 13px 53px;
  border-radius: 285px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border: solid 1px rgba(35, 31, 32, 0.14);
  background-color: #ffffff;
}

</style>
