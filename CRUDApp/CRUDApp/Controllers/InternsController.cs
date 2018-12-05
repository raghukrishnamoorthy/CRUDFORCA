using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CRUDApp.Models;

namespace CRUDApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InternsController : ControllerBase
    {
        private readonly CRUDAppContext _context;

        public InternsController(CRUDAppContext context)
        {
            _context = context;
            
        }

        // GET: api/Interns
        [HttpGet]
        public IEnumerable<Intern> GetIntern()
        {
            return _context.Intern;

        }

        // GET: api/Interns/5
        [HttpGet("{id}")]
        public IEnumerable<Intern> GetIntern([FromRoute] int id)
        {
            var interns = from intern in _context.Intern
                          where intern.DepartmentId == id
                          select intern;

            return interns;
        }

        // PUT: api/Interns/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIntern([FromRoute] int id, [FromBody] Intern intern)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != intern.Id)
            {
                return BadRequest();
            }

            _context.Entry(intern).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InternExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Interns
        [HttpPost]
        public async Task<IActionResult> PostIntern([FromBody] Intern intern)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Intern.Add(intern);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIntern", new { id = intern.Id }, intern);
        }

        // DELETE: api/Interns/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIntern([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var intern = await _context.Intern.FindAsync(id);
            if (intern == null)
            {
                return NotFound();
            }

            _context.Intern.Remove(intern);
            await _context.SaveChangesAsync();

            return Ok(intern);
        }

        private bool InternExists(int id)
        {
            return _context.Intern.Any(e => e.Id == id);
        }
    }
}