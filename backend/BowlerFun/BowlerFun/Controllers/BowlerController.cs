using System.Runtime.CompilerServices;
using BowlerFun.Models;
using Microsoft.EntityFrameworkCore;
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
        public IEnumerable<object> Get()
        {
            var bowlerList = _bowlerContext.Bowlers
                .Include(b => b.Team)
                .Select(b => new
                {
                    b.BowlerId,
                    b.BowlerLastName,
                    b.BowlerFirstName,
                    b.BowlerMiddleInit,
                    b.BowlerAddress,
                    b.BowlerCity,
                    b.BowlerState,
                    b.BowlerZip,
                    b.BowlerPhoneNumber,
                    TeamName = b.Team != null ? b.Team.TeamName : "No Team" // Avoid circular reference
                })
                .ToList();

            return bowlerList;
        }
    }
}
