document.addEventListener('DOMContentLoaded', () => {

  const getRes = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  function createCard(data) {
    data.forEach(({download_url, author}) => {
      const card = document.createElement('div');

      card.classList.add('col-sm-6', 'd-flex', 'align-items-stretch');

      card.innerHTML = `
        <div class="card mb-4">
          <img class="card-img-top" src=${download_url} alt="">

          <div class="card-body">
              <h3 class="h3">
                  <strong>${author}</strong>
              </h3>

              <p class="card-text card-text-js">
                  <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur quisquam voluptate impedit. Laboriosam quam, molestias nobis, fuga deleniti, fugiat quisquam dicta est expedita nostrum molestiae consequatur tenetur eveniet perspiciatis.
                  </span>
              </p>

              <button type="button" class="show-more show-more-js">Show more...</button>
          </div>

          <div class="card-footer">
              <div class="card-footer-btns">
                  <a href="#" class="btn btn-primary">Save to collection</a>

                  <button type="button" class="btn btn-outline-secondary">Share</button>
              </div>
          </div>
        </div>
      `;

      document.querySelector('.sidebar-item').append(card);
    });
  }

  getRes('https://picsum.photos/v2/list?page=1&limit=9')
    .then(data => createCard(data))
    .then(() => {
      itemCount();
      resizeChecker();
      showMoreText();
      window.addEventListener('resize', resizeChecker);
    });

  // resize check
  function resizeChecker() {

    // card show more button (show/hide)
    const cardText = document.querySelectorAll('.card-text-js');

    cardText.forEach(item => {
      const cssObj = window.getComputedStyle(item, null);
      const lineHeight = parseInt(cssObj.getPropertyValue('line-height'));
      const linesCount = 2; // same as in CSS
      const cardTextHeight = lineHeight*linesCount;
      const innerTextHeight = item.querySelector('*').offsetHeight;

      if (innerTextHeight > cardTextHeight) {
        item.nextElementSibling.style.display = 'block';
      } else {
        item.nextElementSibling.style.display = 'none';
      }
    });

  }

  // item count
  function itemCount() {
    const card = document.querySelectorAll('.card');
    const itemsCount = document.querySelector('#itemsCount');
    itemsCount.textContent = card.length;
  }

  // card show more button (text)
  function showMoreText() {
    const showMoreBtn = document.querySelectorAll('.show-more-js');

    showMoreBtn.forEach(item => {
      item.addEventListener('click', () => {
        const text = item.previousElementSibling;

        if (text.classList.contains('show-all')) {
          text.classList.remove('show-all');
          item.textContent = 'Show more...';
        } else {
          text.classList.add('show-all');
          item.textContent = 'Show less';
        }
      });
    });
  }

});
