using dotnet.api.Codes;
using dotnet.api.Migrations;
using dotnet.api.Models;
using System.Collections.Generic;
using System.Device.Location;
using System.Web.Http;
using System.Linq;

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
                var query = from p in Dados.Paradas
                            join j in Dados.ParadasOnibus on p.ParadaID equals j.ParadaID
                            join o in Dados.Onibus on j.OnibusID equals o.OnibusID
                            where o.OnibusID == item.OnibusID
                            select p;
                var parada = query.FirstOrDefault();
                if (parada != null)
                    item.Distancia = geo.GetDistanceTo(new GeoCoordinate(parada.Latitute, parada.Longitude));
                else
                    item.Distancia = geo.GetDistanceTo(new GeoCoordinate(-29.977258, -51.19064));
            }

            return onibus;
        }
    }
}
