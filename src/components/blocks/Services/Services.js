import vSlickServices from '@/components/vComponents/v-slick-services/v-slick-services'

export default {
  name: 'services',
  components: {
    vSlickServices
  },
  data () {
    return {
      sliderItems: [
        {
          id: 1,
          name: 'post1',
          img: 'electrobus.jpg',
          title: 'Мониторинг транспорта',
          text: 'Благодаря такой системе как GPS мониторинг, стала доступной система отслеживания транспортных средств и других движущихся объектов в реальном времени.'
        },
        {
          id: 2,
          name: 'post2',
          img: 'roads.jpg',
          title: 'Маршрутизация',
          text: 'Wialon Logistics – это уникальное решение, которое помогает оптимизировать транспортный процесс и организовать перевозки с минимизацией затрат.'
        },
        {
          id: 3,
          name: 'post3',
          img: 'harvester.jpg',
          title: 'Aгромодуль',
          text: 'Система GPS мониторинга в связке с дополнением «Агромодуль» — инструмент эффективного управления и контроля для сельскохозяйственных предприятий.'
        },
        {
          id: 4,
          name: 'post4',
          img: 'monitors.jpg',
          title: 'Персональный мониторинг',
          text: 'Персональный мониторинг – это мониторинг местонахождения двигающихся объектов, которыми может быть персонал, близкие люди, домашние животные.'
        },
        {
          id: 5,
          name: 'post5',
          img: 'fuel.jpg',
          title: 'Контроль топлива',
          text: 'Инновационная техническая GPS система контроля топлива является надёжной и эффективной комплексной защитой грамотного расхода горючего'
        },
        {
          id: 6,
          name: 'post6',
          img: 'cards.png',
          title: 'Топливные карты',
          text: 'На сегодняшний день, все большей популярностью пользуются топливные карты, которые водители получают на предприятиях.'
        },
        {
          id: 7,
          name: 'post7',
          img: 'reestr.jpg',
          title: 'Специальные услуги',
          text: 'Специальные услуги компании'
        },
        {
          id: 8,
          name: 'post8',
          img: 'security.jpg',
          title: 'Безопасность транспорта',
          text: 'Спутниковая противоугонная система есть одним из самых эффективных способов решения в области защиты транспорта от угонов.'
        },
        {
          id: 9,
          name: 'post9',
          img: 'CCTV.jpg',
          title: 'Видеонаблюдение',
          text: 'Видеонаблюдение­ – один из самых популярных методов в сфере безопасности. Его используют для контроля безопасности офиса, частного дома, дачи.'
        },
        {
          id: 10,
          name: 'post10',
          img: 'building.jpg',
          title: 'Мониторинг стационарных объектов',
          text: 'Установив систему мониторинга помещений, вы сможете дистанционно следить за различными производственными процессами.'
        }
      ]
    }
  }
}