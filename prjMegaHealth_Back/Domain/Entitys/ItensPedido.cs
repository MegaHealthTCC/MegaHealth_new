using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain //.Entitys
{
    public class ItensPedido
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Id_Produto { get; set; }
        public string Id_Pedido { get; set; }
        public Pedido Pedido { get; set; }
        public int Quant_Itens_Pedido { get; set; }
        public decimal PrecoTotal { get; set; }
        public decimal ValUnit { get; set; }
    }
}