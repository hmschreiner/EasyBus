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
    public class OnibusACaminhoController : ApiController
    {
        public IEnumerable<OnibusModel> Get()
        {
            var contexto = new ContextoEmMemoria();

            return contexto.OnibusModel;

            using (var db = new ApplicationDbContext())
            {
                return db.Set<OnibusModel>();
            }

            return new OnibusModel[] { 
                new OnibusModel{ Nome = "Onibus 1", OnibusID = 1, Distancia = 55, Notifica = true}, 
                new OnibusModel{ Nome = "Onibus 2", OnibusID = 2, Distancia = 51, Notifica = false}, 
                new OnibusModel{ Nome = "Onibus 3", OnibusID = 3, Distancia = 12, Notifica = false}, 
            };
        }
    }
}
