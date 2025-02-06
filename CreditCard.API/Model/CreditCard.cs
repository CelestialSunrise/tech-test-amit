using System.Text.Json.Serialization;

namespace CreditCard.API.Model
{
    public class CreditCardDTO
    {
        [JsonPropertyName("credit_card_number")]
        public string Number { get; set; } = string.Empty;

        [JsonPropertyName("credit_card_expiry_date")]
        public string ExpiryDate { get; set; } = string.Empty;

        [JsonPropertyName("credit_card_type")]
        public string Type { get; set; } = string.Empty;
        public int NumberOfCards { get; set; }
    }
}
