using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateOnly dob)
        {
            DateOnly today = DateOnly.FromDateTime(DateTime.Now);
            int Age = today.Year - dob.Year;
            return Age;
        }
    }
}