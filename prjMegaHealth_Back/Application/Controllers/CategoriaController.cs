using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using Domain.Interfaces;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;


namespace Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        public IBaseService<Categoria> Service { get; }
        public IMapper Mapper { get; }
        public CategoriaController(IBaseService<Categoria> service, IMapper mapper )
        {
            this.Mapper = mapper;
            this.Service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get(){
            try {
                var entity = await this.Service.GetAll();
                var results = this.Mapper.Map<CategoriaModel[]>(entity);
                return Ok(results);
            }
            catch(System.Exception ex){
                throw new Exception(ex.Message);
            }
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById(string Id){
            var entity = await this.Service.GetById(Id);
            var results = this.Mapper.Map<CategoriaModel>(entity);
            return Ok(results);
        }

        [HttpPost]
        public async Task<IActionResult> Post(CategoriaModel categoria){
            var cat1 = this.Mapper.Map<Categoria>(categoria);

            this.Service.Add(cat1);

            if(await this.Service.SaveChangesAsync())
                return Created($"api/Categoria/{categoria.Id}", categoria);
            return BadRequest();
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(string Id){
            var entity = await this.Service.GetById(Id);

            if(entity == null) return NotFound();
            this.Service.Delete(entity);

            if(await this.Service.SaveChangesAsync()) return Ok();
            return BadRequest();
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult>Put(string Id, CategoriaModel model){
            var entity = await this.Service.GetById(Id);

            if(entity == null) return NotFound();
            
            this.Mapper.Map(model, entity);
            this.Service.Update(entity);

            if(await this.Service.SaveChangesAsync())
                return Created($"api/Caregoria/{model.Id}", this.Mapper.Map<CategoriaModel>(entity));
            return BadRequest();
        }
    }
}