<template>
  <div class="addComment">
    <b>Добавить комментарий</b>
    <span>Ваш электронный адрес не будет опубликован. Обязательные для заполнения поля помечены *</span>
    <form novalidate>
      <textarea name="" id="" cols="30" rows="10" placeholder="Комментарий"></textarea>
      <input type="text" placeholder="Имя*">
      <input type="email" placeholder="Email*">
      <input type="url" placeholder="Сайт">
      <div>
        <input id="saveData" type="checkbox">
        <label for="saveData">Save my name, email, and website in this browser for the next time I comment.</label>
      </div>
      <button type="button">Отправить</button>
    </form>
  </div>
</template>