import vSlickMonitoring from '@/components/vComponents/v-slick-monitoring/v-slick-monitoring'

export default {
  name: 'monitoring',
  components: {
    vSlickMonitoring
  },
  data () {
    return {
      sliderItems: [
        { 
          id: 1,
          name: 'img1',
          img: 'selhoztech.gif',
          title: 'Агропромышленный комплекс',
          text: 'В агропромышленной сфере, популярность GPS мониторинга сельхозтранспорта растет с каждым днем. Это не удивительно, учитывая решения, которые предоставляет данная система. Самое главное ­– она позволяет экономить. Расходы на бензин и смазочные материалы, уменьшаются больше чем на 30%.'
        },
        { 
          id: 2,
          name: 'img2',
          img: 'legkovoi_transport.jpeg',
          title: 'GPS мониторинг легкового транспорта',
          text: 'Система GPS мониторинга легкового транспорта имеет множество вариантов оснащения, способных упростить управление и слежение за вашими транспортными средствами.'
        },
        { 
          id: 3,
          name: 'img3',
          img: 'courier.jpg',
          title: 'Персональный мониторинг',
          text: 'Если у вас есть дети или престарелые родственники, знать о местоположение которых не просто интересно, но иногда необходимо – система персонального GPS мониторинга именно для вас.'
        },
        { 
          id: 4,
          name: 'img4',
          img: 'gps_monitoring.jpg',
          title: 'Мониторинг грузоперевозок',
          text: 'Задачей компаний перевозчиков является доставить груз по месту назначения, в целости и сохранности, и при этом, обязательно, в установленные сроки.'
        },
        { 
          id: 5,
          name: 'img5',
          img: 'gruz.jpg',
          title: 'Дистрибуция',
          text: 'В наше время все более обыденными становятся такие понятия, как транспортная логистика, мониторинг, мониторинг в дистрибуции, контроль грузоперевозок.'
        },
        { 
          id: 6,
          name: 'img6',
          img: 'stroi.jpg',
          title: 'Строительный комплекс',
          text: 'Огромным классом транспортных средств является строительная, карьерная и спецтехника. Они используются на многих промышленных предприятиях, в добывающей сфере, строительном и складском хозяйстве.'
        },
        { 
          id: 7,
          name: 'img7',
          img: 'bus.jpg',
          title: 'Мониторинг пассажироперевозок',
          text: 'GPS мониторинг пассажирского транспорта — эффективный способ управления и контроля для любой компании, которая специализируется на пассажирских перевозках.'
        },
        { 
          id: 8,
          name: 'img8',
          img: 'communal.jpg',
          title: 'Коммунальные службы',
          text: 'Сегодня все компании пытаются контролировать работу своих сотрудников, оптимизировать затраты и экономить время. Не исключением являются и коммунальные службы, работа которых является, беспрекословно, важной для любого города.'
        },
        { 
          id: 9,
          name: 'img9',
          img: 'finance.jpg',
          title: 'Финансовый сектор',
          text: 'GPS мониторинг является сегодня неотъемлемой частью всех компаний, которые имеют дело с перевозками пассажиров или грузов. Банки и другие учреждения финансового сектора не являются исключением.'
        },
        { 
          id: 10,
          name: 'img10',
          img: 'avia.jpg',
          title: 'Авиа и водный транспорт',
          text: 'GPS мониторинг транспорта с каждым днем становится все более популярным инструментом контроля и слежения за всеми видами транспорта. Не исключением является и контроль водного транспорта.'
        }
      ]
    }
  }
}