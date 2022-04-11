var called = false;

const showProducts = () => {
  /*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'scx-test.myshopify.com',
        storefrontAccessToken: '09aa345a16fc77589af438a46501bbee',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '6822803832970',
          node: document.getElementById('product-component-1649700032973'),
          moneyFormat: '%E2%82%A6%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef",
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "8px"
                }
              },
              "contents": {
                "img": false,
                "button": false,
                "buttonWithQuantity": true,
                "title": false,
                "price": false
              },
              "text": {
                "button": "+🛒"
              },
              "googleFonts": [
                "Quantico"
              ]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef",
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "8px"
                }
              },
              "googleFonts": [
                "Quantico"
              ],
              "text": {
                "button": "+🛒"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef",
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "8px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Quantico"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Quantico, sans-serif",
                  "background-color": "#000000",
                  ":hover": {
                    "background-color": "#000000"
                  },
                  ":focus": {
                    "background-color": "#000000"
                  }
                },
                "count": {
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef"
                  }
                },
                "iconPath": {
                  "fill": "#efefef"
                }
              },
              "googleFonts": [
                "Quantico"
              ]
            }
          },
        });
      });
    }
  })();
/*]]>*/





  /*<![CDATA[*/
  (function blueHat() {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'scx-test.myshopify.com',
        storefrontAccessToken: '09aa345a16fc77589af438a46501bbee',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '6822803603594',
          node: document.getElementById('product-component-1649635110274'),
          moneyFormat: '%E2%82%A6%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef",
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "8px"
                }
              },
              "contents": {
                "img": false,
                "button": false,
                "buttonWithQuantity": true,
                "title": false,
                "price": false
              },
              "text": {
                "button": "+🛒"
              },
              "googleFonts": [
                "Quantico"
              ]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef",
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "8px"
                }
              },
              "googleFonts": [
                "Quantico"
              ],
              "text": {
                "button": "+🛒"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef",
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "8px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Quantico"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Quantico, sans-serif",
                  "background-color": "#000000",
                  ":hover": {
                    "background-color": "#000000"
                  },
                  ":focus": {
                    "background-color": "#000000"
                  }
                },
                "count": {
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef"
                  }
                },
                "iconPath": {
                  "fill": "#efefef"
                }
              },
              "googleFonts": [
                "Quantico"
              ]
            }
          },
        });
      });
    }
  })();
  /*]]>*/



  /*<![CDATA[*/
  (function whiteAndBlackHat() {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'scx-test.myshopify.com',
        storefrontAccessToken: '09aa345a16fc77589af438a46501bbee',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '6822803996810',
          node: document.getElementById('product-component-1649635310221'),
          moneyFormat: '%E2%82%A6%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef",
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "8px"
                }
              },
              "contents": {
                "img": false,
                "button": false,
                "buttonWithQuantity": true,
                "title": false,
                "price": false
              },
              "text": {
                "button": "+🛒"
              },
              "googleFonts": [
                "Quantico"
              ]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef",
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "8px"
                }
              },
              "googleFonts": [
                "Quantico"
              ],
              "text": {
                "button": "+🛒"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef",
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "8px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Quantico"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Quantico, sans-serif",
                  "background-color": "#000000",
                  ":hover": {
                    "background-color": "#000000"
                  },
                  ":focus": {
                    "background-color": "#000000"
                  }
                },
                "count": {
                  "color": "#efefef",
                  ":hover": {
                    "color": "#efefef"
                  }
                },
                "iconPath": {
                  "fill": "#efefef"
                }
              },
              "googleFonts": [
                "Quantico"
              ]
            }
          },
        });
      });
    }
  })();
  /*]]>*/
  called = true;
}

(function(history){
    var pushState = history.pushState;
    history.pushState = function st(state) {
      called = false;
      return pushState.apply(history, arguments);
    };
})(window.history);

setInterval(() => {
  if (document.querySelector(".itemInfo")) {
    if (!called) {
      showProducts();
      
    }
  }
}, 300);