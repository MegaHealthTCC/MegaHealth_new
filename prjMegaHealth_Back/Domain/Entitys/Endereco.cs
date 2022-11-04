namespace Domain
{
    public class Endereco
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string PessoaId { get; set; } = "";
        public string CEP {get; set;} ="";
        public string Cidade {get; set;} = "";
        public int Numero {get; set;}
    }
}