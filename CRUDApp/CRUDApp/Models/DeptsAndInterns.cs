using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDApp.Models
{
    public class Intern
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public int DepartmentId { get; set; }

    }

    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<Intern> Interns { get; set; }
    }
}
