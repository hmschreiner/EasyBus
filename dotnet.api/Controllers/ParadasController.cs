using dotnet.api.Codes;
using dotnet.api.ContextoDados;
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
            return new ParadaModel[] { 
                new ParadaModel{ ParadaID = 3719, Latitute = -29.97877700000000000, Longitude = -51.19641500000000000},
                new ParadaModel{ ParadaID = 5939, Latitute = -29.97877300000000000, Longitude = -51.18900100000000000},
                new ParadaModel{ ParadaID = 3983, Latitute = -29.97877700000000000, Longitude = -51.17880000000000000},
                new ParadaModel{ ParadaID = 268, Latitute = -30.16219500000000000, Longitude = -51.18286000000000000},
            };
        }
    }
}
