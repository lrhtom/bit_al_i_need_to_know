const fs = require('fs');
let exp_ct1 = 0;
const curr_status_arr = ([
    [40],[100],[100],[100],[100]
  ])
  [exp_ct1%3]//30,40,100
  exp_ct1++;
  const datas = [

    {
      "apply_id": "8070726829523898550",
      "product_title": "DR.HARRY Little green tube Joint Gel Green Joint Cream",
      "product_id": "1731176889072914712",
      "sku_id": "1731176938878832920",
      "sku_desc": "1 PCS",
      "sku_image": "https://p19-oec-ttp.tiktokcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/37a4b615d8614645b4b3f740f41209e9~tplv-omjb5zjo8w-origin-jpeg.jpeg?dr=10493&t=555f072d&ps=933b5bde&shp=e326b0ff&shcp=56b29210&idc=useast5&from=3810963711",
      "commission_rate": "1000",
      "sku_left_num": Math.floor(Math.random() * 10),
      "curr_status": curr_status_arr[Math.floor(Math.random() * curr_status_arr.length)],
      "expired_in": 0,
      "fulfillment_status": 0,
      "main_order_id": "577005471617814711",
      "source_type": 2,
      "is_appealed": false,
      "no_limit_quantity": false,
      "sample_order_type": 10,
      "create_time": Date.now() - 86400000,
      "fulfillment_expire_time": Date.now() + 86400000 * 3,
      "review_status": Math.random() > 0.5 ? 10 : 11,
      "is_review_expire": false,
      "review_expire_time": Date.now() + 86400000 * 7,
      "is_algo_recommend": true,
      "standard_commission": {
          "commission_type": 1,
          "fixed_commission_rate": 1000
      },
      "creator_id": "7494011371642194745"
  },
  {
    "apply_id": "8070726829523898552",
    "product_title": "DR.HARRY Little green tube Joint Gel Green Joint Cream",
    "product_id": "1731176889072914712",
    "sku_id": "1731176938878832920",
    "sku_desc": "1 PCS",
    "sku_image": "https://p19-oec-ttp.tiktokcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/37a4b615d8614645b4b3f740f41209e9~tplv-omjb5zjo8w-origin-jpeg.jpeg?dr=10493&t=555f072d&ps=933b5bde&shp=e326b0ff&shcp=56b29210&idc=useast5&from=3810963711",
    "commission_rate": "1000",
    "sku_left_num": Math.floor(Math.random() * 10),
    "curr_status": curr_status_arr[Math.floor(Math.random() * curr_status_arr.length)],
    "expired_in": 0,
    "fulfillment_status": 0,
    "main_order_id": "577005471617814711",
    "source_type": 2,
    "is_appealed": false,
    "no_limit_quantity": false,
    "sample_order_type": 10,
    "create_time": Date.now() - 86400000,
    "fulfillment_expire_time": Date.now() + 86400000 * 3,
    "review_status": Math.random() > 0.5 ? 10 : 11,
    "is_review_expire": false,
    "review_expire_time": Date.now() + 86400000 * 7,
    "is_algo_recommend": true,
    "standard_commission": {
        "commission_type": 1,
        "fixed_commission_rate": 1000
    },
    "creator_id": "7495682353119791401"
},
      {
        "apply_id": "8070726829523898553",
        "product_title": "DR.HARRY Little green tube Joint Gel Green Joint Cream",
        "product_id": "1731176889072914712",
        "sku_id": "1731176938878832920",
        "sku_desc": "1 PCS",
        "sku_image": "https://p19-oec-ttp.tiktokcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/37a4b615d8614645b4b3f740f41209e9~tplv-omjb5zjo8w-origin-jpeg.jpeg?dr=10493&t=555f072d&ps=933b5bde&shp=e326b0ff&shcp=56b29210&idc=useast5&from=3810963711",
        "commission_rate": "1000",
        "sku_left_num": Math.floor(Math.random() * 10),
        "curr_status": curr_status_arr[Math.floor(Math.random() * curr_status_arr.length)],
        "expired_in": 0,
        "fulfillment_status": 0,
        "main_order_id": "577005471617814711",
        "source_type": 2,
        "is_appealed": false,
        "no_limit_quantity": false,
        "sample_order_type": 10,
        "create_time": Date.now() - 86400000,
        "fulfillment_expire_time": Date.now() + 86400000 * 3,
        "review_status": Math.random() > 0.5 ? 10 : 11,
        "is_review_expire": false,
        "review_expire_time": Date.now() + 86400000 * 7,
        "is_algo_recommend": true,
        "standard_commission": {
            "commission_type": 1,
            "fixed_commission_rate": 1000
        },
        "creator_id": "7496008487054969053"
    },
    {
      "apply_id": "8070726829523898551",
      "product_title": "DR.HARRY Little green tube Joint Gel Green Joint Cream",
      "product_id": "1731176889072914712",
      "sku_id": "1731176938878832920",
      "sku_desc": "1 PCS",
      "sku_image": "https://p19-oec-ttp.tiktokcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/37a4b615d8614645b4b3f740f41209e9~tplv-omjb5zjo8w-origin-jpeg.jpeg?dr=10493&t=555f072d&ps=933b5bde&shp=e326b0ff&shcp=56b29210&idc=useast5&from=3810963711",
      "commission_rate": "1000",
      "sku_left_num": Math.floor(Math.random() * 10),
      "curr_status": curr_status_arr[Math.floor(Math.random() * curr_status_arr.length)],
      "expired_in": 0,
      "fulfillment_status": 0,
      "main_order_id": "577005471617814711",
      "source_type": 2,
      "is_appealed": false,
      "no_limit_quantity": false,
      "sample_order_type": 10,
      "create_time": Date.now() - 86400000,
      "fulfillment_expire_time": Date.now() + 86400000 * 3,
      "review_status": Math.random() > 0.5 ? 10 : 11,
      "is_review_expire": false,
      "review_expire_time": Date.now() + 86400000 * 7,
      "is_algo_recommend": true,
      "standard_commission": {
          "commission_type": 1,
          "fixed_commission_rate": 1000
      },
      "creator_id": "7495583361776191608"
  },
  {
    "apply_id": "8070726829523898554",
    "product_title": "DR.HARRY Little green tube Joint Gel Green Joint Cream",
    "product_id": "1731176889072914712",
    "sku_id": "1731176938878832920",
    "sku_desc": "1 PCS",
    "sku_image": "https://p19-oec-ttp.tiktokcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/37a4b615d8614645b4b3f740f41209e9~tplv-omjb5zjo8w-origin-jpeg.jpeg?dr=10493&t=555f072d&ps=933b5bde&shp=e326b0ff&shcp=56b29210&idc=useast5&from=3810963711",
    "commission_rate": "1000",
    "sku_left_num": Math.floor(Math.random() * 10),
    "curr_status": curr_status_arr[Math.floor(Math.random() * curr_status_arr.length)],
    "expired_in": 0,
    "fulfillment_status": 0,
    "main_order_id": "577005471617814711",
    "source_type": 2,
    "is_appealed": false,
    "no_limit_quantity": false,
    "sample_order_type": 10,
    "create_time": Date.now() - 86400000,
    "fulfillment_expire_time": Date.now() + 86400000 * 3,
    "review_status": Math.random() > 0.5 ? 10 : 11,
    "is_review_expire": false,
    "review_expire_time": Date.now() + 86400000 * 7,
    "is_algo_recommend": true,
    "standard_commission": {
        "commission_type": 1,
        "fixed_commission_rate": 1000
    },
    "creator_id": "7495739004596750981"
}
  ]
  fs.writeFile('1.json', JSON.stringify(datas, null, 2), (err) => {
    if (err) {
      console.error('写入文件失败:', err);
    } else {
      console.log('数据已成功写入1.json');
    }
  });