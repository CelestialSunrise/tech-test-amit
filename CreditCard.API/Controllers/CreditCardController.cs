using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using CreditCard.API.Model;

namespace CreditCard.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CreditCardController : ControllerBase
    {
        const int NUMBER_OF_CARDS = 10;

        private static List<CreditCardDTO> _cachedCreditCards = new List<CreditCardDTO>();

        private readonly HttpClient _httpClient;
        public CreditCardController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet("get-cards")]
        public async Task<IActionResult> GetCreditCards()
        {
            await FetchCreditCards();

            var result = _cachedCreditCards.Select(c => new { c.Number, c.Type, c.ExpiryDate }).ToList();

            return Ok(result);
        }

        [HttpGet("card-by-type")]
        public IActionResult GetCreditCardByType()
        {
            var countCardsByType = _cachedCreditCards.GroupBy(c => c.Type)
                                             .ToDictionary(g => g.Key, g => g.Count());

            return Ok(countCardsByType);
        }

        [HttpGet("count-expiring-after-2027")]
        public IActionResult CountExpiringAfter2027()
        {
            int cardCount = _cachedCreditCards.Count(c => DateTime.TryParse(c.ExpiryDate, out var date) && date > new DateTime(2027, 1, 1));

            return Ok(cardCount);
        }

        [HttpGet("count-expiring-after/{date}")]
        public IActionResult CountExpiringAfter([FromRoute] DateTime date)
        {
            int cardCount = _cachedCreditCards.Count(c => DateTime.TryParse(c.ExpiryDate, out var dateOut) && dateOut > date);

            return Ok(cardCount);
        }

        private async Task FetchCreditCards()
        {
            var response = await _httpClient.GetStringAsync(string.Format("https://random-data-api.com/api/v2/credit_cards?size={0}", NUMBER_OF_CARDS));

            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            _cachedCreditCards = JsonSerializer.Deserialize<List<CreditCardDTO>>(response, options) ?? new List<CreditCardDTO>();

        }
    }
}
