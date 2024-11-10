import { AboutmePreview } from '../.nuxt/components';
<template>
  <div class="container">
    <div class="content">
      <img class="picture" src="/public/images/picture.jpg" alt="myself">
      <IconGym size="50px" color="white" class="gym_icon"/>

      <div class="introduction">
        <h3>Introduction</h3>
        <div class="content">
          <p>My name is <span class="name">Arnaut Vasseur</span>, I have been learning and improving in the web field since 2021.<br/><br/> Rather versatile, whether in the front-end or the back-end, I want to create innovative interactive websites that can respond to customer requests efficiently.</p>
        </div>
      </div>

      <div class="contact_me">
        <h3>Contact me</h3>
        <div class="content">
          <div class="mail">
            <svg class="icon" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 45.3125C3.625 45.3125 2.44833 44.8157 1.47 43.8221C0.491667 42.8284 0.00166667 41.6325 0 40.2344V9.76562C0 8.36914 0.49 7.17409 1.47 6.18047C2.45 5.18685 3.62667 4.68919 5 4.6875H45C46.375 4.6875 47.5525 5.18516 48.5325 6.18047C49.5125 7.17578 50.0017 8.37083 50 9.76562V40.2344C50 41.6309 49.5108 42.8268 48.5325 43.8221C47.5542 44.8174 46.3767 45.3142 45 45.3125H5ZM25 27.0947C25.2083 27.0947 25.4275 27.0626 25.6575 26.9982C25.8875 26.9339 26.1058 26.8391 26.3125 26.7139L44 15.4785C44.3333 15.2669 44.5833 15.0029 44.75 14.6863C44.9167 14.3698 45 14.0202 45 13.6377C45 12.7913 44.6458 12.1566 43.9375 11.7334C43.2292 11.3102 42.5 11.3314 41.75 11.7969L25 22.4609L8.25 11.7969C7.5 11.3314 6.77083 11.3212 6.0625 11.7664C5.35417 12.2116 5 12.8354 5 13.6377C5 14.0609 5.08333 14.4316 5.25 14.7498C5.41667 15.068 5.66667 15.3109 6 15.4785L23.6875 26.7139C23.8958 26.8408 24.115 26.9365 24.345 27.0008C24.575 27.0651 24.7933 27.0964 25 27.0947Z" fill="inherit"/>
            </svg>
            <p>vasseur.arnaut@gmail.com</p>
          </div>
          <div class="github">
            <svg class="icon" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_172_676)">
              <path d="M25 0C21.717 0 18.4661 0.662698 15.4329 1.95026C12.3998 3.23782 9.6438 5.12502 7.32233 7.50412C2.63392 12.3089 0 18.8256 0 25.6207C0 36.945 7.175 46.5528 17.1 49.9603C18.35 50.1653 18.75 49.371 18.75 48.6793V44.3494C11.825 45.8866 10.35 40.9162 10.35 40.9162C9.2 37.9442 7.575 37.15 7.575 37.15C5.3 35.5615 7.75 35.6127 7.75 35.6127C10.25 35.7921 11.575 38.2517 11.575 38.2517C13.75 42.146 17.425 40.9931 18.85 40.3782C19.075 38.7128 19.725 37.5855 20.425 36.945C14.875 36.3045 9.05 34.1011 9.05 24.3396C9.05 21.4957 10 19.2155 11.625 17.3964C11.375 16.7559 10.5 14.0914 11.875 10.6326C11.875 10.6326 13.975 9.94082 18.75 13.2459C20.725 12.6822 22.875 12.4004 25 12.4004C27.125 12.4004 29.275 12.6822 31.25 13.2459C36.025 9.94082 38.125 10.6326 38.125 10.6326C39.5 14.0914 38.625 16.7559 38.375 17.3964C40 19.2155 40.95 21.4957 40.95 24.3396C40.95 34.1267 35.1 36.2789 29.525 36.9194C30.425 37.7136 31.25 39.2765 31.25 41.6592V48.6793C31.25 49.371 31.65 50.1909 32.925 49.9603C42.85 46.5271 50 36.945 50 25.6207C50 22.2561 49.3534 18.9245 48.097 15.8161C46.8406 12.7076 44.9991 9.88322 42.6777 7.50412C40.3562 5.12502 37.6002 3.23782 34.5671 1.95026C31.5339 0.662698 28.283 0 25 0Z" fill="inherit"/>
              </g>
            </svg>
            <p>/ArnautVasseur</p>
          </div>
          <div class="linkedin">
            <svg class="icon" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_172_680)">
              <path d="M44.4444 0C45.9179 0 47.3309 0.585316 48.3728 1.62718C49.4147 2.66905 50 4.08213 50 5.55556V44.4444C50 45.9179 49.4147 47.3309 48.3728 48.3728C47.3309 49.4147 45.9179 50 44.4444 50H5.55556C4.08213 50 2.66905 49.4147 1.62718 48.3728C0.585316 47.3309 0 45.9179 0 44.4444V5.55556C0 4.08213 0.585316 2.66905 1.62718 1.62718C2.66905 0.585316 4.08213 0 5.55556 0H44.4444ZM43.0556 43.0556V28.3333C43.0556 25.9316 42.1015 23.6283 40.4032 21.9301C38.705 20.2318 36.4017 19.2778 34 19.2778C31.6389 19.2778 28.8889 20.7222 27.5556 22.8889V19.8056H19.8056V43.0556H27.5556V29.3611C27.5556 27.2222 29.2778 25.4722 31.4167 25.4722C32.4481 25.4722 33.4372 25.8819 34.1665 26.6112C34.8958 27.3406 35.3056 28.3297 35.3056 29.3611V43.0556H43.0556ZM10.7778 15.4444C12.0155 15.4444 13.2024 14.9528 14.0776 14.0776C14.9528 13.2024 15.4444 12.0155 15.4444 10.7778C15.4444 8.19444 13.3611 6.08333 10.7778 6.08333C9.53273 6.08333 8.33868 6.57792 7.4583 7.4583C6.57792 8.33868 6.08333 9.53273 6.08333 10.7778C6.08333 13.3611 8.19444 15.4444 10.7778 15.4444ZM14.6389 43.0556V19.8056H6.94444V43.0556H14.6389Z" fill="inherit"/>
              </g>
            </svg>
            <p>/in/arnaut-vasseur</p>
          </div>
        </div>
      </div>
    </div>

    <RouterLink to="/aboutme" class="link">
      <p>See More</p>
      <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928935C33.9526 0.538411 33.3195 0.538411 32.9289 0.928935C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-8.74228e-08 9L40 9L40 7L8.74228e-08 7L-8.74228e-08 9Z"
          fill="white"
        />
      </svg>
    </RouterLink>

    <IconGym size="80%" class="background_icon"/>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  z-index: 1;

  .content{
    height: 95%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    .gym_icon{
      position: absolute;
      top: 20px;
      right: 20px;
    }

    .picture{
      border-radius: 50%;
      width: 75px;
    }

    .introduction, .contact_me{
      width: 100%;
      
      h3{
        color: white;
        margin-bottom: 5px;
      }

      .content{
        height: auto;
        border-radius: 10px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        gap: 20px;

        .mail, .github, .linkedin{
          display: flex;
          align-items: center;
          gap: 10px;
        }

        p{
          font-size: 14px;
          line-height: normal;
        }
      }
    }
  }

  

  .link {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    color: white;
    gap: 10px;
  }
}

.background_icon {
  position: absolute;
  bottom: -5%;
  left: -5%;
  opacity: 0.3;
  z-index: -1;

  * {
    fill: white;
  }
}
</style>