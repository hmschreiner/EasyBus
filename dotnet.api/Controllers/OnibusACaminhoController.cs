﻿using dotnet.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication2.Controllers
{
    public class OnibusACaminhoController : ApiController
    {
        public IEnumerable<OnibusModel> Get()
        {
            return new OnibusModel[] { 
                new OnibusModel{ Nome = "Onibus 1", OnibusID = 1, Distancia = 55}, 
                new OnibusModel{ Nome = "Onibus 2", OnibusID = 2, Distancia = 51}, 
                new OnibusModel{ Nome = "Onibus 3", OnibusID = 3, Distancia = 12}, 
            };
        }
    }
}
