using dotnet.api.Codes;
using dotnet.api.Migrations;
using dotnet.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication2.Controllers
{
    [AllowCrossSiteJson]
    public class ParadasController : ApiController
    {
        public IEnumerable<ParadaModel> Get()
        {
            return Dados.Paradas;
        }
    }
}
