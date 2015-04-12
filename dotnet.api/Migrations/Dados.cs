using dotnet.api.Models;
using System.Collections.Generic;

namespace dotnet.api.Migrations
{
    public static class Dados
    {
        public static OnibusModel[] Onibus
        {
            get
            {
                return new OnibusModel[] { 
                    new OnibusModel{ Nome = "A. FEIJO / HUMAITA", Codigo = "B25", OnibusID = 127902, Notifica = true}, 
                    new OnibusModel{ Nome = "A. FEIJO/HUMAITA/JOAO PARIS", Codigo = "B251", OnibusID = 127903, Notifica = true}, 
                    new OnibusModel{ Nome = "A. FEIJO/JOAO PARIS/HUMAITA", Codigo = "B252", OnibusID = 127904, Notifica = true}, 
                    new OnibusModel{ Nome = "VILA FARRAPOS", Codigo = "703", OnibusID = 128079, Notifica = true}, 

                    new OnibusModel{ Nome = "HUMAITA", Codigo = "704", OnibusID = 128082, Notifica = true}, 
                    new OnibusModel{ Nome = "HUMAITA/A.J.RENNER/DONA TEODORA", Codigo = "7041", OnibusID = 128084, Notifica = true},

                    new OnibusModel{ Nome = "BAIRRO ANCHIETA", Codigo = "702", OnibusID = 128078, Notifica = true},
                    new OnibusModel{ Nome = "AEROPORTO/IGUATEMI", Codigo = "B09", OnibusID = 128093, Notifica = true},
                    new OnibusModel{ Nome = "AEROPORTO/IGUATEMI/ANCHIETA", Codigo = "B091", OnibusID = 128094, Notifica = true},
                };
            }
        }


        public static ParadaModel[] Paradas
        {
            get
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
}