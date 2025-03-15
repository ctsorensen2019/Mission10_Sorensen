using System.Runtime.CompilerServices;
using BowlerFun.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BowlerFun.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlerDbContext _bowlerContext;
        public BowlerController(BowlerDbContext temp)
        {
            _bowlerContext = temp;
        }

        [HttpGet(Name = "GetBowler")]
        public IEnumerable<Bowler> Get()
        {
            var bowlerList = _bowlerContext.Bowlers.ToList();

            return (bowlerList);
        }
    }
}
