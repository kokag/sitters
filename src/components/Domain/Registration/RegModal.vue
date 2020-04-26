<template>

  <div
    :class="$style.backgroundShadow"
  >
    <div :class="$style.regModel">
      <div :class="$style.topBox">
        <label><b>Создать новую учетную запись</b></label>
        <button
          :class="$style.closeButton"
          @click="close()"
        ><i class="fas fa-times"></i>
        </button>
      </div>
      <div :class="$style.inputBox">
        <label>Имя</label>
        <input
          :class="$style.inputId"
          type="text"
          placeholder="Имя"
          name="Имя"
          required
        >
        <label>Телефон</label>
        <input
          :class="$style.inputId"
          type="text"
          placeholder="Телефон"
          name="Телефон"
          required
        >
        <label>Пароль</label>
        <input
          :class="$style.inputId"
          type="text"
          placeholder="Пароль"
          name="Пароль"
          required
        >
        <label>Повторите пароль</label>
        <input
          :class="$style.inputId"
          type="text"
          placeholder="Повторите пароль"
          name="Повторите пароль"
          required
        >
      </div>
      <div :class="$style.regButtonBox">
        <button :class="$style.regButton">Зарегистрироваться</button>
      </div>
      <div :class="$style.textBox">
        <p :class="$style.license">Авторизуясь или регистрируясь, вы соглашаетесь с условиями обработки ваших персональных
                               данных и офертой</p>
        <p :class="$style.accountQuestion"><b>Уже есть аккаунт?</b></p>
      </div>
      <div :class="$style.loginButtonBox">
        <button :class="$style.loginButton">Войти</button>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'regModal',
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

.regModel {
  height: 738px;
  width: 700px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background-color: white;
  border-radius: 14px;
}

.topBox {
  display: flex;
  justify-content: space-between;
  margin: 26px 28px 0 50px;
  & label {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
}

.closeButton {
  font-size: 25px;
  border: none;
  cursor: pointer;
  color: green;
  background-color: inherit;
}

.inputBox {
  margin: 43px 48px 27px 48px;
  justify-content: space-between;
& label {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
}
}

.inputId {
  display: flex;
  flex-wrap: wrap;
  height: 46px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 17px;
  border-radius: 6px;
  border: solid 1px rgba(35, 31, 32, 0.14);
  background-color: #ffffff;
}

.regButtonBox {
  margin: 0 47px 0 50px;

}

.regButton {
  color: white;
  width: 100%;
  padding: 14px 0 14px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border-radius: 285px;
  background-color: #299f55;
}

.textBox {
  margin: 45px 110px 17px 110px;
  text-align: center;
}

.license {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: #2c2c2c;
  padding-bottom: 30px;
  margin: 0;
}

.accountQuestion {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin: 0;
}

.loginButtonBox {
  display: flex;
  justify-content: center;
  margin-bottom: 34px;
}

.loginButton {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 13px 98px;
  border-radius: 285px;
  border: solid 1px rgba(35, 31, 32, 0.14);
  background-color: #ffffff;
}


</style>
