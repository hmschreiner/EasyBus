using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dotnet.api.Models
{
    public class OnibusModel
    {
        public int OnibusID { get; set; }

        public string Codigo { get; set; }

        public string Nome { get; set; }

        public double Distancia { get; set; }

        public bool Notifica { get; set; }
    }
}