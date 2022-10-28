namespace Domain
{
    public class Endereco
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string ClientId { get; set; } = "";
        public string CEP {get; set;} ="";
        public string City {get; set;} = "";
        public int Number {get; set;}
    }
}