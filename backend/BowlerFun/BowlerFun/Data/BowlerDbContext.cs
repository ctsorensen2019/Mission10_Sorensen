using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;

namespace BowlerFun.Data
{
    public class BowlerDbContext : DbContext
    {

        public BowlerDbContext(DbContextOptions<BowlerDbContext> options) : base(options)
        {

        }

        public DbSet<Bowler> Bowlers { get; set; }


        // This table corresponds to 'Categories'
        public DbSet<BowlerTeam> Teams { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) //Seed Data
        {
            modelBuilder.Entity<BowlerTeam>().HasData();
        }
    }
}
