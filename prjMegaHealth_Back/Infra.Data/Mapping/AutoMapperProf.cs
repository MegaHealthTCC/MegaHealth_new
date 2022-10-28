using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using Domain.Model;
using Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Infra.Data.Mapping
{
    
    public class AutoMapperProf : Profile
    {
        public AutoMapperProf()
        {
            CreateMap<Categoria, CategoriaModel>().ReverseMap();
            CreateMap<Vendor, VendorModel>().ReverseMap();
            CreateMap<Pessoa, PessoaModel>().ReverseMap();
            CreateMap<Produto, ProdutoModel>().ReverseMap();
        }
    }
}