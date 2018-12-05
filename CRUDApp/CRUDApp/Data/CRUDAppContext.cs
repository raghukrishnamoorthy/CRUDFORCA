using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CRUDApp.Models;

namespace CRUDApp.Models
{
    public class CRUDAppContext : DbContext
    {
        public CRUDAppContext (DbContextOptions<CRUDAppContext> options)
            : base(options)
        {
        }

        public DbSet<CRUDApp.Models.Department> Department { get; set; }

        public DbSet<CRUDApp.Models.Intern> Intern { get; set; }
    }
}
