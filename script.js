var currentCars = [];
var currentSort = 1;
window.onload = function() {
  document.querySelector('.sort img').addEventListener('click', carsPage.onSort);
  document.querySelector('.search').addEventListener('input', searchAndSort.search);
  document.querySelector('.sort').addEventListener('click', searchAndSort.sort);
  document.querySelector('.production').addEventListener('change', searchAndSort.filter);
  carsPage.loadCars();
};

const carsPage = {

  // TODO: SEARCH

  // TODO: FILTER BY PRODUCTION STARTING DATE

  // TODO: FINISH SORTING

  loadCars: () => {
    const cars = carsAPI.getCars();
    currentCars = cars;
    carsPage.createCarListElements(cars);
  },

  onSort: () => {
    const element = document.querySelector('.sort');
    const isActive = element.classList.contains('sort--active');
    const isDescending = element.classList.contains('sort--descending')

    if (!isDescending) {
      element.classList.add('sort--descending');
    } else {
      element.classList.remove('sort--descending');
    }

    if (!isActive) {
      element.classList.add('sort--active');
    }
  },
  onSearch:() => {
    const text = document.querySelector('.search').value;
    document.getElementsByClassName('cars-list')[0].innerHTML = null;

  },

  clearCarsList: () => {
    document.getElementsByClassName('cars-list')[0].innerHTML = null;
  },

  createCarListElements: (cars) => {
    carsPage.clearCarsList();

    for (const car of cars) {
      const carListItem = document.createElement('div');
      carListItem.classList.add('cars-list-item');
      carListItem.onclick = () => carsPage.openLink(car.href);

      const imageContainer = document.createElement('div');
      imageContainer.classList.add('cars-list-item__image');

      const image = document.createElement('img');
      image.setAttribute('src', car.image);
      image.setAttribute('alt', car.title);

      imageContainer.append(image);

      const content = document.createElement('div');
      content.classList.add('cars-list-item__content');
      
      const title = document.createElement('h3');
      title.classList.add('cars-list-item__title');
      title.innerText = car.title;

      const production = document.createElement('i');
      production.classList.add('cars-list-item__title__production');
      production.innerText = car.production;
      title.append(production);

      const description = document.createElement('div');
      description.classList.add('cars-list-item__description');
      description.innerText = car.description;

      content.append(title, description);
      carListItem.append(imageContainer, content);

      document.getElementsByClassName('cars-list')[0].append(carListItem);
    }
  },

  openLink: (href) => {
    window.open(href, '__blank');
  }
};

const searchAndSort = {
  //search cars by text(case insensitive)
  search: () => {
    const text = document.querySelector('.search').value;
    carsPage.clearCarsList();
    var allCars = carsAPI.getCars();
    searchedCars = allCars.filter( ele => {
      //case insensitive
      return ele.title.toLowerCase().indexOf(text.toLowerCase()) != -1;
    })
    carsPage.createCarListElements(searchedCars);
    currentCars = searchedCars;
  },

  //soort cars by title
  sort: () => {
    currentSort = 0 - currentSort;
    var sortedCars = currentCars.sort(function(a, b) {
      console.log(currentSort);
      if( a.title > b.title ) {
        return currentSort;
      } else if( a.title < b.title ) {
        return -currentSort;
      }
      return 0;
    })
    carsPage.clearCarsList();
    carsPage.createCarListElements(sortedCars);
    currentCars = sortedCars;
  },
  //filter by date
  filter: () => {
    const text = document.querySelector('.search').value;
    const filter = document.querySelector('.production').value;
    const cars = carsAPI.getCars();
    const searchedCars = cars.filter( ele => {
      return ele.title.toLowerCase().indexOf(text.toLowerCase()) != -1;
    })
    var fliteredCars = searchedCars.filter(ele => {
      var firstYear = ele.production.substring(0, 4);
      var secondYear = ele.production.substring(5);
      if( secondYear.length == 2 ) {
        if(ele.production.substring(0,2) == '20' ){
          secondYear = '20' + secondYear;
        } else {
          secondYear = '19' + secondYear;
        }
      }
      switch(filter) {
        case 'all':
          return 1;
          break;
        case 'older':
          if( Number(secondYear) <= 1970 ) return 1;
          break;
        case '1971':
          if((Number(firstYear) >= 1971) && (Number(secondYear) <= 1980)) return 1;
          break;
        case '1981':
          if((Number(firstYear) >= 1981) && (Number(secondYear) <= 1990)) return 1;
          break;
        case '1991':
          if((Number(firstYear) >= 1991) && (Number(secondYear) <= 2000)) return 1;
          break;
        case '2001':
          if((Number(firstYear) >= 2001) && (Number(secondYear) <= 2010)) return 1;
          break;
        case 'newer':
          if((Number(firstYear) >= 2011)) return 1;
          break;
      }
    })
    currentCars = fliteredCars;
    carsPage.clearCarsList();
    carsPage.createCarListElements(fliteredCars);
  } 
}