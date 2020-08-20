<template>
  <div class="header">
    <div class="logo">
      <img alt="logo" src="../assets/video-service.svg"/>
      <div class="logo-text">Видеосервис</div>
    </div>

    <div class="search">
      <label>
        <input class="search-input" type="text" placeholder="Поиск...">
      </label>
      <button class="search-button">Найти</button>
    </div>

    <div class="login-and-login-button">
      <button
        v-if="loggedIn"
        @click="showLoginPopup"
        class="header-button"
      >
        Войти
      </button>

      <div v-if="notLoggedIn" class="header-button-logged-in">
        <label>
          <input class="login-input" type="text" v-model="name">
        </label>
        <span class="header-button-logged-in__off" @click="logOff">Выйти</span>
      </div>
    </div>

    <LoginPopup
      v-if="isLoginPopupVisible"
      @closePopup="closeLoginPopup"
    >
      <div class="popup-header">
        Вход
      </div>

      <div class="popup-content">
        <form action="">
          <div class="popup-content__input-wrapper">
            <label>
              <input v-model="login" class="popup-content__input" type="text" placeholder="Логин">
            </label>
          </div>
          <div class="popup-content__input-wrapper">
            <label>
              <input class="popup-content__input" type="text" placeholder="Пароль">
            </label>
          </div>
          <div class="checkbox">
            <Checkbox @checkboxToggle="toggleCheckbox" :isChecked="isChecked">Запомнить</Checkbox>
          </div>
        </form>
      </div>

      <div class="popup-footer">
        <button @click="logIn" class="header-button">Войти</button>
      </div>
    </LoginPopup>
  </div>
</template>

<script>
import LoginPopup from './LoginPopup'
import Checkbox from './Checkbox'

export default {
  name: 'Header',
  components: {
    Checkbox,
    LoginPopup
  },
  data () {
    return {
      isLoginPopupVisible: false,
      isChecked: false,
      name: '',
      login: '',
      password: ''
    }
  },
  methods: {
    toggleCheckbox () {
      this.isChecked = !this.isChecked
    },
    showLoginPopup () {
      this.isLoginPopupVisible = true
    },
    closeLoginPopup () {
      this.isLoginPopupVisible = false
      this.login = ''
      this.password = ''
    },
    logIn () {
      localStorage.name = this.login
      this.closeLoginPopup()
      this.$router.go(0)
    },
    logOff () {
      localStorage.name = ''
      this.$router.go(0)
    }
  },
  computed: {
    loggedIn () {
      return localStorage.name === ''
    },
    notLoggedIn () {
      return localStorage.name !== ''
    }
  },
  mounted () {
    document.body.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.closeLoginPopup()
      }
    })

    if (localStorage.name) {
      this.name = localStorage.name
    }
  },
  watch: {
    name (newName) {
      localStorage.name = newName
    }
  }
}
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: calc(1440px * 82%);
    /*min-width: 400px;*/
    max-width: 1180px;
    margin: 30px 0 0 130px;

    &-button {
      width: 113px;
      height: 38px;
      background: #E5261E;
      border-radius: 4px;
      color: #FFFFFF;
      border: none;
      outline: none;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      cursor: pointer;

      &:hover {
        background: #CC221B;
      }

      &-logged-in {
        margin-top: 10px;

        &__off {
          font-family: Rubik, sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          color: #E5261E;
          cursor: pointer;
          padding-left: 15px;
        }
      }
    }
  }

  @media (max-width : 1440px) {
    .header{
      max-width: 1185px;
      margin: 30px 0 0 115px;
    }

    .search {
      margin-left: 45px;
    }
  }

  @media (max-width : 1080px) {
    .header{
      width: 850px;
      padding-left: 70px;
      padding-bottom: 30px;
    }

    .header-button-logged-in__off {
      padding-left: 10px;
    }

    .login-and-login-button {
      padding-top: 2px;
    }
  }

  @media (max-width : 768px) {
    .header{
      width: 850px;
      padding-left: 60px;
      padding-bottom: 30px;
    }

    .login-input {
      padding-left: 10px;
    }

    .header-button-logged-in__off {
      padding-left: 10px;
    }
  }

  .logo {
    display: flex;

    &-text {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #333333;

      margin-left: 11px;
      padding-top: 8px;
    }
  }

  .search {
    width: 420px;
    height: 25px;
    display: flex;
    padding-top: 10px;

    &-input {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #828282;
      outline: none;
      border: none;
      border-bottom: 1px solid #333333;
      width: 320px;
      padding-left: 0;
      padding-bottom: 6px;

      &:focus {
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
      }
    }

    &-button {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: $red;
      border: none;
      background-color: white;
      margin-left: 32px;
      outline: none;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .popup {
    &-header {
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 33px;
      text-align: right;
      color: #333333;
    }

    &-content {
      margin-top: 24px;

      &__input {
        font-family: Rubik, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #828282;

        border: none;
        outline: none;

        /*&:active,*/
        &:focus {
          font-weight: 500;
          color: #333333;
        }

        &-wrapper {
          border-bottom: 1px solid #333333;
          margin-bottom: 24px;
        }
      }

      &__checkbox {
        float: left;
        margin-left: 50px;
      }
    }
  }

  .checkbox {
    margin-bottom: 110px;
  }

  .login-input {
    font-family: Rubik, sans-serif;
    width: 115px;
    height: 19px;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    outline: none;
  }
</style>
