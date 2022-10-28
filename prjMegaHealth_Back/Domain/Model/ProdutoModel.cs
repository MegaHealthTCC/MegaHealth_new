using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class ProdutoModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Name { get; set; } = "";
        public decimal Price { get; set; }
        public string Description { get; set; } = "";
        public int Quantity { get; set; }
        public string Brand { get; set; } = "";
        public bool IsActive { get; set; } = true;
        public string IdCategory { get; set; } = "";
        public string UrlImage { get; set; } = "";
    }
}