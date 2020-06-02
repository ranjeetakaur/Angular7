using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity.Models;
using BookstoreInventory.Models;

namespace BookstoreInventory.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class AppDataController : ControllerBase
    {
        public AppDataController()
        {

        }

        [HttpPost("[action]")]
        public IEnumerable<BookStore> GetAllBookStores()
        {
            return _bookstoreList;
        }

        [HttpPost("[action]")]
        public IEnumerable<StoreDetails> GetDetailsBookStore(StoreDetailsRequest request)
        {
            var listStoredetails = new List<StoreDetails>();

            listStoredetails = _storeDetailsList.Where(x => x.StoreId == request.StoreId).ToList();

            return listStoredetails;
        }

        // test data
        private List<BookStore> _bookstoreList = new List<BookStore>
        {
            new BookStore { StoreId = 1, City = "chicago", StoreAddress = "123 pitt ct, Rockford IL-60195", StoreName = "Store 12" },
            new BookStore { StoreId = 2, City = "newyork", StoreAddress = "76 aster dr, YorkVille NY-60195", StoreName = "Store 23" }
        };

        private List<StoreDetails> _storeDetailsList = new List<StoreDetails>
        {
            new StoreDetails{StoreId=1, Author="auth_1", BookName="Bookname_1", Isbn="978-3-17-148410-0", PageCount=125, Quantity=52},
            new StoreDetails{StoreId=1, Author="auth_2", BookName="Bookname_2", Isbn="978-3-16-198410-0", PageCount=225, Quantity=12},
            new StoreDetails{StoreId=1, Author="auth_198", BookName="Bookname_5", Isbn="978-3-16-148310-0", PageCount=15, Quantity=20},
            new StoreDetails{StoreId=1, Author="auth_10", BookName="Bookname_3", Isbn="978-3-16-148410-1", PageCount=1254, Quantity=456},

            new StoreDetails{StoreId=2, Author="auth_10", BookName="Bookname_13", Isbn="918-3-46-148410-1", PageCount=154, Quantity=56},
            new StoreDetails{StoreId=2, Author="auth_10", BookName="Bookname_23", Isbn="978-4-26-148410-1", PageCount=124, Quantity=156},
            new StoreDetails{StoreId=2, Author="auth_10", BookName="Bookname_03", Isbn="978-8-96-148410-1", PageCount=254, Quantity=406},

        };
    }
}
