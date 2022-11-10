using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
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
    public class ProdutoController : ControllerBase
    {

        public IBaseService<Produto> Service { get; }
        public IMapper Mapper { get; }

        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment hostingEnvironment;
        public ProdutoController(
            IBaseService<Produto> service, 
            IMapper mapper,
            IHttpContextAccessor httpContextAccessor, 
            IWebHostEnvironment hostingEnvironment
            )
        {
            this.Mapper = mapper;
            this.Service = service;
            this.httpContextAccessor = httpContextAccessor;
            this.hostingEnvironment = hostingEnvironment;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var entity = await this.Service.GetAll();
                var results = this.Mapper.Map<ProdutoModel[]>(entity);
                return Ok(results);
            }
            catch (System.Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetById(string Id)
        {
            var entity = await this.Service.GetById(Id);
            var results = this.Mapper.Map<ProdutoModel>(entity);
            return Ok(results);
        }

        [HttpPost]
        public async Task<IActionResult> Post(ProdutoModel produto)
        {
            var product1 = this.Mapper.Map<Produto>(produto);
            product1.UrlImage = "assets/" + Path.GetFileName(produto.UrlImage);

            this.Service.Add(product1);

            if (await this.Service.SaveChangesAsync())
                return Created($"api/Produto/{produto.Id}", produto);
            return BadRequest();
        }

        [HttpPost("EnviarArquivo")]
         public IActionResult EnviarArquivo()
        {
            try
            {
                var formFile = this.httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
                var nomeArquivo = formFile.FileName;
                var extensao = nomeArquivo.Split(".").Last();
                string novoNomeArquivo = GerarNovoNomeArquivo(nomeArquivo, extensao);
                var pastaImages = this.hostingEnvironment.WebRootPath + "\\images\\";
                var nomeCompleto = pastaImages + novoNomeArquivo;

                using (var streamArquivo = new FileStream(nomeCompleto, FileMode.Create))
                {
                    formFile.CopyTo(streamArquivo);
                }
                return Ok(nomeArquivo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        private string GerarNovoNomeArquivo(string nomeArquivo, string extensao)
        {

            var arrayNomeCompacto = Path.GetFileNameWithoutExtension(nomeArquivo).Take(10).ToArray();
            var novoNomeArquivo = new string(arrayNomeCompacto).Replace(" ", "-");
            novoNomeArquivo = $"{novoNomeArquivo}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}.{extensao}";
            return novoNomeArquivo;
        }

        // public async Task<IActionResult> UploadFile()
        // {
        //     if (!Request.Form.Files.Any())
        //         return BadRequest("No files found in the request");

        //     if (Request.Form.Files.Count > 1)
        //         return BadRequest("Cannot upload more than one file at a time");

        //     if (Request.Form.Files[0].Length <= 0)
        //         return BadRequest("Invalid file length, seems to be empty");

        //     try
        //     {
        //         string webRootPath = this.hostingEnvironment.WebRootPath;
        //         string uploadsDir = Path.Combine(webRootPath, "uploads");

        //         // wwwroot/uploads/
        //         if (!Directory.Exists(uploadsDir))
        //             Directory.CreateDirectory(uploadsDir);

        //         IFormFile file = Request.Form.Files[0];
        //         string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
        //         string fullPath = Path.Combine(uploadsDir, fileName);

        //         var buffer = 1024 * 1024;
        //         using var stream = new FileStream(fullPath, FileMode.Create, FileAccess.Write, FileShare.None, buffer, useAsync: false);
        //         await file.CopyToAsync(stream);
        //         await stream.FlushAsync();

        //         string location = $"images/{fileName}";

        //         var result = new
        //         {
        //             message = "Upload successful",
        //             url = location
        //         };

        //         return Ok(result);
        //     }
        //     catch (Exception ex)
        //     {
        //         return StatusCode(StatusCodes.Status500InternalServerError, "Upload failed: " + ex.Message);
        //     }
        // }




       

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(string Id)
        {
            var entity = await this.Service.GetById(Id);

            if (entity == null) return NotFound();
            this.Service.Delete(entity);

            if (await this.Service.SaveChangesAsync()) return Ok();
            return BadRequest();
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> Put(string Id, ProdutoModel model)
        {
            var entity = await this.Service.GetById(Id);

            if (entity == null) return NotFound();

            this.Mapper.Map(model, entity);
            this.Service.Update(entity);

            if (await this.Service.SaveChangesAsync())
                return Created($"api/Produto/{model.Id}", this.Mapper.Map<ProdutoModel>(entity));
            return BadRequest();
        }
    }
}