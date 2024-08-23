let textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", () => {
  let regexIttem_textArea = /:\)/g;
  let regexIttem_textArea2 = /:\(/g;
  let regexIttem_textArea3 = /:D/g;

  let textarea_value = textarea.value;

  let replace_Item = textarea_value.replace(regexIttem_textArea, "😂");

  let replace_Item2 = replace_Item.replace(regexIttem_textArea2, "🥲");

  let replace_Item3 = replace_Item2.replace(regexIttem_textArea3, "😍");

  textarea.value = replace_Item3;

  console.log(replace_Item2);
});
