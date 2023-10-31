import * as Constant from '../../common/Constant';
//Danh sách user
const initStateProduct = {
  products: [
    {
      id: 1,
      name: 'XIAOMI PAD 6',
      title: 'Máy tính bảng Xiaomi pad 6',
      price: 6990000,
      rating: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbmf-ll3bwnklx35h9d.jpg'),
      images: [],
      saleOff: '15%',
      description:
        'Điện thoại Redmi K50 đã được ra mắt vào ngày 17/3/2022, đi kèm với chip Dimensity siêu mạnh, màn hình 2K siêu nét, hệ thống camera chất lượng, pin siêu khủng và sạc cực nhanh. Từ nhiều thông số kỹ thuật và tính năng hấp dẫn Xiaomi Redmi K50 trở thành mẫu điện thoại tầm trung bán chạy nhất tại MobileCity.',

      views: 100,
      shelled: 1000,
      dateSubmitted: 1679228282,
    },
    {
      id: 2,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại Iphone 15 promax',
      price: 34000000,
      rating: 1,
      avatar: require('../../assets/images/products/sg-11134201-7rbmf-ll3bwnklx35h9d.jpg'),
      images: [
        { id: 1, path: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg') },
        { id: 2, path: require('../../assets/images/products/sg-11134201-7rbmd-lm9waql279hs62.jpg') },
        { id: 3, path: require('../../assets/images/products/sg-11134201-7rblf-lm8hkb67cqv908.jpg') },
        { id: 4, path: require('../../assets/images/products/sg-11134201-7rblk-ll3bwpmyw9elb2.jpg') },
        { id: 5, path: require('../../assets/images/products/sg-11134201-7rbk0-ll0dl3ovngiw4a.jpg') },
      ],
      saleOff: '15%',
      description:
        'Điện thoại Redmi K50 đã được ra mắt vào ngày 17/3/2022, đi kèm với chip Dimensity siêu mạnh, màn hình 2K siêu nét, hệ thống camera chất lượng, pin siêu khủng và sạc cực nhanh. Từ nhiều thông số kỹ thuật và tính năng hấp dẫn Xiaomi Redmi K50 trở thành mẫu điện thoại tầm trung bán chạy nhất tại MobileCity.',
      views: 111,
      shelled: 333,
      dateSubmitted: 16792228282,
    },
    {
      id: 3,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại Xiaomi 1000',
      price: 11990000,
      rating: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbmk-llyi25uexya852.jpg'),
      images: [
        { id: 1, path: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg') },
        { id: 2, path: require('../../assets/images/products/sg-11134201-7rbmd-lm9waql279hs62.jpg') },
        { id: 3, path: require('../../assets/images/products/sg-11134201-7rblf-lm8hkb67cqv908.jpg') },
        { id: 4, path: require('../../assets/images/products/sg-11134201-7rblk-ll3bwpmyw9elb2.jpg') },
        { id: 5, path: require('../../assets/images/products/sg-11134201-7rbk0-ll0dl3ovngiw4a.jpg') },
      ],
      saleOff: '13%',
      views: 1200,
      shelled: 2123,
      dateSubmitted: 1612128282,
    },
    {
      id: 4,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại Xiaomi 2121',
      price: 12121212,
      rating: 5,
      avatar: require('../../assets/images/products/sg-11134201-7rbnl-lm8i0yy7ouy17d.jpg'),
      images: [
        { id: 1, path: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg') },
        { id: 2, path: require('../../assets/images/products/sg-11134201-7rbmd-lm9waql279hs62.jpg') },
        { id: 3, path: require('../../assets/images/products/sg-11134201-7rblf-lm8hkb67cqv908.jpg') },
        { id: 4, path: require('../../assets/images/products/sg-11134201-7rblk-ll3bwpmyw9elb2.jpg') },
        { id: 5, path: require('../../assets/images/products/sg-11134201-7rbk0-ll0dl3ovngiw4a.jpg') },
      ],
      saleOff: '15%',
      description:
        'Điện thoại Redmi K50 đã được ra mắt vào ngày 17/3/2022, đi kèm với chip Dimensity siêu mạnh, màn hình 2K siêu nét, hệ thống camera chất lượng, pin siêu khủng và sạc cực nhanh. Từ nhiều thông số kỹ thuật và tính năng hấp dẫn Xiaomi Redmi K50 trở thành mẫu điện thoại tầm trung bán chạy nhất tại MobileCity.',
      views: 99,
      shelled: 453,
      dateSubmitted: 1672228282,
    },
    {
      id: 5,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại samsung promax',
      price: 40000000,
      rating: 2,
      avatar: require('../../assets/images/products/sg-11134201-7rbma-ll3bvvc99sms18.jpg'),
      images: [
        { id: 1, path: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg') },
        { id: 2, path: require('../../assets/images/products/sg-11134201-7rbmd-lm9waql279hs62.jpg') },
        { id: 3, path: require('../../assets/images/products/sg-11134201-7rblf-lm8hkb67cqv908.jpg') },
        { id: 4, path: require('../../assets/images/products/sg-11134201-7rblk-ll3bwpmyw9elb2.jpg') },
        { id: 5, path: require('../../assets/images/products/sg-11134201-7rbk0-ll0dl3ovngiw4a.jpg') },
      ],
      saleOff: '15%',
      description:
        'Điện thoại Redmi K50 đã được ra mắt vào ngày 17/3/2022, đi kèm với chip Dimensity siêu mạnh, màn hình 2K siêu nét, hệ thống camera chất lượng, pin siêu khủng và sạc cực nhanh. Từ nhiều thông số kỹ thuật và tính năng hấp dẫn Xiaomi Redmi K50 trở thành mẫu điện thoại tầm trung bán chạy nhất tại MobileCity.',
      views: 34,
      shelled: 21221,
      dateSubmitted: 1621228282,
    },
    {
      id: 6,
      name: 'XIAOMI PAD 6 PRO',
      title: 'Điện thoại Xiaomi lutanlu pro',
      price: 20000000,
      rating: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbm8-llyi1jr7cglh41.jpg'),
      images: [
        { id: 1, path: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg') },
        { id: 2, path: require('../../assets/images/products/sg-11134201-7rbmd-lm9waql279hs62.jpg') },
        { id: 3, path: require('../../assets/images/products/sg-11134201-7rblf-lm8hkb67cqv908.jpg') },
        { id: 4, path: require('../../assets/images/products/sg-11134201-7rblk-ll3bwpmyw9elb2.jpg') },
        { id: 5, path: require('../../assets/images/products/sg-11134201-7rbk0-ll0dl3ovngiw4a.jpg') },
      ],
      saleOff: '15%',
      description:
        'Điện thoại Redmi K50 đã được ra mắt vào ngày 17/3/2022, đi kèm với chip Dimensity siêu mạnh, màn hình 2K siêu nét, hệ thống camera chất lượng, pin siêu khủng và sạc cực nhanh. Từ nhiều thông số kỹ thuật và tính năng hấp dẫn Xiaomi Redmi K50 trở thành mẫu điện thoại tầm trung bán chạy nhất tại MobileCity.',
      views: 0,
      shelled: 111,
      dateSubmitted: 1672228282,
    },
    {
      id: 7,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại Xiaomi không pro',
      price: 5000000,
      rating: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbm4-ll3bv62686td13.jpg'),
      images: [
        { id: 1, path: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg') },
        { id: 2, path: require('../../assets/images/products/sg-11134201-7rbmd-lm9waql279hs62.jpg') },
        { id: 3, path: require('../../assets/images/products/sg-11134201-7rblf-lm8hkb67cqv908.jpg') },
        { id: 4, path: require('../../assets/images/products/sg-11134201-7rblk-ll3bwpmyw9elb2.jpg') },
        { id: 5, path: require('../../assets/images/products/sg-11134201-7rbk0-ll0dl3ovngiw4a.jpg') },
      ],
      saleOff: '15%',
      description:
        'Điện thoại Redmi K50 đã được ra mắt vào ngày 17/3/2022, đi kèm với chip Dimensity siêu mạnh, màn hình 2K siêu nét, hệ thống camera chất lượng, pin siêu khủng và sạc cực nhanh. Từ nhiều thông số kỹ thuật và tính năng hấp dẫn Xiaomi Redmi K50 trở thành mẫu điện thoại tầm trung bán chạy nhất tại MobileCity.',
      views: 982,
      shelled: 121,
      dateSubmitted: 1679221182,
    },
    {
      id: 8,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại Sony 4000',
      price: 200008888,
      rating: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbm2-llyi1nt5dhll12.jpg'),
      images: [
        { id: 1, path: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg') },
        { id: 2, path: require('../../assets/images/products/sg-11134201-7rbmd-lm9waql279hs62.jpg') },
        { id: 3, path: require('../../assets/images/products/sg-11134201-7rblf-lm8hkb67cqv908.jpg') },
        { id: 4, path: require('../../assets/images/products/sg-11134201-7rblk-ll3bwpmyw9elb2.jpg') },
        { id: 5, path: require('../../assets/images/products/sg-11134201-7rbk0-ll0dl3ovngiw4a.jpg') },
      ],
      saleOff: '15%',
      description:
        'Điện thoại Redmi K50 đã được ra mắt vào ngày 17/3/2022, đi kèm với chip Dimensity siêu mạnh, màn hình 2K siêu nét, hệ thống camera chất lượng, pin siêu khủng và sạc cực nhanh. Từ nhiều thông số kỹ thuật và tính năng hấp dẫn Xiaomi Redmi K50 trở thành mẫu điện thoại tầm trung bán chạy nhất tại MobileCity.',
      views: 100,
      shelled: 544,
      dateSubmitted: 1679228282,
    },
    {
      id: 9,
      name: 'XIAOMI PAD 6',
      title: 'Máy tính bảng Xiaomi pad 5',
      price: 5000000,
      rating: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbm1-ll3brbxgfyph09.jpg'),
      images: [
        { id: 1, path: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg') },
        { id: 2, path: require('../../assets/images/products/sg-11134201-7rbmd-lm9waql279hs62.jpg') },
        { id: 3, path: require('../../assets/images/products/sg-11134201-7rblf-lm8hkb67cqv908.jpg') },
        { id: 4, path: require('../../assets/images/products/sg-11134201-7rblk-ll3bwpmyw9elb2.jpg') },
        { id: 5, path: require('../../assets/images/products/sg-11134201-7rbk0-ll0dl3ovngiw4a.jpg') },
      ],
      saleOff: '15%',
      description:
        'Điện thoại Redmi K50 đã được ra mắt vào ngày 17/3/2022, đi kèm với chip Dimensity siêu mạnh, màn hình 2K siêu nét, hệ thống camera chất lượng, pin siêu khủng và sạc cực nhanh. Từ nhiều thông số kỹ thuật và tính năng hấp dẫn Xiaomi Redmi K50 trở thành mẫu điện thoại tầm trung bán chạy nhất tại MobileCity.',
      views: 45,
      shelled: 1212,
      dateSubmitted: 1679228282,
    },
    {
      id: 10,
      name: 'XIAOMI PAD 6',
      title: 'Giày Nike Academy',
      price: 1809000,
      rating: 4,
      avatar: require('../../assets/images/products/137690925e6e_787a66299877405d85e70b0d75d7961d_1024x1024.jpeg'),
      images: [
        { id: 1, path: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg') },
        { id: 2, path: require('../../assets/images/products/sg-11134201-7rbmd-lm9waql279hs62.jpg') },
        { id: 3, path: require('../../assets/images/products/sg-11134201-7rblf-lm8hkb67cqv908.jpg') },
        { id: 4, path: require('../../assets/images/products/sg-11134201-7rblk-ll3bwpmyw9elb2.jpg') },
        { id: 5, path: require('../../assets/images/products/sg-11134201-7rbk0-ll0dl3ovngiw4a.jpg') },
      ],
      saleOff: '15%',
      description:
        'Điện thoại Redmi K50 đã được ra mắt vào ngày 17/3/2022, đi kèm với chip Dimensity siêu mạnh, màn hình 2K siêu nét, hệ thống camera chất lượng, pin siêu khủng và sạc cực nhanh. Từ nhiều thông số kỹ thuật và tính năng hấp dẫn Xiaomi Redmi K50 trở thành mẫu điện thoại tầm trung bán chạy nhất tại MobileCity.',
      views: 21,
      shelled: 11,
      dateSubmitted: 1444228282,
    },
    {
      id: 11,
      name: 'XIAOMI PAD 6',
      title: 'Ipad 100 pro 1 TB',
      price: 290900000,
      rating: 4,
      avatar: require('../../assets/images/products/sg-11134201-7r9a8-llq8m0jlpgsr0c.jpg'),
      images: [
        { id: 1, path: require('../../assets/images/products/sg-11134201-7rbkr-lm8hkd3uitspe3.jpg') },
        { id: 2, path: require('../../assets/images/products/sg-11134201-7rbmd-lm9waql279hs62.jpg') },
        { id: 3, path: require('../../assets/images/products/sg-11134201-7rblf-lm8hkb67cqv908.jpg') },
        { id: 4, path: require('../../assets/images/products/sg-11134201-7rblk-ll3bwpmyw9elb2.jpg') },
        { id: 5, path: require('../../assets/images/products/sg-11134201-7rbk0-ll0dl3ovngiw4a.jpg') },
      ],
      saleOff: '15%',
      description:
        'Điện thoại Redmi K50 đã được ra mắt vào ngày 17/3/2022, đi kèm với chip Dimensity siêu mạnh, màn hình 2K siêu nét, hệ thống camera chất lượng, pin siêu khủng và sạc cực nhanh. Từ nhiều thông số kỹ thuật và tính năng hấp dẫn Xiaomi Redmi K50 trở thành mẫu điện thoại tầm trung bán chạy nhất tại MobileCity.',
      views: 89,
      shelled: 11,
      dateSubmitted: 1249228282,
    },
  ],
};
//Hàm tìm kiếm => lọc các product có giá trị tìm kiếm thỏa mãn
function getProductsSearch(state, action) {
  // state sẽ bị thay đổi, phải gán bằng initStateProduct
  const products = [...initStateProduct.products];
  const productsSearch = [...initStateProduct.products];
  const searchVal = action.payload && action.payload.searchVal ? action.payload.searchVal : '';
  if (searchVal === '') {
    return products;
  } else {
    return productsSearch.filter((item) => item.title.toLowerCase().includes(searchVal.toLowerCase()));
  }
}
//hàm logic các action tương ứng, lấy giá trị mảng đã tìm kiếm thỏa mãn
function getProductsOrderBy(state, action) {
  const products = getProductsSearch(state, action);

  switch (action.type) {
    case Constant.PHO_BIEN:
      products.sort((a, b) => b.views - a.views);
      return products;
    case Constant.MOI_NHAT:
      products.sort((a, b) => b.dateSubmitted - a.dateSubmitted);
      return products;
    case Constant.BAN_CHAY:
      products.sort((a, b) => b.shelled - a.shelled);
      return products;
    case Constant.GIA_TANG:
      products.sort((a, b) => a.price - b.price);
      return products;
    case Constant.GIA_GIAM:
      products.sort((a, b) => b.price - a.price);
      return products;
    case Constant.SEARCH:
      products.sort((a, b) => b.views - a.views);
      return products;

    default:
      products.sort((a, b) => b.views - a.views);
      return products;
  }
}
const productReducer = (state = initStateProduct, action) => {
  if (Constant.PRODUCT_ACTION.includes(action.type)) {
    const products = getProductsOrderBy(state, action);
    return { ...state, products: products };
  } else {
    return state;
  }
};

export default productReducer;
