using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain //.Entitys
{
    public class ItensCompra
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string IdProduto { get; set; }
        public string IdCompra {get; set; }
        public int Quant_ItensCompra { get; set; }
    }
}