using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace API.DTO
{
    public class RegisterDTO
    {
        [Required]
        public required string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4)]
        public required string Password { get; set; }
    }
}