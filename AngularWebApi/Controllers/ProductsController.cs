using AngularWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace AngularWebApi.Controllers
{
    public class ProductsController : ApiController
    {
        // GET api/products
        public IEnumerable<Product> Get()
        {
            return new ProductRepository().Retrieve();
        }

        // GET api/products/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/products
        public IEnumerable<Product> Post([FromBody]Product value)
        {
            ProductRepository repo = new ProductRepository();
            repo.Save(value);
            return repo.Retrieve();
        }

        // PUT api/products/5
        public IEnumerable<Product> Put(int id, [FromBody]Product value)
        {
            ProductRepository repo = new ProductRepository();
            value.ProductId = id;
            repo.Update(value);
            return repo.Retrieve();
        }

        // DELETE api/products/5
        public void Delete(int id)
        {
        }
    }
}
