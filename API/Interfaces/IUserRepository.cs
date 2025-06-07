using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTO;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable<MemberDTO>> GetMembersAsync();
        Task<MemberDTO?> GetMemberByUsernameAsync(string username);
        Task<IEnumerable<AppUser>> GetUsersAsync();

        Task<AppUser?> GetUserByIdAsync(int id);
        Task<AppUser?> GetUserByUsernameAsync(string username);
        void UpdateUser(AppUser user);
        Task<bool> SaveAllAsync();



    }
}