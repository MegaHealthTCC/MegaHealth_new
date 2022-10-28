using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain //.Entitys
{
    public class Vendor
    {
        public string Id  { get; set; } = Guid.NewGuid().ToString();
        public string Forn_Name { get; set; } = "";
        public string Forn_CNPJ { get; set; } = "";
        public string Email { get; set; } = "";
        public string Tel { get; set; } = "";
    }
}