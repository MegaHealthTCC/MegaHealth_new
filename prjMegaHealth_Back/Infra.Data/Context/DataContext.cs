using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Infra.Data.Context
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Categoria> Categoria{get; set;}
        public DbSet<Pessoa> Pessoa {get; set;}
        public DbSet<Endereco> Endereco {get; set;}
        // public DbSet<EntityBase> EntityBase {get; set;}
        // public DbSet<PaymentMethod> PaymentMethod {get; set;}
        public DbSet<Pedido> Pedido {get; set;}
        public DbSet<Produto> Produto {get; set;}
        public DbSet<ItensCompra> ItensCompra {get; set;}
        public DbSet<ItensPedido> ItensPedido {get; set;}
        public DbSet<Vendor> Vendor {get; set;}
    }
}