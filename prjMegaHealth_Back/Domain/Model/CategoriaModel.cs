using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain.Model
{
    public class CategoriaModel
    {
         public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Description { get; set; } = "";
    }
}