using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces
{
    public interface IMessageRepository
    {
        void AddMessage(Message message);
        void RemoveMessage(Message message);
        Task<Message> GetMessage(int id);
        Task<PagedList<MessageDto>> GetMessagesForUser();        
        Task<IEnumerable<MessageDto>> GetMessageThread(int currentuserId, int recipientId);
        Task<bool> SaveAllAsync();
    }
}