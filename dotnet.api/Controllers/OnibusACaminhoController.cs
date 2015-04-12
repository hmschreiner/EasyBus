using dotnet.api.Codes;
using dotnet.api.Migrations;
using dotnet.api.Models;
using System.Collections.Generic;
using System.Device.Location;
using System.Web.Http;

namespace WebApplication2.Controllers
{
    [AllowCrossSiteJson]
    public class OnibusACaminhoController : ApiController
    {
        public IEnumerable<OnibusModel> Get(double latitude, double longitude)
        {
            var onibus = Dados.Onibus;

            var geo = new GeoCoordinate(latitude, longitude);

            foreach (var item in onibus)
            {
                item.Distancia = geo.GetDistanceTo(new GeoCoordinate(-29.977258, -51.190642));
            }

            return onibus;
        }
    }
}
