using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BowlerFun.Data
{
    public class BowlerTeam
    {
        [Key]
        public int TeamID { get; set; }

        public string TeamName { get; set; }

        public int CaptainID { get; set; }

    }
}

