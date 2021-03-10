<template>
  <div class="whyUs">
    <div class="container">
      <div class="title">
        ПОЧЕМУ ИМЕННО МЫ
      </div>
      <div class="whyUs-content">
        <div class="whyUs-content__borderCircle">
          <!-- <i
            v-for="item in 5"
            :key="item"
            :class="{active: addClassActive}"
            @mouseenter="addClassActive = !addClassActive"
          >
          </i> -->
          <i :class="{active: addClassActive1}" @mouseenter="addClassActive1 = !addClassActive1, addClassActive2 = false, addClassActive3 = false, addClassActive4 = false, addClassActive5 = false"></i>
          <i :class="{active: addClassActive2}" @mouseenter="addClassActive2 = !addClassActive2, addClassActive1 = false, addClassActive3 = false, addClassActive4 = false, addClassActive5 = false"></i>
          <i :class="{active: addClassActive3}" @mouseenter="addClassActive3 = !addClassActive3, addClassActive1 = false, addClassActive2 = false, addClassActive4 = false, addClassActive5 = false"></i>
          <i :class="{active: addClassActive4}" @mouseenter="addClassActive4 = !addClassActive4, addClassActive1 = false, addClassActive2 = false, addClassActive3 = false, addClassActive5 = false"></i>
          <i :class="{active: addClassActive5}" @mouseenter="addClassActive5 = !addClassActive5, addClassActive1 = false, addClassActive2 = false, addClassActive3 = false, addClassActive4 = false"></i>
          <div class="whyUs-content__circle">
            <div :class="{active: addClassActive1}">
              <b>Лидер на рынке</b>
              <p>Компания mOnline занимает лидирующие позиции на рынке Украины в области GPS-мониторинга.</p>
            </div>
            <div :class="{active: addClassActive2}">
              <b>Непрерывный контроль</b>
              <p>Спутниковое слежение позволяет контролировать и прослеживать в реальном времени различные типы объектов, людей и животных.</p>
            </div>
            <div :class="{active: addClassActive3}">
              <b>Креативная команда</b>
              <p>Мы собирали команду профессионалов, которые создают и постоянно усовершенствуют современные коммуникации и технологии.</p>
            </div>
            <div :class="{active: addClassActive4}">
              <b>Широкий спектр задач</b>
              <p>GPS-контроль транспортного средства дает возможность решить широкий спектр задач.</p>
            </div>
            <div :class="{active: addClassActive5}">
              <b>100% гарантии</b>
              <p>За время работы компания зарекомендовала себя как специализированное предприятие по внедрению спутникового мониторинга на разных видах транспорта.</p>
            </div>
          </div>
        </div>
        <div class="whyUs-content__mobileList">
          <div class="whyUs-content__mobileList--item">
            <i></i>
            <div>
              <b>Лидер на рынке</b>
              <p>Компания mOnline занимает лидирующие позиции на рынке Украины в области GPS-мониторинга.</p>
            </div>
          </div>
          <div class="whyUs-content__mobileList--item">
            <i></i>
            <div>
              <b>Непрерывный контроль</b>
              <p>Спутниковое слежение позволяет контролировать и прослеживать в реальном времени различные типы объектов, людей и животных.</p>
            </div>
          </div>
          <div class="whyUs-content__mobileList--item">
            <i></i>
            <div>
              <b>Креативная команда</b>
              <p>Мы собирали команду профессионалов, которые создают и постоянно усовершенствуют современные коммуникации и технологии.</p>
            </div>
          </div>
          <div class="whyUs-content__mobileList--item">
            <i></i>
            <div>
              <b>Широкий спектр задач</b>
              <p>GPS-контроль транспортного средства дает возможность решить широкий спектр задач.</p>
            </div>
          </div>
          <div class="whyUs-content__mobileList--item">
            <i></i>
            <div>
              <b>100% гарантии</b>
              <p>За время работы компания зарекомендовала себя как специализированное предприятие по внедрению спутникового мониторинга на разных видах транспорта.</p>
            </div>
          </div>
        </div>
        <div class="whyUs-content__text">
          <b>ГЛАВНЫЕ ПРИЧИНЫ ВЫБРАТЬ НАС</b>
          <ul>
            <li>
              Компания mOnline занимает лидирующие позиции на рынке Украины в области GPS-мониторинга.
            </li>
            <li>
              Спутниковое слежение позволяет контролировать и прослеживать в реальном времени различные типы объектов, людей и животных.
            </li>
            <li>
              Мы собирали команду профессионалов, которые создают и постоянно усовершенствуют современные коммуникации и технологии.
            </li>
            <li>
              GPS-контроль транспортного средства дает возможность решить широкий спектр задач.
            </li>
            <li>
              За время работы компания зарекомендовала себя как специализированное предприятие по внедрению спутникового мониторинга на разных видах транспорта.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'why-us',
    data () {
      return {
        addClassActive1: false,
        addClassActive2: false,
        addClassActive3: false,
        addClassActive4: false,
        addClassActive5: false,
      }
    },
    // methods: {
    //   toggleContent () {
    //     const status = document.querySelector('.change')
    //     if (status.classList.contains('active')) {
    //       status.classList.remove('active')
    //     } else {
    //       status.classList.add('active')
    //     }
    //   }
    // }
  }
</script>