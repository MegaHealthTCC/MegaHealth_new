namespace Domain
{
    public class Pedido : EntityBase
    {
       
        public decimal Value { get; set; }
        public string PaymentMethodId { get; set; } = "";
        public DateTime OrderDate { get; set; }
        public string PessoaId { get; set; } = "";
    }
}
