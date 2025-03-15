using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BowlerFun.Data
{
    public class Bowler
    {
            // Required Primary Key
            [Key]
            [Required]
            public int BowlerID { get; set; }

            [Required]
            public string BowlerLastName { get; set; }

            [Required]
            public string BowlerFirstName { get; set; }

            [Required]
            public string BowlerMiddleInit { get; set; }

            [ForeignKey("TeamID")]
            public int? TeamID { get; set; }  // Foreign Key

            [Required]
            public BowlerTeam? BowlerTeam { get; set; }  // Navigation propert

            [Required]
            public int BowlerAddress { get; set; }

            [Required]
            public string? BowlerCity { get; set; }

            [Required]
            public string? BowlerZip { get; set; }

            
        }
    }

