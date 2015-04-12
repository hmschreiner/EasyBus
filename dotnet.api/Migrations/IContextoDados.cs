using System.Linq;

namespace dotnet.api.Models
{
    public interface IContextoDados
    {
        IQueryable<OnibusModel> OnibusModel { get; }

        void Adiciona<TModel>(TModel model) where TModel : class;

        void Remove<TModel>(TModel model) where TModel : class;

        void Publica();
    }
}