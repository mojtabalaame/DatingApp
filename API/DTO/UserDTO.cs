using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTO
{
    public class UserDTO
    {
        public required string Username { get; set; }
        public required string Token { get; set; }
    }
}