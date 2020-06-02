using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.Models
{
    public class StoreDetails
    {
        public int StoreId { get; set; }
        public string BookName { get; set; }
        public int Quantity { get; set; }
        public string Author { get; set; }
        public string Isbn { get; set; }
        public int PageCount { get; set; }
    }
}
