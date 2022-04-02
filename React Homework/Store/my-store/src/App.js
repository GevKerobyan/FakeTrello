import { useState, useEffect } from "react";
import Header from "./Components/Header/Header"
import Products from './Components/Body/ProductsList'

export default function App() {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  // console.log(basket)
  // MINUS FUNCTION //

  const itemCountMinus = (minusData) => {
    // console.log("called", minusData.count)
    if (minusData.count >= 0) {
      if (minusData.count > 0) {
        setBasket((prev) => {
          // console.log({prev}, 'called 2')
          return prev.map((item) => {
            if (item.id === minusData.id) {
              // console.log({item});
              return { ...item, count: item.count - 1 };
            } else return item;
          })
        })
      } else if (minusData.count === 0) {
        let index = basket.findIndex((item) => item.id === minusData.id);
        basket.splice(index, 1);
        return basket;
      }
    }
  }
  // PLUS FUNCTION //

  const itemCountPlus = function (plusData) {
    if (basket.length === 0) {
      // console.log('1');
      console.log('basket 1 : ', plusData.count)
      ++plusData.count
      setBasket(() => [plusData]);
    }
    else if (basket.length > 0) {
      let index = basket.findIndex((item) => item.id === plusData.id);
      // console.log('plusData Count :', plusData.count);

      if (index < 0) {
        console.log('basket 2 : ', plusData.count)
        ++plusData.count
        // console.log('plusData : ', plusData)
        setBasket((prev) => [...prev, plusData]);
      }
      else {
        setBasket(() => {
          ++plusData.count
          // basket.find(item => item.id === plusData.id).count +=1;
          return [...basket];
          console.log('plusData.count : ', plusData.count)
          console.log('basket index : ', basket[index])
          console.log('basket index count : ', basket[index].count)
        })
      }
    }
  };

  // BASKET PLUS FUNCTION //

  const basketPlus = function (basketPlusData) {
    setBasket(basket.map((item) => {
      if (item.id === basketPlusData.id) {
        return { ...item, count: item.count + 1 };
      } else return item;
    }))

  }

  let basketMinus = (basketMinusData) => {
    if (basketMinusData.count > 0) {
      if (basketMinusData.count > 0) {
        setBasket(basket.map((item) => {
          if (item.id === basketMinusData.id) {
            return { ...item, count: item.count - 1 };
          } else return item;
        }))
      } else if (basketMinusData.count === 0) {
        let index = basket.findIndex((item) => item.id === basketMinusData.id);
        setBasket(basket.map((item) => {
          if (item.id !== basketMinusData.id) {
            return item
          }
        }))
      }
    }
  }



  // BASKET MINUS FUNCTION //


  useEffect(() => {
    fetch(`https://api.harvardartmuseums.org/object?apikey=67d9edc0-e6a3-11e3-9798-57275476509a&sort=rank&sortorder=asc&from=12&size=30&page=1`)
      .then(res => res.json()).then(data => {
        setTimeout(() => setData(data.records.map(({ title, images, dated, id, }) => {
          return { title, url: images[0].baseimageurl, dated, id, count: 0 }
        })), 2000)
      })
  }, []) /* UseEffect end */

  return (
    <div>
      <Header
        isModalOpen={isModalOpen}
        setIsModalOpen={((value) => setIsModalOpen(value))}
        basket={basket}
        setBasket={((value) => setBasket(value))}
        basketPlus={basketPlus}
        basketMinus={basketMinus}
      />
      <Products
        isModalOpen={isModalOpen}
        data={data}
        basket={basket}
        itemCountPlus={itemCountPlus}
        itemCountMinus={itemCountMinus}
      />
    </div>
  )
}

