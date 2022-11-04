namespace Domain
{
    public class Pedido
    { 
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public decimal Value { get; set; }
        public string PaymentMethodId { get; set; } = "";
        public DateTime OrderDate { get; set; }
        public string PessoaId { get; set; } = "";
        public List<ItensPedido> LstItensPedidos { get; set; }
    }
}
