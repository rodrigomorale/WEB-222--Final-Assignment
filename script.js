/** Add any JavaScript you need to this file. */

// *** header ***
function buildHeader() {
  let header = document.querySelector('#header');

  // left logo
  let container = document.createElement('div');
  container.id = 'logoContainer';
  container.className = 'leftHeader';

  let contItem = document.createElement('img');
  contItem.id = 'logoItem';
  contItem.className = 'logoClass';
  contItem.src = 'images/logo.gif';
  container.appendChild(contItem);
  header.appendChild(container);

  // center store description
  container = document.createElement('div');
  container.id = 'descriptionContainer';
  container.className = 'centerHeader';

  contItem = document.createElement('h1');
  contItem.id = 'descriptionItem';
  contItem.className = 'descriptionClass';
  contItem.innerHTML = "K-Nella <span id='descM'>Man's Store</span>";
  container.appendChild(contItem);
  header.appendChild(container);

  // right contact link
  container = document.createElement('div');
  container.id = 'contactContainer';
  container.className = 'rightHeader';

  contItem = document.createElement('p');
  contItem.id = 'contactItem';
  contItem.className = 'contactClass';

  let link = document.createElement('a');
  link.href = 'contact.html';
  link.id = 'contactLink';
  link.className = 'linkButton';

  let text = document.createTextNode('Contact');
  link.appendChild(text);
  contItem.appendChild(link);
  container.appendChild(contItem);
  header.appendChild(container);
}

// *** topMenu ***
function buildMenu(menuType) {
  let menu = document.querySelector('#' + menuType);

  let container = document.createElement('div');
  container.id = menuType + 'Container';
  container.className = menuType + 'Container';

  let menuList = document.createElement('ul');
  menuList.id = menuType + 'List';
  menuList.className = menuType + 'List';

  let menuItem = document.createElement('li');
  menuItem.className = menuType + 'MenuItem';
  let link = document.createElement('a');
  link.href = '#productList';
  link.className = 'linkButton';
  link.setAttribute('onclick', "buildProductList('T-Shirts')");
  let text = document.createTextNode('T-Shirts');
  link.appendChild(text);
  menuItem.appendChild(link);
  menuList.appendChild(menuItem);

  menuItem = document.createElement('li');
  menuItem.className = menuType + 'MenuItem';
  link = document.createElement('a');
  link.href = '#productList';
  link.className = 'linkButton';
  link.setAttribute('onclick', "buildProductList('Pants')");
  text = document.createTextNode('Pants');
  link.appendChild(text);
  menuItem.appendChild(link);
  menuList.appendChild(menuItem);

  menuItem = document.createElement('li');
  menuItem.className = menuType + 'MenuItem';
  link = document.createElement('a');
  link.href = '#productList';
  link.className = 'linkButton';
  link.setAttribute('onclick', "buildProductList('Shoes')");
  text = document.createTextNode('Shoes');
  link.appendChild(text);
  menuItem.appendChild(link);
  menuList.appendChild(menuItem);

  menuItem = document.createElement('li');
  menuItem.className = menuType + 'MenuItem';
  link = document.createElement('a');
  link.href = '#productList';
  link.className = 'linkButton';
  link.value = 'Accessories';
  link.setAttribute('onclick', "buildProductList('Accessories')");
  text = document.createTextNode('Accessories');
  link.appendChild(text);
  menuItem.appendChild(link);
  menuList.appendChild(menuItem);

  container.appendChild(menuList);
  menu.appendChild(container);
}

// *** mainAd ***
function buildAd() {
  let mainAd = document.querySelector('#mainAd');

  let container = document.createElement('div');
  container.id = 'adContainer';
  container.className = 'adContainer';

  let ad = document.createElement('img');
  ad.id = 'adImage';
  ad.className = 'adImage';
  ad.src = 'images/ad.JPG';
  container.appendChild(ad);
  mainAd.appendChild(container);
}

// *** sortMenu **
function buildSortMenu() {
  let sortMenu = document.querySelector('#sortMenu');

  let container = document.createElement('div');
  container.id = 'sortContainer';
  container.className = 'sortContainer';

  let paraSort = document.createElement('p');
  paraSort.id = 'paraSort';
  paraSort.className = 'paraSort';

  let link = document.createElement('a');
  link.href = '#';
  link.id = 'linkSort';
  link.className = 'linkButton';
  link.onclick = 'sortByPrice();';

  let text = document.createTextNode('List by Price');
  link.appendChild(text);
  paraSort.appendChild(link);
  container.appendChild(paraSort);
  sortMenu.appendChild(container);
}

// *** productList ***
function buildProductList(type) {
  let productList = document.querySelector('#productList');
  productList.innerHTML = '';

  allProducts.forEach((item) => {
    if (type == item.type || type == 'all') {
      let container = document.createElement('div');
      container.className = 'productItem';

      let photo = document.createElement('img');
      photo.src = item.src;
      container.appendChild(photo);

      let pInfo = document.createElement('p');
      let txt = 'Product Description: ' + item.description;
      let txtNode = document.createTextNode(txt);
      pInfo.appendChild(txtNode);
      let breakLine = document.createElement('br');
      pInfo.appendChild(breakLine);
      txt = 'Price: $ ' + item.price;
      txtNode = document.createTextNode(txt);
      pInfo.appendChild(txtNode);
      container.appendChild(pInfo);
      productList.appendChild(container);
    }
  });
}

// *** leftFooter ***
function buildLeftFooter() {
  let leftFooter = document.querySelector('#leftFooter');

  let paraLeftFooter = document.createElement('p');
  paraLeftFooter.id = 'leftFooter';
  paraLeftFooter.className = 'leftFooter';

  let text = document.createTextNode("Copyright \u00A9 2020 K-Nella Man's Store");
  paraLeftFooter.appendChild(text);
  leftFooter.appendChild(paraLeftFooter);
}

// *** rightFooter ***
function buildRightFooter() {
  let rightFooter = document.querySelector('#rightFooter');

  let form = document.createElement('form');
  form.id = 'subscribeForm';
  form.action = 'https://formspree.io/mrgydoyj';
  form.method = 'POST';

  let emailLabel = document.createElement('label');
  emailLabel.for = 'inputEmail';
  let text = document.createTextNode('Email:   ');
  emailLabel.appendChild(text);
  form.appendChild(emailLabel);

  let emailInput = document.createElement('input');
  emailInput.type = 'text';
  emailInput.id = 'fEmail';
  emailInput.name = 'fEmail';
  emailInput.placeholder = 'Enter your email';
  form.appendChild(emailInput);

  let subscribe = document.createElement('input');
  subscribe.type = 'submit';
  subscribe.className = 'linkButton';
  subscribe.value = 'Subscribe';
  form.appendChild(subscribe);

  rightFooter.appendChild(form);
}

// *** create contacts form ***//
function buildContact() {
  let mainContact = document.querySelector('#mainContact');

  let form = document.createElement('form');
  form.id = 'formContact';
  form.action = 'https://httpbin.org/post';
  form.method = 'POST';

  // first name
  let label = document.createElement('label');
  label.for = 'inputFirstName';
  label.className = 'contactLeft';
  let text = document.createTextNode('First Name:   ');
  label.appendChild(text);
  form.appendChild(label);

  let inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.className = 'contactRight';
  inputText.id = 'inputFirstName';
  inputText.name = 'inputFirstName';
  inputText.placeholder = 'Enter your first name';
  inputText.required = true;
  form.appendChild(inputText);

  let lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // last name
  label = document.createElement('label');
  label.for = 'inputLastName';
  label.className = 'contactLeft';
  text = document.createTextNode('Last Name:   ');
  label.appendChild(text);
  form.appendChild(label);

  inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.className = 'contactRight';
  inputText.id = 'inputLastName';
  inputText.name = 'inputLastName';
  inputText.placeholder = 'Enter your last name';
  inputText.required = true;
  form.appendChild(inputText);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // email
  label = document.createElement('label');
  label.for = 'inputEmail';
  label.className = 'contactLeft';
  text = document.createTextNode('Email:   ');
  label.appendChild(text);
  form.appendChild(label);

  inputText = document.createElement('input');
  inputText.type = 'email';
  inputText.className = 'contactRight';
  inputText.id = 'inputEmail';
  inputText.name = 'inputEmail';
  inputText.placeholder = 'Enter your email';
  inputText.required = true;
  form.appendChild(inputText);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // address
  label = document.createElement('label');
  label.for = 'inputAddress';
  label.className = 'contactLeft';
  text = document.createTextNode('Address:   ');
  label.appendChild(text);
  form.appendChild(label);

  inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.className = 'contactRight';
  inputText.id = 'inputAddress';
  inputText.name = 'inputAddress';
  inputText.placeholder = 'Enter your address';
  inputText.required = true;
  form.appendChild(inputText);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // city
  label = document.createElement('label');
  label.for = 'inputCity';
  label.className = 'contactLeft';
  text = document.createTextNode('City:   ');
  label.appendChild(text);
  form.appendChild(label);

  inputText = document.createElement('input');
  inputText.setAttribute('list', 'inputCity');
  inputText.id = 'inputCity';
  inputText.className = 'contactRight';
  inputText.name = 'inputCity';
  inputText.placeholder = 'Enter your city';
  inputText.required = true;
  form.appendChild(inputText);

  let dtList = document.createElement('datalist');
  dtList.id = 'inputCity';
  let dtOption = document.createElement('option');
  dtOption.value = 'Toronto';
  dtList.appendChild(dtOption);
  dtOption = document.createElement('option');
  dtOption.value = 'Montreal';
  dtList.appendChild(dtOption);
  dtOption = document.createElement('option');
  dtOption.value = 'Ottawa';
  dtList.appendChild(dtOption);
  dtOption = document.createElement('option');
  dtOption.value = 'Quebec';
  dtList.appendChild(dtOption);
  dtOption = document.createElement('option');
  dtOption.value = 'Winnipeg';
  dtList.appendChild(dtOption);
  dtOption = document.createElement('option');
  dtOption.value = 'Calgary';
  dtList.appendChild(dtOption);
  dtOption = document.createElement('option');
  dtOption.value = 'Vancouver';
  dtList.appendChild(dtOption);
  form.appendChild(dtList);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // phone number
  label = document.createElement('label');
  label.for = 'inputPhone';
  label.className = 'contactLeft';
  text = document.createTextNode('Phone:   ');
  label.appendChild(text);
  form.appendChild(label);

  inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.className = 'contactRight';
  inputText.id = 'inputPhone';
  inputText.name = 'inputPhone';
  inputText.placeholder = 'Format ###-###-####';
  inputText.size = 12;
  inputText.required = true;
  form.appendChild(inputText);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // checkbox phoned
  inputText = document.createElement('input');
  inputText.type = 'checkbox';
  inputText.id = 'checkPhone';
  inputText.name = 'checkPhone';
  inputText.value = true;
  form.appendChild(inputText);

  label = document.createElement('label');
  label.for = 'checkPhone';
  text = document.createTextNode('     Would you like to be phoned?');
  label.appendChild(text);
  form.appendChild(label);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // postal code
  label = document.createElement('label');
  label.for = 'inputPostal';
  label.className = 'contactLeft';
  text = document.createTextNode('Postal Code:   ');
  label.appendChild(text);
  form.appendChild(label);

  inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.className = 'contactRight';
  inputText.id = 'inputPostal';
  inputText.name = 'inputPostal';
  inputText.size = 8;
  inputText.placeholder = 'Format #### ###';
  inputText.required = true;
  form.appendChild(inputText);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // radio what is about
  text = document.createTextNode('What is the reason of your contact?');
  form.appendChild(text);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  //  lineBreak = document.createElement('br');
  //  form.appendChild(lineBreak);

  inputText = document.createElement('input');
  inputText.type = 'radio';
  inputText.id = 'contactReason';
  inputText.name = 'contactReason';
  inputText.value = 'Question';
  form.appendChild(inputText);

  label = document.createElement('label');
  label.for = 'Question';
  text = document.createTextNode('     Question          ');
  label.appendChild(text);
  form.appendChild(label);

  inputText = document.createElement('input');
  inputText.type = 'radio';
  inputText.id = 'contactReason';
  inputText.name = 'contactReason';
  inputText.value = 'Comment';
  form.appendChild(inputText);

  label = document.createElement('label');
  label.for = 'Comment';
  text = document.createTextNode('     Comment          ');
  label.appendChild(text);
  form.appendChild(label);

  inputText = document.createElement('input');
  inputText.type = 'radio';
  inputText.id = 'contactReason';
  inputText.name = 'contactReason';
  inputText.value = 'Problem';
  form.appendChild(inputText);

  label = document.createElement('label');
  label.for = 'Problem';
  text = document.createTextNode('     Order Problem');
  label.appendChild(text);
  form.appendChild(label);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  label = document.createElement('label');
  label.for = 'inputOrder';
  label.hidden = true;
  text = document.createTextNode('Order Number:   ');
  label.appendChild(text);
  form.appendChild(label);

  inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.id = 'inputOrder';
  inputText.name = 'inputOrder';
  inputText.hidden = true;
  inputText.placeholder = 'Enter your order number';
  form.appendChild(inputText);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // textArea message
  label = document.createElement('label');
  label.for = 'inputMessage';
  text = document.createTextNode('Message:');
  label.appendChild(text);
  form.appendChild(label);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  inputText = document.createElement('textarea');
  inputText.id = 'inputMessage';
  inputText.name = 'inputMessage';
  inputText.rows = 10;
  inputText.cols = 100;
  inputText.placeholder = 'Enter your message...';
  inputText.required = true;
  form.appendChild(inputText);

  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);
  lineBreak = document.createElement('br');
  form.appendChild(lineBreak);

  // hidden input with my name
  inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.id = 'inputMyName';
  inputText.name = 'inputMyName';
  inputText.value = 'Rodrigo Canella Garcia Morale';
  inputText.hidden = true;
  inputText.required = true;
  form.appendChild(inputText);

  let send = document.createElement('input');
  send.type = 'submit';
  send.className = 'linkButton';
  send.value = 'Send';
  send.setAttribute('onsubmit', 'validateForm()');
  form.appendChild(send);

  mainContact.appendChild(form);
}

function validateForm() {
  // valid phone
  let phone = document.querySelector('#inputPhone').value;
  let checkPhone = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
  validPhone = checkPhone.test(phone);

  // valid postal code
  let postal = document.querySelector('#inputPostal').value;
  let checkPostal = /[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]/;
  validPostal = checkPostal.test(postal);

  return validPhone && validPostal;
}

function loadIndex() {
  // create header
  buildHeader();
  buildMenu('topMenu');

  // create ad
  buildAd();

  // create left menu
  buildMenu('leftMenu');

  // create sort menu
  buildSortMenu();

  // create product list
  buildProductList('all');

  // create footer
  buildLeftFooter();
  buildRightFooter();
}

function loadContacts() {
  // create header
  buildHeader();

  // create form
  buildContact();

  // create footer
  buildLeftFooter();
  buildRightFooter();
}
